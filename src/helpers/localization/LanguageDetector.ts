import * as RNLocalize from 'react-native-localize';
import { LanguageNames } from './LanguageNames';

// Detects what language is installed as default on the device
export default {
  getCurrentLocale: (): string | undefined => {
    const localeArray = RNLocalize.getLocales().map(item => item.languageTag);
    const language = RNLocalize.findBestLanguageTag(localeArray);

    return language?.languageTag === LanguageNames.En
      ? language.languageTag
      : LanguageNames.En;
  },
};
