const db = require("../database/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getAllusers = (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const register = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ? ";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already Exists!");

    // hashing the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    // adding a new user
    const q = "INSERT INTO  users (`username`,`email`,`password`) VALUES (?) ";
    const values = [req.body.username, req.body.email, hashedPassword];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created");
    });
  });
};

const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");
    // creating a token for the user
    const token = jwt.sign({ idUsers: data[0].idUsers }, "secretkey");

    // seperate the password to return the infos without password even if it's hashed
    const { password, ...others } = data[0];
    // to send the infos and the cookie
    res
      .cookie("accessToken", token, {
        // so a random user or script can't use our cookie
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

const logout = (req, res) => {
  // we are gonna clear the cookie that we named ("accessToken")
  res
    .clearCookie("accessToken", {
      secure: true,
      // the PORTS of the backend and frontend are not the same port so the server gonna block the cookie request so with sameSite:none we will be able to clear the cookie
      sameSite: "none",
    })
    .status(200)
    .json("User has been loged out");
};

module.exports = { getAllusers, login, register, logout };
