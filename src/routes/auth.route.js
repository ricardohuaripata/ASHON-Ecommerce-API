// Packages
import express from 'express';

// Controllers
import { authController } from '../controllers/index';

// Middlewares
import protect from '../middlewares/protect';

const {
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
} = authController;

const router = express.Router();

router.post('/login', signin);

router.post('/register', signup);

router.post('/logout', logout);

router.post('/google-login', signInWithGoogle);

router.post('/tokens', refreshTokens);

router.post('/auth-token', authTokens);

router.post('/forgot-password', forgotPassword);

router.post('/reset-password', resetPassword);

router.post('/verify-email', verifyEmail);

router.use(protect);

router.post('/send-verification-email', sendVerificationEmail);

router.patch('/change-password', changePassword);

export default router;
