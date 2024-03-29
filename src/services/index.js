import {
  signin,
  signup,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
  changePassword,
  authToken,
  signInWithGoogle
} from './auth.service';

import {
  createReview,
  queryReviews,
  queryReviewById,
  updateReview,
  deleteReview,
  queryReviewsByUser
} from './review.service';

import {
  createUser,
  queryUsers,
  queryUser,
  updateUserDetails,
  deleteUser,
  deleteMyAccount,
} from './user.service';

import {
  createCategory,
  queryCategories,
  queryCategory,
  queryCategoryByName,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategoryById
} from './category.service';

import {
  queryProducts,
  queryProductById,
  createProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  getProductStats,
  queryProductsByIds,
  queryProductsBySearch
} from './product.service';

import {
  addProductToCart,
  reduceByOne,
  increaseByOne,
  queryCart,
  deleteCart,
  deleteItem
} from './cart.service';

import {
  createOrder,
  orderStatus,
  queryOrders,
  queryOrder,
  cancelOrder,
  queryAllHistoryOrders
} from './order.service';

import {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} from './discount.service';

import {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
} from './favorite.service';

const authService = {
  signin,
  signup,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
  changePassword,
  authToken,
  signInWithGoogle
};

const reviewService = {
  createReview,
  queryReviews,
  queryReviewById,
  updateReview,
  deleteReview,
  queryReviewsByUser
};

const userService = {
  createUser,
  queryUsers,
  queryUser,
  updateUserDetails,
  deleteUser,
  deleteMyAccount,
};

const categoryService = {
  createCategory,
  queryCategories,
  queryCategory,
  queryCategoryByName,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategoryById
};

const productService = {
  queryProducts,
  queryProductById,
  createProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  getProductStats,
  queryProductsByIds,
  queryProductsBySearch
};

const cartService = {
  addProductToCart,
  reduceByOne,
  increaseByOne,
  queryCart,
  deleteCart,
  deleteItem
};

const orderService = {
  createOrder,
  orderStatus,
  queryOrders,
  queryOrder,
  cancelOrder,
  queryAllHistoryOrders
};

const discountService = {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
};

const favoriteService = {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
};

export {
  authService,
  userService,
  categoryService,
  productService,
  reviewService,
  cartService,
  orderService,
  discountService,
  favoriteService
};
