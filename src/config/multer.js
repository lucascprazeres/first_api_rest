import multer from 'multer';
import { extname, resolve } from 'path';

const getPin = (min, max) => {
  let pin = Math.random() * (max - min) + min;
  pin = Math.floor(pin);
  return pin;
};

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${getPin(1000, 9999)}${extname(file.originalname)}`);
    },
  }),
};
