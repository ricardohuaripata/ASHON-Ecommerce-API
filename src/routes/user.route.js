// Packages
import express from 'express';

// Middlewares
import protect from '../middlewares/protect';
import restrictedTo from '../middlewares/restrictedTo';
// Controllers
import {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  deleteUser,
  deleteMyAccount,
  getAuthUser
} from '../controllers/user.controller';

// Router Initialization
const router = express.Router();

// Get All Users Route
router.get('/', getUsers);

// Get User Route
router.get('/:id', getUser);

// Protect All Next Routes
router.use(protect);

router.get('/token/user', getAuthUser);

// Create New User (Multer Middleware) Route
router.post('/', restrictedTo('admin'), createUser);

// Update User Details Route
router.patch('/update-details', updateUserDetails);

// Delete LoggedIn User Account Route
router.delete('/me', deleteMyAccount);

// Delete User Route
router.delete('/:id', restrictedTo('admin'), deleteUser);

export default router;
