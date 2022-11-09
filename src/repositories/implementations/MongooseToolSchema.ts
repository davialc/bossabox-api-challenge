import mongoose, { Schema } from 'mongoose';

const toolSchema = new Schema({
	id: String,
	title: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	tags: [String],
});

export const MongooseTool = mongoose.model('Tool', toolSchema);
