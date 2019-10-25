const router = require("express").Router();
const User = require("../model/User");
// const Joi = require("@hapi/joi");

// const schema = {
//   name: Joi.string()
//     .min(6)
//     .required(),
//   email: Joi.string()
//     .min(6)
//     .required()
//     .email(),
//   password: Joi.string()
//     .min(6)
//     .required()
// };

// const schema = Joi.object({
//   name: Joi.string()
//     .min(6)
//     .required(),
//   email: Joi.string()
//     .min(6)
//     .required()
//     .email(),
//   password: Joi.string()
//     .min(6)
//     .required()
// });

// const { error } = registerValidation(req.body);
// if (error) return res.status(400).send(error.details[0].message);

router.post("/register", async (req, res) => {
  // const validationSchema = Joi.object(req.body, schema);
  // res.send(validationSchema);

  //   //Lets validate the data before we make a user

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;
