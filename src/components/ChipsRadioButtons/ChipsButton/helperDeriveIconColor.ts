import { ChipsVariant } from '../types';

export const deriveIconColor = (variant: ChipsVariant): string => {
  switch (variant) {
    case ChipsVariant.primary:
      return '#2771B3';
    case ChipsVariant.secondary:
      return '#63B5E5';
    case ChipsVariant.warning:
      return '#E68941';
    case ChipsVariant.danger:
      return '#D51F35';
    case ChipsVariant.green:
      return '#037B3E';
  }
};
