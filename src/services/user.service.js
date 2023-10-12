// Utils
import catchAsync from '../utils/catchAsync';
import APIFeatures from '../utils/apiFeatures';

// Models
import { User } from '../models/index';

/**
 * @docs    Create New User
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode|user> }
 */
export const createUser = catchAsync(async (body) => {

  const { name, username, email, password, passwordConfirmation, role } = body;
  let { companyName, address, phone } = body;

  if (!companyName) companyName = '';
  if (!address) address = '';
  if (!phone) phone = '';

  // 2) Check required fields
  if (
    !name ||
    !username ||
    !email ||
    !password ||
    !passwordConfirmation ||
    !role
  ) {
    return {
      type: 'Error',
      message: 'fieldsRequired',
      statusCode: 400
    };
  }

  const isEmailTaken = await User.isEmailTaken(email);

  // 3) Check if email already taken
  if (isEmailTaken) {
    return {
      type: 'Error',
      message: 'emailTaken',
      statusCode: 409
    };
  }

  // 6) Create new user
  const user = await User.create({
    name,
    username,
    email,
    password,
    passwordConfirmation,
    role,
    companyName,
    address,
    phone
  });

  // 7) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulSignUp',
    statusCode: 201,
    user
  };
});

/**
 * @desc    Query Users
 * @param   { Object } req - Request object
 * @returns { Object<type|message|statusCode|users> }
 */
export const queryUsers = catchAsync(async (req) => {
  const result = await APIFeatures(req, User);

  // 1) Check if users doesn't exist
  if (!result || !result.records.length) {
    return {
      type: 'Error',
      message: 'noUsersFound',
      statusCode: 404
    };
  }
  const { records, metadata } = result;

  // 2) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulUsersFound',
    statusCode: 200,
    users: records,
    metadata: metadata
  };
});

/**
 * @desc    Query User Using It's ID
 * @param   { Object } id - User ID
 * @return  { Object<type|message|statusCode|user> }
 */
export const queryUser = catchAsync(async (id) => {
  const user = await User.findById(id);

  // 1) Check if user doesn't exist
  if (!user) {
    return {
      type: 'Error',
      message: 'noUserFoundWithID',
      statusCode: 404
    };
  }

  // 2) If everything is OK, send data;
  return {
    type: 'Success',
    message: 'successfulUserFound',
    statusCode: 200,
    user
  };
});

/**
 * @desc    Update User Details Using It's ID
 * @param   { Object } user - An object contains logged in user data
 * @param   { Object } body - Body object data
 * @returns { Object<type|message|statusCode|user> }
 */
export const updateUserDetails = catchAsync(async (user, body) => {
  const { id, email: currentUserEmail, isEmailVerified } = user;
  const { password, passwordConfirmation, email } = body;

  // 1) Check if password and passwordConfirmation are provided
  if (password || passwordConfirmation) {
    return {
      type: 'Error',
      message: 'passwordUpdateRoute',
      statusCode: 400
    };
  }

  const isEmailTaken = await User.isEmailTaken(email, id);

  // 2) Check if email taken or not
  if (email && isEmailTaken) {
    return {
      type: 'Error',
      message: 'emailTaken',
      statusCode: 409
    };
  }

  // 3) Find user document and update it
  const updateFields = { ...body };

  // If email is being updated and it's different from the current email, set isEmailVerified to false
  if (email && email !== currentUserEmail && isEmailVerified) {
    updateFields.isEmailVerified = false;
  }

  user = await User.findByIdAndUpdate(id, updateFields, {
    new: true,
    runValidators: true
  });

  // 4) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulUserDetails',
    statusCode: 200,
    user
  };
});

/**
 * @desc    Delete User Using It's ID
 * @param   { String } id - User ID,
 * @returns { Object<type|message|statusCode> }
 */
export const deleteUser = catchAsync(async (id) => {
  const user = await User.findByIdAndDelete(id);

  // 1) Check if user doesn't exist
  if (!user) {
    return {
      type: 'Error',
      message: 'noUserFoundWithID',
      statusCode: 404
    };
  }

  // 2) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulUserDelete',
    statusCode: 200
  };
});

/**
 * @desc    Delete LoggedIn User Data Service
 * @param   { String } id - User ID,
 * @returns { Object<type|message|statusCode> }
 */
export const deleteMyAccount = catchAsync(async (user) => {
  const { id } = user;

  // 2) Delete user data
  await User.findByIdAndDelete(id);

  // 3) If everything is OK, send data
  return {
    type: 'Success',
    message: 'successfulDeleteYourAccount',
    statusCode: 200
  };
});