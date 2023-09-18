import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './../../assets/Translations.json';
import LanguageDetector from './LanguageDetector';
import { LanguageNames } from './LanguageNames';

/**
 * Init settings i18n
 */
export const initSettingsI18n = async (): Promise<void> => {
  await i18n.use(initReactI18next).init({
    load: 'currentOnly',
    resources,
    fallbackLng: LanguageNames.En,
    supportedLngs: [LanguageNames.En],
    lng: LanguageDetector.getCurrentLocale(),
    keySeparator: false,
    defaultNS: 'common',
  });
};

/**
 * Set default app language
 */
export const setDefaultLanguage = async (): Promise<void> => {
  const language = LanguageDetector.getCurrentLocale();
  if (language || language !== LanguageNames.En) {
    await i18n.changeLanguage(language);
  }
};

export default i18n;
