import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';






const storage = new GridFsStorage({
    url: `mongodb+srv://rkrafikridoy5887_db_user:vSg536JASaPao5W0@cluster0.esu8ngw.mongodb.net/chatapp-db?appName=Cluster0`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 