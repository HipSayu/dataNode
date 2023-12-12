import express from 'express';
import homeController from '../controller/homeController';

const router = express.Router();

router.get('/', homeController.handleHelloWord);

module.exports = router;
