// Utils
import catchAsync from '../utils/catchAsync';
import APIFeatures from '../utils/apiFeatures';

// Models
import { Review, Product, Order, User } from '../models/index';

/**
 * @desc    Create New Review
 * @param   { Object } body - Body object data
 * @param   { String } product - Product ID
 * @param   { Object } user - An object contains logged in user data
 * @returns { Object<type|message|statusCode|review> }
 */
export const createReview = catchAsync(async (product, user, body) => {
  const { review, rating } = body;

  // 1) Check if user entered all fields
  if (!review || !rating) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  if (rating < 1) {
    return {
      type: 'Error',
      message: 'ratingLessThanOne',
      statusCode: 400
    };
  }

  // 2) Check if the user has ever ordered the product
  const userOrders = await Order.find({ user });
  const orderedProduct = userOrders.some(order => {
    return order.products.some(orderProduct => orderProduct.product.equals(product));
  });

  if (!orderedProduct) {
    return {
      type: 'Error',
      message: 'noOrderForProduct',
      statusCode: 400
    };
  }

  const checkUser = await Review.find({ user, product });

  // 3) Check if the user make a review before on that product
  if (checkUser.length !== 0) {
    return {
      type: 'Error',
      message: 'onlyOneReview',
      statusCode: 400
    };
  }

  // 4) Create review
  const newReview = await Review.create({
    product,
    user,
    review,
    rating
  });

  // 5) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulReviewCreate',
    statusCode: 201,
    newReview
  };
});

/**
 * @desc    Query All Reviews
 * @param   { Object } req - Request object
 * @returns { Object<type|message|statusCode|reviews> }
 */
export const queryReviewsByUser = catchAsync(async (req) => {
  const user = await User.findById(req.params.userId);

  // 1) Check if user doesn't exist
  if (!user) {
    return {
      type: 'Error',
      message: 'noUserFound',
      statusCode: 404
    };
  }

  const result = await APIFeatures(req, Review);

  // 2) Check if reviews doesn't exist
  if (!result || !result.records.length) {
    return {
      type: 'Error',
      message: 'noReviewsFound',
      statusCode: 404
    };
  }
  let { records } = result;

  // 3) Filter review to select only reviews of the user only
  records = records.filter(
    (review) => review.user.toString() === req.params.userId.toString()
  );

  // 4) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulReviewsFound',
    statusCode: 200,
    reviews: records
  };
});

/**
 * @desc    Query All Reviews
 * @param   { Object } req - Request object
 * @returns { Object<type|message|statusCode|reviews> }
 */
export const queryReviews = catchAsync(async (req) => {
  const product = await Product.findById(req.params.productId);

  // 1) Check if product doesn't exist
  if (!product) {
    return {
      type: 'Error',
      message: 'noProductFound',
      statusCode: 404
    };
  }

  const result = await APIFeatures(req, Review);

  // 2) Check if reviews doesn't exist
  if (!result || !result.records.length) {
    return {
      type: 'Error',
      message: 'noReviewsFound',
      statusCode: 404
    };
  }

  let { records } = result;

  // 3) Filter review to select only reviews of the product only
  records = records.filter(
    (review) => review.product.toString() === req.params.productId.toString()
  );

  // 4) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulReviewsFound',
    statusCode: 200,
    reviews: records
  };
});

/**
 * @desc    Query Review Using It's ID
 * @param   { String } prodcutId - Product ID
 * @param   { String } reviewId - Review ID
 * @returns { Object<type|message|statusCode|review> }
 */
export const queryReviewById = catchAsync(async (productId, reviewId) => {
  const product = await Product.findById(productId);

  // 1) Check if product doesn't exist'
  if (!product) {
    return {
      type: 'Error',
      message: 'noProductFound',
      statusCode: 404
    };
  }

  const review = await Review.findById(reviewId);

  // 2) Check if review doesn't exist
  if (!review) {
    return {
      type: 'Error',
      message: 'noReviewFound',
      statusCode: 404
    };
  }

  // 3) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulReviewFound',
    statusCode: 200,
    review
  };
});

/**
 * @desc    Update Review Using It's ID
 * @param   { String } userId - userId
 * @param   { String } prodcutId - Product ID
 * @param   { String } reviewId - Review ID
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode|review> }
 */
export const updateReview = catchAsync(
  async (userId, productId, reviewId, body) => {
    const product = await Product.findById(productId);

    // 1) Check if product doesn't exist
    if (!product) {
      return {
        type: 'Error',
        message: 'noProductFound',
        statusCode: 404
      };
    }

    const review = await Review.findById(reviewId);

    // 2) Check if review doesn't exist
    if (!review) {
      return {
        type: 'Error',
        message: 'noReviewFound',
        statusCode: 404
      };
    }

    // 3) Check if the one who want to update review is the review creator
    if (userId.toString() !== review.user.toString()) {
      return {
        type: 'Error',
        statusCode: 400,
        message: 'notReviewCreator'
      };
    }

    // 3) Check if review rating less than 1
    if (body.rating < 1) {
      return {
        type: 'Error',
        statusCode: 400,
        message: 'ratingLessThanOne'
      };
    }

    // 4) Update review
    const result = await Review.findByIdAndUpdate(reviewId, body, {
      new: true,
      runValidators: true
    });

    // 5) If everything is OK, send data
    return {
      type: 'Success',
      message: 'successfulReviewUpdate',
      statusCode: 200,
      result
    };
  }
);

/**
 * @desc    Delete Review Using It's ID
 * @param   { String } productId - Product ID
 * @param   { String } reviewId - Review ID
 * @param   { String } userId - User ID
 * @returns { Object<type|message|statusCode> }
 */
export const deleteReview = catchAsync(async (productId, reviewId, userId) => {
  const product = await Product.findById(productId);

  // 1) Check if product doesn't exist
  if (!product) {
    return {
      type: 'Error',
      message: 'noProductFound',
      statusCode: 404
    };
  }

  const review = await Review.findById(reviewId);

  // 2) Check if review doesn't exist
  if (!review) {
    return {
      type: 'Error',
      message: 'noReviewFound',
      statusCode: 404
    };
  }

  // 3) Check if the user is the creator of the review to delete it
  if (userId.toString() !== review.user.toString()) {
    return {
      type: 'Error',
      statusCode: 400,
      message: 'notReviewCreator'
    };
  }

  // 4) Delete review
  await Review.findByIdAndDelete(reviewId);

  // 5) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulReviewDelete',
    statusCode: 200
  };
});
