const { User } = require("../models");
const { comparePassword, hashPassword, generateToken } = require("../helpers");

class UserController {
    static async register(req, res, next) {
        try {
        const { username, email, password } = req.body;
        const hashedPassword = hashPassword(password);
        await User.create({ username, email, password: hashedPassword });
        res.status(201).json({message : "User created successfully"})
        } catch (err) {
        next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw { name: "LoginError" };
            }
            const isValid = comparePassword(password, user.password);
            if (!isValid) {
                throw { name: "LoginError" };
            }
            const access_token = generateToken({ id: user.id, email: user.email });
            res.status(200).json({ access_token });
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController;