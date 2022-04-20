const ProfileModel = require("../models/ProfileModel");

exports.CreateProfile = (req, res) => {
  let reqBody = req.body;
  ProfileModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

exports.UserLogin = (req, res) => {
  let reqBody = req.body;
  let UserName = req.body['UserName'];
  let Password = req.body['Password'];
  res.status(200).json({ status: "success", data: Password });
};
