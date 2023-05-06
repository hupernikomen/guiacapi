import multer from 'multer';
import crypto from 'crypto'
import path from 'path';
import multerS3 from 'multer-s3'
import AWS from 'aws-sdk';
import { resolve } from 'path'


let s3  = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'us-east-1',
});

export default{
  upload(folder: string){
    return{
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`

          return callback(null, fileName);
        }
      })
    }
  }
}

// fazer um filtro de tipos antes de enviar:
export function fileFilter (req, file, callback) {
  let errorMessage = '';
  const ext = path.extname(file.originalname);

  console.log(ext,  'EXTENSAO ENVIADA');
  

  // if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
  //     return callback(new Error('Only images are allowed'))
  // }
  

  if(errorMessage) {
    console.log(errorMessage);
    return callback({errorMessage: errorMessage, code: 'LIMIT_FILE_TYPE'}, false);
  }
  
  callback(null, true);
}

export const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', '..', 'files', 'users'));
    },
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`
  
      return callback(null, fileName)
    },
  }),
  s3: multerS3({
    s3: s3,
    bucket: process.env.BUCKETEER_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const fileHash = crypto.randomBytes(16).toString("hex");   
        const fileName = `public/${fileHash}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
};
