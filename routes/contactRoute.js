import  express from 'express';
import { sendMessage, getMessage, deleteMessage } from '../controllers/contactController.js';

const router = express.Router();

router.post('/send', sendMessage);
router.get('/get', getMessage);
router.delete('/delete/:id', deleteMessage);

export default router;  