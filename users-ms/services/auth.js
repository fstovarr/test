const { users, emails_users } = require("../models/index.js");
var jwt = require("jsonwebtoken");

module.exports = class Auth {
  generateToken(user) {
    const { user_id, first_name, last_name } = user;
    return jwt.sign(
      { user_id, first_name, last_name },
      process.env.JWT_SECRET,
      {
        algorithm: "HS384",
        audience: process.env.JWT_AUDIENCE,
        issuer: process.env.JWT_ISSUER,
        subject: process.env.JWT_SUBJECT_AUTH,
        expiresIn: "12h",
      }
    );
  }

  async authenticate(email, digest) {
    const email_user = await emails_users.findOne({
      where: { email, active: true },
      include: [{ model: users }],
    });

    if (email_user === null) throw { status: 404, message: "Email not found" };

    if (email_user.user.validateDigest(digest) === false)
      throw { status: 401, message: "Invalid password" };

    return Promise.resolve(this.generateToken(email_user.user));
  }
};
