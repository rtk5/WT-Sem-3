const fs = require("fs");
const dataToWrite = 'hello , my name is rithvik';
fs.writeFile('output.txt',dataToWrite, (err) => {
    if (err) {
        console.error('Error writing to file:',err);
    } else {
        console.log('Data written to file successfully!');
    }
});