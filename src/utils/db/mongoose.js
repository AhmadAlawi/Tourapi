const { connect } = require('mongoose');

(async () => {
	try {
		console.log('test')
		console.log(process.env.MONGODB_URL)
		await connect('mongodb://root:pass123@88.208.198.235:27017/?authSource=admin', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		}); 
	} catch (error) {
		console.error(error);  
	}
})();

