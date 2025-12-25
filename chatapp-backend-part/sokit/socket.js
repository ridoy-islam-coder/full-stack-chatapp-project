

// import { Server } from "socket.io";

// let io;
// const onlineUsers = new Map();

// export const initSocket = (server) => {
//   io = new Server(server, {
//     cors: { origin: "http://localhost:3000", credentials: true }
//   });

//   io.on("connection", (socket) => {
//     console.log("Socket connected:", socket.id);

//     socket.on("addUser", (userId) => {
//       onlineUsers.set(userId, socket.id);
//       io.emit("getOnlineUsers", Array.from(onlineUsers.keys()));
//     });

//     socket.on("sendMessage", (data) => {
//       const receiverSocketId = onlineUsers.get(data.receiverId);
//       if (receiverSocketId) {
//         io.to(receiverSocketId).emit("getMessage", data);
//         io.to(receiverSocketId).emit("getNotification", data);
//       }
//     });

//     socket.on("shareLocation", (data) => {
//       const receiverSocketId = onlineUsers.get(data.receiverId);
//       if (receiverSocketId) {
//         io.to(receiverSocketId).emit("getLocation", data);
//       }
//     });

//     socket.on("disconnect", () => {
//       for (let [userId, socketId] of onlineUsers) {
//         if (socketId === socket.id) {
//           onlineUsers.delete(userId);
//           break;
//         }
//       }
//       io.emit("getOnlineUsers", Array.from(onlineUsers.keys()));
//       console.log("Socket disconnected:", socket.id);
//     });
//   });
// };

// export const getIO = () => io;



import { Server } from "socket.io";

let io;
let users = [];   // ✅ only ONE source of truth

export const initSocket = (server) => {
  io = new Server(server, {
    cors: { origin: "http://localhost:3000", credentials: true },
  });

  const addUser = (userData, socketId) => {
    if (!userData || !userData._id) return;

    if (!users.some((u) => u.userId === userData._id)) {
      users.push({
        userId: userData._id,
        socketId,
        name: userData.name || "",
      });
    }
  };


  

  const removeUser = (socketId) => {
    users = users.filter((u) => u.socketId !== socketId);
  };

  const getUser = (userId) => {
    return users.find((u) => u.userId === userId);
  };

  io.on("connection", (socket) => {
    console.log("✅ Socket connected:", socket.id);

    // 🔹 add user
    socket.on("addUser", (userData) => {
      if (!userData || !userData._id) {
        console.log("⚠️ Invalid userData:", userData);
        return;
      }

      addUser(userData, socket.id);
      console.log("🟢 User added:", userData._id);
      console.log("💻 Online users:", users);

      io.emit("getOnlineUsers", users);
    });

    // 🔹 send message
    socket.on("sendMessage", (data) => {
      const receiver = getUser(data.receiverId);

      if (receiver) {
        io.to(receiver.socketId).emit("getMessage", data);
        io.to(receiver.socketId).emit("getNotification", data);
      }
    });

    // 🔹 share location
    socket.on("shareLocation", (data) => {
      const receiver = getUser(data.receiverId);

      if (receiver) {
        io.to(receiver.socketId).emit("getLocation", data);
      }
    });

    // 🔹 disconnect
    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected:", socket.id);

      removeUser(socket.id);
      console.log("💻 Online users now:", users);

      io.emit("getOnlineUsers", users);
    });
  });
};

export const getIO = () => io;