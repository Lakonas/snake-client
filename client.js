const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', (data) => {
    console.log('Connected to server');

    conn.write("Name: PDR"); //syntax send data from client to server
    //conn.write("Move up");
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};
module.exports = connect;