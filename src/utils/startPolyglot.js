import Polyglot from 'node-polyglot';
import { messages } from '../config/i18n';

const startPolyglot = (req, res, next) => {
  // Get the locale from express-locale
  const locale = req.locale.language;
  const acceptLanguage = req.headers['accept-language'];

  // Start Polyglot and add it to the req
  req.polyglot = new Polyglot();

  // Decide which phrases for polyglot will be used
  if (locale === 'es' || acceptLanguage === 'es') {
    req.polyglot.extend(messages.es);
  } else {
    req.polyglot.extend(messages.en);
  }

  next();
};

export default startPolyglot;
