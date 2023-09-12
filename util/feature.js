import Jwt from "jsonwebtoken";

export const cookiesSend = (res, User, message, statusCode = 200) => {
  const token = Jwt.sign({ _id: User._id }, process.env.JWT_SECRET);

  console.log(token);
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 15 * 60 * 1000,
    sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
    secure: process.env.NODE_ENV === "production", // Set to true in production (HTTPS)
  });
  res.status(statusCode).json({ success: true, message });
};
