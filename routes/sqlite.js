var fs = require("fs");
var file = "IntB.db";
var exists = fs.existsSync(file);

var sqlite = require("sqlite3").verbose();
var db = new sqlite.Database(file);

db.serialize(function()
{
	if (!exists)
	{
		db.run("CREATE TABLE boltsdata (thing TEXT)");
	}
	
	var stmt = db.prepare("INSERT INTO Stuff VALUES (?)");

	//Insert random data

	var rnd;
	for (var i= 0; i< 10 ; i++)
	{
		rnd = Math.floor(Math.random() * 10000000);
		stmt.run("Thing %" + rnd);
	}

	stmt.finalize();

	db.each("SELECT rowid AS id, thing FROM Stuff", function(err,row)
	{
		console.log(row.id + ": " + row.thing);
	});

	db.close();
	//do Stuff bro!
});
