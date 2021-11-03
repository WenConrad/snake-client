const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  
  conn.setEncoding("utf8");

  conn.on('connect',() => {
    console.log('Successfully connected to game server');
  });
  
  conn.on('connect', () => {
    conn.write('Name: nek');
  });
  
  conn.on('data', (message) => {
    console.log(message);
  });
  
  conn.on('end', () => {
    console.log("Disconnected from game server");
  });
    
  return conn;
};

module.exports = {
  connect
};