import { User } from "../models/user.models.js";

const UserPage = async (req, res) => {
  try {
    // const flashMessage = req.cookies.flashMessage;

    // Remove the flash message after reading it
    // res.clearCookie("flashMessage");

    const allUsers = await User.find().select("-password");

    if (!allUsers) {
      return res.status(404).json({ message: "Users not found" });
    }
    res.json({
      user: allUsers, // Send allUsers as "user"
    });
    // flashMessage: flashMessage, // Send flash message
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { UserPage };
