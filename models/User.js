import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	userID: {
		type: Number,
		min: 1111,
		max: 9999,
		unique: true,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
		maxLength: 50,
	},
	lastName: {
		type: String,
		required: true,
		maxLength: 50,
	},
	password: {
		type: String,
		required: true,
		maxLength: 50,
	},
	roleID: {
		type: Number,
		min: 11,
		max: 99,
		required: true,
	},
	creatorID: {
		type: Number,
		min: 1111,
		max: 9999,
		required: true,
	},
	creationDate: {
		type: Date,
		required: true,
		default: new Date(),
	},
	disabled: {
		type: Boolean,
		required: true,
		default: false,
	},
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
