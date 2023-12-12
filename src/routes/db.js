import express from 'express';
import dbController from '../controller/dbController';

const router = express.Router();

router.get('/ReadNameNode', dbController.handleReadDataNode);
router.get('/WriteNameNode', dbController.HandleWritedataNode);

router.post('/write', dbController.checkClient);


// router.get('/ReadUser', dbController.handleReadUser);
// router.get('/WriteUser', dbController.HandleWriteUser);

// router.post('/Work/users', dbController.checkClientsRequest);

module.exports = router;
