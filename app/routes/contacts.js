import {Router} from 'express';
import { DisplayContactsAddPage, DisplayContactsEditPage, DisplayContactsList, ProcessContactsAddPage, ProcessContactsDelete, ProcessContactsEditPage } from '../controllers/contacts.js';
import { AuthGuard } from '../utils/index.js';
const router = Router();

// R ead
router.get('/contact-list', AuthGuard, DisplayContactsList);

// C reate
router.get('/contact-add', DisplayContactsAddPage);
router.post('/contact-add', AuthGuard, ProcessContactsAddPage);

// U pdate
router.get('/contact-edit/:id', AuthGuard, DisplayContactsEditPage);
router.post('/contact-edit/:id', AuthGuard, ProcessContactsEditPage);

// D elete
router.get('/contact-delete/:id', AuthGuard, ProcessContactsDelete);

export default router;