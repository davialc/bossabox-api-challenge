import mongoose from 'mongoose';

export async function connectDatabase(database = 'bossabox') {
	await mongoose.connect(`mongodb://localhost/${database}`).then(() => {
		console.log('Database connection created');
	});
}
