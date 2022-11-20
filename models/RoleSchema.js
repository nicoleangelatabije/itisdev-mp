import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
	roleID: {
		type: String,
		minlength: 4,
		maxlength: 4,
		unique: true,
		required: true,
	},
	roleName: {
		type: String,
		required: true,
		maxLength: 50,
	},
});

const Role = mongoose.models.Role || mongoose.model("Role", RoleSchema);

export default Role;
