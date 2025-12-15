import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
import {DATABASE} from '../config/config.js'


const storage = new GridFsStorage({
  url: DATABASE,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  file: (req, file) => {
  const match= ["image/png","imge/jpg", "image/jpeg"]

  if(match.indexOf(file.mimeType) === -1) {

    return `${Date.now()}-file-${file.originalname}`;
  }


    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({storage})
