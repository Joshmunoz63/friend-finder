var path = require("path");

module.exports = (app) => {
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "app/public/survey.html"));
	});

	// fallback use route for homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "app/public/home.html"));
	});
};