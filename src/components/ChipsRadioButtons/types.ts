export enum ChipsVariant {
  primary = 'primary',
  secondary = 'secondary',
  warning = 'warning',
  danger = 'danger',
  green = 'green',
}

export type ChipsValue = string | boolean | null;

export type ChipsOption = {
  label: string;
  value: ChipsValue;
  variant?: ChipsVariant;
};
