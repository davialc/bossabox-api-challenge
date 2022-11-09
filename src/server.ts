import { connectDatabase } from './database';
import { app } from './app';

(async function main() {
	await connectDatabase().then(() => {
		app.listen(3000, () => console.log('HTTP server running on port', 3000));
	});
})();
