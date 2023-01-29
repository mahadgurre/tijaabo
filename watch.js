// Node.js program to demonstrate the
// fs.watch() method

// Import the filesystem module
const fs = require('fs');

fs.watch("file.txt", (eventType, filename) => {
console.log("The file", filename, "was modified!");
console.log("The type of change was:", eventType);
});


setTimeout(
() => fs.renameSync("file.txt", "new_file.txt"),
100
);


setTimeout(
() => fs.renameSync("new_file.txt", "file.txt"),
200
);


setTimeout(
() => fs.writeFileSync("file.txt",
"The file is modified"), 300
);
