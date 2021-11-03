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

  conn.on('data', function(message){
    console.log(message);
  });

  process.stdin.on('data', function(){
    client.write("Name: sss");
  });

  conn.on('end', function(message){
    console.log(message);
  });
    
  return conn;
};

module.exports = {
  connect
}