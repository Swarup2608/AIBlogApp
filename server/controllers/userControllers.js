import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

// Token Generator Function
const generateToken = (userId) => {
    return JWT.sign({ userId }, process.env.JSON_SECRET_KEY, { expiresIn: '1d' });
};

// Create User Controller
const userCreate = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input presence
        if (!name || !email || !password) {
            return res.json({ success: false, message: "All fields are required!" });
        }

        // Check email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email!" });
        }

        // Check password strength
        if (password.length < 8) {
            return res.json({ success: false, message: "Password must be at least 8 characters long!" });
        }

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists!" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        // Generate token
        const authToken = generateToken(newUser._id);

        res.json({ success: true, token: authToken });

    } catch (error) {
        console.error("Error in userCreate:", error);
        res.json({ success: false, message: "Server Error!" });
    }
};


const userLogin = async (req, res) => {
    try {
        const {email,password} = req.body;
        // Check if email is valid
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter a Valid Email!" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a valid Password!" });
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found!" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = generateToken(user._id);
            return res.json({ success: true, token });
        }
        return res.json({ success: false, message: "Invalid Credentials!" });
    } catch (error) {

        console.error("Error in userCreate:", error);
        res.json({ success: false, message: "Server Error!" });
    }


}

const getUser = (req, res) => {

}

const getUserCredits = (req, res) => {

}

const updateUser = (req, res) => {

}

export { userCreate, userLogin, getUser, getUserCredits, updateUser }