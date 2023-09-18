import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../helpers/responsive';
import { HP_ONE_DP, WP_ONE_DP } from '../../../constants/styles';

const colors = {
  primaryColor: '#2771B3',
  secondaryColor: '#63B5E5',
  warningColor: '#E68941',
  greenColor: '#037B3E',
  redColor: '#D51F35',
  selectedChipsPrimary: '#2771b31a',
  selectedChipsSecondary: '#63b5e51a',
  selectedChipsWarning: '#e689411a',
  selectedChipsDanger: '#d51f361a',
  selectedChipsSuccess: '#037B3E1a',
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  columnDirection: {
    marginBottom: hp(HP_ONE_DP * 8),
  },
  rowDirection: {
    marginRight: wp(WP_ONE_DP * 8),
  },
  iconContainer: {
    paddingRight: wp(WP_ONE_DP * 4),
  },
  chips: {
    borderRadius: 50,
    padding: wp(WP_ONE_DP * 10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 2,
  },
  selectedChips: {
    flexGrow: 2,
  },
  iconSize: {
    width: hp(HP_ONE_DP * 14),
  },
  disabledBackgroundChips: {
    opacity: 0.7,
  },
  primarySelectedChips: {
    borderColor: colors.primaryColor,
    backgroundColor: colors.selectedChipsPrimary,
  },
  secondarySelectedChips: {
    borderColor: colors.secondaryColor,
    backgroundColor: colors.selectedChipsSecondary,
  },
  warningSelectedChips: {
    borderColor: colors.warningColor,
    backgroundColor: colors.selectedChipsWarning,
  },
  dangerSelectedChips: {
    borderColor: colors.redColor,
    backgroundColor: colors.selectedChipsDanger,
  },
  greenSelectedChips: {
    borderColor: colors.greenColor,
    backgroundColor: colors.selectedChipsSuccess,
  },
  primaryChips: {
    borderColor: colors.primaryColor,
  },
  secondaryChips: {
    borderColor: colors.secondaryColor,
  },
  warningChips: {
    borderColor: colors.warningColor,
  },
  dangerChips: {
    borderColor: colors.redColor,
  },
  greenChips: {
    borderColor: colors.greenColor,
  },
  primaryChipsText: {
    color: colors.primaryColor,
  },
  secondaryChipsText: {
    color: colors.secondaryColor,
  },
  greenChipsText: {
    color: colors.greenColor,
  },
  warningChipsText: {
    color: colors.warningColor,
  },
  dangerChipsText: {
    color: colors.redColor,
  },
});

export { styles };
