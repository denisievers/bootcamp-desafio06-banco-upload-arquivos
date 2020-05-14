import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
    // dirname pega o direito ate a pasta atual, depois volta com os (..) até a tmp
    destination: path.resolve(__dirname, '..', '..', 'tmp'),
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
