// Packages
import express from 'express';

// Middlewares
import protect from '../middlewares/protect';

// Controllers
import { categoryController } from '../controllers/index';

// Utils
import { singleFile } from '../utils/multer';

import restrictedTo from '../middlewares/restrictedTo';

const {
  getAllCategories,
  getCategory,
  getCategoryByName,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
} = categoryController;

// Router Initialization
const router = express.Router();

// Get All Categories Route
router.get('/', getAllCategories);

// Get Category By Id Route
router.get('/:id', getCategory);

// Get Category By Name Route
router.get('/name/:name', getCategoryByName);

// Protect All Next Routes
router.use(protect);

router.use(restrictedTo('admin'));

// Add Category (Multer Middleware) Route
router.post('/', singleFile('image'), addCategory);

// Update Category details Route
// Delete Category Route
router.route('/:id').patch(updateCategoryDetails).delete(deleteCategory);

// Update Category Image (Multer Middleware) Route
router.patch('/:id/image', singleFile('image'), updateCategoryImage);

export default router;
