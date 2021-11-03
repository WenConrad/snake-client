const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'i') {
    for (i = 0; i < 5; i++) {
      setTimeout(() => {connection.write("Move: up")}, 50*i);
    }
  } else if (key === 'j') {
    for (i = 0; i < 5; i++) {
      setTimeout(() => {connection.write("Move: left")}, 50*i);
    }
  } else if (key === 'k') {
    for (i = 0; i < 5; i++) {
      setTimeout(() => {connection.write("Move: down")}, 50*i);
    }
  } else if (key === 'l') {
    for (i = 0; i < 5; i++) {
      setTimeout(() => {connection.write("Move: right")}, 50*i);
    }
  } else if (key === '1') {
    connection.write("Say: Well Met!");
  } else if (key === '2') {
    connection.write("Say: I need healing!");
  } else if (key === '3') {
    connection.write("Say: ?");
  } else if (key === '4') {
    connection.write("Say: PKPKPKPK");
  } else if (key === '5') {
    connection.write("Say: 1v1 me bro");
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