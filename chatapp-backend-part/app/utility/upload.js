// import multer from 'multer'
// import {GridFsStorage} from 'multer-gridfs-storage'
// import {DATABASE} from '../config/config.js'


// const storage = new GridFsStorage({
//   url: DATABASE,
//   options: {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   file: (req, file) => {
//   const match= ["image/png","imge/jpg", "image/jpeg"]

//   if(match.indexOf(file.mimeType) === -1) {

//     return `${Date.now()}-file-${file.originalname}`;
//   }


//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-file-${file.originalname}`,
//     };
//   },
// });

// export default multer({storage})

import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import { DATABASE } from "../config/config.js";

const storage = new GridFsStorage({
  url:'mongodb+srv://rkrafikridoy5887_db_user:vSg536JASaPao5W0@cluster0.esu8ngw.mongodb.net/chatapp-db?appName=Cluster0',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

  file: (req, file) => {
    const match = ["image/png", "image/jpeg", "image/jpg"];

    // ❌ invalid file → reject
    if (!match.includes(file.mimetype)) {
      return null;
    }

    // ✅ valid file
    return {
      bucketName: "photos",
      filename: `${Date.now()}-${file.originalname}`,
    };
  },
});

export default multer({ storage });