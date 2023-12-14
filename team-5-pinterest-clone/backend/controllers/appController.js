const db = require("../database/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");

//////rahma///

//Get All from all tabels:
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

const getAllSaved = (req, res) => {
  const sql = "SELECT * FROM saved";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const getAllPosts = (req, res) => {
  const sql = "SELECT * FROM postes";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const getAllComments = (req, res) => {
  const sql = "SELECT * FROM comment";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

//Get one from all tabels:
const getOneUser = (req, res) => {
  const sql = `SELECT * FROM users WHERE username='${req.params.username}'`;
  db.query(sql, (err, result) => {
    res.send(result);
  });
};

const getOnePost = (req, res) => {
  const sql = `SELECT * FROM postes WHERE idUsers=${req.params.idUsers}`;
  db.query(sql, (err, result) => {
    res.send(result);
  });
};

const getOneComment = (req, res) => {
  const sql = `SELECT * FROM comment WHERE idUsers=${req.params.idUsers}`;
  db.query(sql, (err, result) => {
    res.send(result);
  });
};

const getOneSavedByIdUsers = (req, res) => {
  const sql = `SELECT * FROM saved WHERE idUsers=${req.params.idUsers}`;
  db.query(sql, (err, result) => {
    res.send(result);
  });
};

const getOneSavedByIdSaved = (req, res) => {
  const sql = `SELECT * FROM saved WHERE idsaved=${req.params.idsaved}`;
  db.query(sql, (err, result) => {
    res.send(result);
  });
};

//Updates:

////Updates in users table:
const updateUsername = (req, res) => {
  const sql = `update users set username =${req.body.username} where idUsers =${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.save(result);
      console.log(result);
    }
  });
};
const updateUserEmail = (req, res) => {
  const email = req.body.email;
  const id = req.params.id;
  const sql = `UPDATE users SET email =${email} WHERE (idUsers =${id})`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.save(result);
      console.log(result);
    }
  });
};

const updateUserPhoto = (req, res) => {
  const photo = req.body.photo;
  const id = req.params.id;
  const sql = `UPDATE users SET photo =${photo} WHERE (idUsers =${id})`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.save(result);
      console.log(result);
    }
  });
};

const updateUserBio = (req, res) => {
  const bio = req.body.bio;
  const id = req.params.id;
  const sql = `UPDATE users SET bio =${bio} WHERE idUsers =${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.save(result);
      console.log(result);
    }
  });
};

const updateUserPassword = (req, res) => {
  const password = req.body.password;
  const id = req.params.id;
  const sql = `UPDATE users SET password =${password} WHERE idUsers =${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.save(result);
      console.log(result);
    }
  });
};

///Update in postes table:
const updatePostDescription = (req, res) => {
  const description = req.body.description;
  const id = req.params.id;
  const sql = `UPDATE postes SET description =${description} WHERE idpostes =${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.save(result);
      console.log(result);
    }
  });
};

const updatePostCategories = (req, res) => {
  const categories = req.body.categories;
  const id = req.params.id;
  const sql = `UPDATE postes SET categories =${categories} WHERE idpostes =${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.save(result);
      console.log(result);
    }
  });
};

const updatePostphoto = (req, res) => {
  const photo = req.body.photo;
  const id = req.params.id;
  const sql = `UPDATE postes SET photo =${photo} WHERE idpostes =${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.save(result);
      console.log(result);
    }
  });
};

///Update comment table:
const updateCommentBody = (req, res) => {
  const body = req.body.body;
  const id = req.params.id;
  const sql = `UPDATE postes SET body =${body} WHERE idcomment =${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.save(result);
      console.log(result);
    }
  });
};

//Delete:
const deleteSaved = (req, res) => {
  const sql = "delete from saved where idsaved ?";
  db.query(sql, [req.params.idsaved], (err, result) => {
    res.send(result);
  });
};

//Create Post:
const createPost = (req, res) => {
  const sql = "insert into postes SET ? ";
  db.query(sql, req.body, (err, result) => {
    res.send(result);
  });
};

const createUser = (req, res) => {
  const sql = "insert into users SET ? ";
  db.query(sql, req.body, (err, result) => {
    res.send(result);
  });
};

//Search:
const searchByCategories = (req, res) => {
  const categories = req.body;
  const sql = `select * from postes where categories='${categories}'`;
  db.query(sql, (err, result) => {
    res.send(result);
  });
};
const searchByUsername = (req, res) => {
  const Username = req.body;
  const sql = `select * from postes where username='${username}'`;
  db.query(sql, (err, result) => {
    res.send(result);
  });
};
///////////////rahma/////////////////

///////////////guez//////////////////

const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO postes(`users_idUsers`,`description`, `categories`, `photo`, `createdAt`) VALUES (?)";
    const values = [
      userInfo.idUsers,
      req.body.description,
      req.body.categories,
      req.body.photo,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created.");
    });
  });
};

const deletePost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q = "DELETE FROM postes WHERE `idPostes`=? AND `users_idUsers` = ?";

    db.query(q, [req.params.idPostes, userInfo.users_idUsers], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0)
        return res.status(200).json("Post has been deleted.");
      return res.status(403).json("You can delete only your post");
    });
  });
};

const getComments = (req, res) => {
  const q = `
    SELECT c.*, u.id AS userId, username, photo AS profilePic 
    FROM comment AS c 
    JOIN users AS u ON (u.idUsers = c.users_idUsers) 
    WHERE c.postes_idpostes = ? 
    ORDER BY c.createdAt DESC
  `;

  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

const addComment = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO comment(`postes_idpostes`, `users_idUsers`, `createdAt`, `body`) VALUES (?)";
    const values = [
      req.body.poestes_idpostes,
      userInfo.users_idUsers,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.body,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Comment has been created.");
    });
  });
};

const deleteComment = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const commentId = req.params.idcomment;
    const q =
      "DELETE FROM comment WHERE `idcomment` = ? AND `users_idUsers` = ?";

    db.query(q, [commentId, userInfo.users_idUsers], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0) return res.json("Comment has been deleted!");
      return res.status(403).json("You can delete only your comment!");
    });
  });
};

const getUser = (req, res) => {
  const userId = req.params.idUsers;
  const q = "SELECT * FROM users WHERE idUsers=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "UPDATE users SET `username`=?,`email`=?,`photo`=?,`bio`=? WHERE idUsers=? ";

    db.query(
      q,
      [
        req.body.username,
        req.body.email,
        req.body.photo,
        req.body.bio,
        userInfo.idUsers,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Updated!");
        return res.status(403).json("You can update only your post!");
      }
    );
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

module.exports = {
  getAllusers,
  login,
  register,
  logout,
  getAllusers,
  getAllSaved,
  getAllPosts,
  getAllComments,
  getOneUser,
  getOnePost,
  getOneComment,
  getOneSavedByIdUsers,
  getOneSavedByIdSaved,
  updateUsername,
  updateUserEmail,
  updateUserPhoto,
  updateUserBio,
  updateUserPassword,
  updatePostDescription,
  updatePostCategories,
  updatePostphoto,
  updateCommentBody,
  deleteSaved,
  deletePost,
  createPost,
  createUser,
  searchByCategories,
  searchByUsername,
  addPost,
  deletePost,
  getComments,
  addComment,
  deleteComment,
  getUser,
  updateUser,
};
