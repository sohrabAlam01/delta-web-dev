// let figlet = require("figlet");
// figlet("Hello");
let figlet = require("figlet");

figlet("MUSKAN", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
