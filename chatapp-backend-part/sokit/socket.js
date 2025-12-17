

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
const onlineUsers = new Map();

export const initSocket = (server) => {
  io = new Server(server, {
    cors: { origin: "http://localhost:3000", credentials: true }
  });

  io.on("connection", (socket) => {
    console.log("✅ Socket connected:", socket.id);

    // 🔹 user online
    socket.on("addUser", (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log("🟢 User added:", userId);
      console.log("💻 Online users:", Array.from(onlineUsers.keys()));
      io.emit("getOnlineUsers", Array.from(onlineUsers.keys()));
    });

    // 🔹 send message
    socket.on("sendMessage", (data) => {
      console.log("✉️ sendMessage event:", data);
      const receiverSocketId = onlineUsers.get(data.receiverId);
      if (receiverSocketId) {
        console.log("📨 Sending message to receiver:", data.receiverId);
        io.to(receiverSocketId).emit("getMessage", data);
        io.to(receiverSocketId).emit("getNotification", data);
      } else {
        console.log("⚠️ Receiver offline:", data.receiverId);
      }
    });

    // 🔹 share live location
    socket.on("shareLocation", (data) => {
      console.log("📍 shareLocation event:", data);
      const receiverSocketId = onlineUsers.get(data.receiverId);
      if (receiverSocketId) {
        console.log("🗺 Sending location to receiver:", data.receiverId);
        io.to(receiverSocketId).emit("getLocation", data);
      } else {
        console.log("⚠️ Receiver offline, location not sent:", data.receiverId);
      }
    });

    // 🔹 user disconnect
    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected:", socket.id);
      for (let [userId, socketId] of onlineUsers) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
          console.log("🔴 User removed:", userId);
          break;
        }
      }
      console.log("💻 Online users now:", Array.from(onlineUsers.keys()));
      io.emit("getOnlineUsers", Array.from(onlineUsers.keys()));
    });
  });
};

export const getIO = () => io;