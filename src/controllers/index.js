import {
  signin,
  signup,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  sendVerificationEmail,
  changePassword,
  authTokens,
  signInWithGoogle
} from './auth.controller';

import {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats,
  getProductsByIds,
  getProductsBySearch
} from './product.controller';

import {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  deleteUser,
  deleteMyAccount,
  getAuthUser
} from './user.controller';

import {
  getAllCategories,
  getCategory,
  getCategoryByName,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
} from './category.controller';

import {
  getAllReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
  getAllReviewsByUser
} from './review.controller';

import {
  addItemToCart,
  reduceByOne,
  increaseByOne,
  getCart,
  deleteCart,
  deleteItem
} from './cart.controller';

import {
  createOrder,
  orderStatus,
  getAllOrders,
  getOrder,
  cancelOrder,
  getAllHistoryOrders
} from './order.controller';

import {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} from './discount.controller';

import {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
} from './favorite.controller';

const authController = {
  signin,
  signup,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  sendVerificationEmail,
  changePassword,
  authTokens,
  signInWithGoogle
};

const userController = {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  deleteUser,
  deleteMyAccount,
  getAuthUser
};

const categoryController = {
  getAllCategories,
  getCategory,
  getCategoryByName,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
};

const productController = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats,
  getProductsByIds,
  getProductsBySearch
};

const reviewController = {
  getAllReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
  getAllReviewsByUser
};

const cartController = {
  addItemToCart,
  reduceByOne,
  increaseByOne,
  getCart,
  deleteCart,
  deleteItem
};

const orderController = {
  createOrder,
  orderStatus,
  getAllOrders,
  getOrder,
  cancelOrder,
  getAllHistoryOrders
};

const discountController = {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
};

const favoriteController = {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
};

export {
  authController,
  userController,
  productController,
  categoryController,
  reviewController,
  cartController,
  orderController,
  discountController,
  favoriteController
};
