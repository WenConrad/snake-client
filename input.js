const { inputCommands } = require("./constants");

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else {
    inputCommands[key](connection);
  }
};

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = {setupInput};