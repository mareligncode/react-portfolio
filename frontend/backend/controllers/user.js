import User from '../models/user.js';

 const register = async (req, res) => {
    const { name, email,subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            status: false,
            message: "All fields are required",
        });
    }

    try {
        const newMessage = new User({
            name,
            email,
            subject,
            message,
        });

        await newMessage.save();

        return res.status(201).json({
            status: true,
            message: "Message sent successfully!",
        });

    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({
            status: false,
            message: "Internal server error",
        });
    }
};
export default register