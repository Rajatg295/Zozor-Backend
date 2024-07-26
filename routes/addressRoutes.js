import { Router } from 'express';
import { createAddress, getAddresses, deleteAddress } from '../controllers/addressController.js';

const router = Router();

router.post('/', createAddress);
router.get('/', getAddresses);
router.delete('/:id', deleteAddress);

export default router;
