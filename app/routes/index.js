import {Router } from 'express';
import {displayAboutPage, displayContact1Page , displayHomePage, displayProjectsPage, displayServicesPage} from '../controllers/index.js';

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/services', displayServicesPage);
router.get('/projects', displayProjectsPage);
router.get('/contact1', displayContact1Page);




export default router;