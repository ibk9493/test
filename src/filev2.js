const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('../csvs/example.txt');
    console.log(data.toString());
  } catch (err) {
    console.error(err);
  }
}

async function writeFile() {
  try {
    await fs.writeFile('example.txt', 'Hello, World!');
    console.log('File written successfully');
  } catch (err) {
    console.error(err);
  }
}

readFile();
writeFile();