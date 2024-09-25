import jwt from "jsonwebtoken";


const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks//cannot acces by document.cookie
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks//cannnot acces when you scroll in your browser and click on the image then that image url conatin post method request which will go to server of an attacker and attacker can not acces it by using 	const token = req.cookies.jwt; like this
		secure: process.env.NODE_ENV !== "development",
	});
};

export default generateTokenAndSetCookie;