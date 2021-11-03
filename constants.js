const IP = '165.227.47.243';
const PORT = '50541';
const inputCommands = {
  w: (conn) => {
    conn.write("Move: up");
  },
  a: (conn) => {
    conn.write("Move: left");
  },
  s: (conn) => {
    conn.write("Move: down");
  },
  d: (conn) => {
    conn.write("Move: right");
  },
  "1": (conn) => {
    conn.write("Say: Well Met!");
  },
  "2": (conn) => {
    conn.write("Say: I need healing!");
  },
  "3": (conn) => {
    conn.write("Say: xD");
  },
  "4": (conn) => {
    conn.write("Say: PKPKPKPK");
  },
  "5": (conn) => {
    conn.write("Say: 1v1 me bro");
  },
  "6": (conn) => {
    conn.write("Say: i am the fast");
  },
  i: (conn) => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        conn.write("Move: up");
      }, 50 * i);
    }
  },
  j: (conn) => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        conn.write("Move: left");
      }, 50 * i);
    }
  },
  k: (conn) => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        conn.write("Move: down");
      }, 50 * i);
    }
  },
  l: (conn) => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        conn.write("Move: right");
      }, 50 * i);
    }
  },
};


module.exports = {
  IP,
  PORT,
  inputCommands
};