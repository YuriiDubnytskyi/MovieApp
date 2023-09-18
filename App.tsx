import { initSettingsI18n } from './src/helpers/localization/Localization';
import { InitNavigation } from './src/navigation/InitNavigation';

/**
 * Start application
 */
const Start = async (): Promise<void> => {
  await initSettingsI18n();
  await InitNavigation();
};
export default Start;
