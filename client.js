const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect',function(){
    console.log('Successfully connected to game server');
  });
  
  conn.on('connect', () => {
    conn.write('Name: nek');
  });
  
  conn.on('data', function(message){
    console.log(message);
  });
  
  // conn.on('connect', () => {
  //   conn.write('Move: up')
  // })

  conn.on('end', function(){
    console.log("Disconnected from game server");
  });
    
  return conn;
};

module.exports = {
  connect
}