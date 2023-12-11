const db = require("../database/index");

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

const getone = (res, req) => {
  db.query(
    "SELECT * FROM users WHERE name=?",
    [req.params.name],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
    }
  );
};

const updateprice = (res, req) => {
  const balance = req.body.balance;
  const id = req.params.id;
  const sql = `UPDATE users SET balance =${balance} WHERE (id =${id});`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
};

module.exports = { updateprice, getone, getAllusers };
