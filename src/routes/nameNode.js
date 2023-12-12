import express from 'express';
import nameNodeController from '../controller/nameNodeController';

const router = express.Router();

router.get('/send', nameNodeController.heartbeat);
router.post('/hearbeat', nameNodeController.senHeartbeat);

module.exports = router;
