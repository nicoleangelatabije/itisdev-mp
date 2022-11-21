import dbConnect from "../../lib/dbConnect";
import User from "../../models/UserSchema";

export default async (req, res) => {
	await dbConnect();

	const userInfo = req.body;
	var invalidUserID = false;

	User.find({ userID: userInfo.userID }, null, (err, result) => {
		if (err) {
			console.log(err);
			invalidUserID = true;
		} else if (result.length > 0) {
			console.log("User id already present");
			invalidUserID = true;
		}
	});

	if (invalidUserID) {
		res.json("User ID " + userInfo.userID + " is already taken");
	} else {
		await User.create(userInfo);
		res.json("User ID " + userInfo.userID + " created");
	}
};
