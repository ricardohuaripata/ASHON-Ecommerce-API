// Packages
import express from "express";

// Controllers
import { productController } from "../controllers/index";

// Middlewares
import protect from "../middlewares/protect";

// Utils
import { anyMulter } from "../utils/multer";

// Routes
import reviewRoute from "./review.route";

import restrictedTo from "../middlewares/restrictedTo";

const {
  getAllProducts,
  getProduct,
  addProduct,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductDetails,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats,
  getProductsByGenre,
  getProductsByGenreAndCategory,
  getProductsByIds,
  getProductsBySearch,
} = productController;

const router = express.Router();

router.use("/:productId/reviews", reviewRoute);

router.get("/top-5-cheap", getAllProducts, top5Cheap);

router.get("/product-stats", productStats);

router.get("/", getAllProducts);

router.get("/:productId", getProduct);

router.get("/genre/:genre", getProductsByGenre);

router.get("/genre/:genre/:categoryName", getProductsByGenreAndCategory);

router.post("/ids", getProductsByIds);

router.post("/search", getProductsBySearch);

router.use(protect);

router
  .route("/color/:productId")
  .all(protect, restrictedTo("admin", "seller"))
  .post(addProductColor)
  .delete(deleteProductColor);

router
  .route("/size/:productId")
  .all(protect, restrictedTo("admin", "seller"))
  .post(addProductSize)
  .delete(deleteProductSize);

router.post("/", restrictedTo("admin", "seller"), anyMulter(), addProduct);

router.patch(
  "/:productId/details",
  restrictedTo("admin", "seller"),
  updateProductDetails
);

router.patch(
  "/:productId/main-image",
  restrictedTo("admin", "seller"),
  anyMulter(),
  updateProductMainImage
);

router.patch(
  "/:productId/images",
  restrictedTo("admin", "seller"),
  anyMulter(),
  updateProductImages
);

router.delete("/:productId", restrictedTo("admin", "seller"), deleteProduct);

export default router;
