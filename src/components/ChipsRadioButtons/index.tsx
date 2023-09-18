import React from 'react';
import ChipsButton from './ChipsButton';
import type { ChipsOption, ChipsValue } from './types';
import { ChipsVariant } from './types';

export type ChipsRadioButtonsProps = {
  options: ChipsOption[];
  value: ChipsValue;
  handleChange: (value: ChipsValue) => void;
  disabled?: boolean;
  direction?: 'row' | 'column';
};

const ChipsRadioButtons = ({
  options,
  value,
  handleChange,
  disabled = false,
  direction = 'row',
}: ChipsRadioButtonsProps): JSX.Element => {
  return (
    <>
      {options.map((option, index) => (
        <ChipsButton
          key={option?.value?.toString()}
          selected={option.value === value}
          value={option.value}
          label={option.label}
          onPress={handleChange}
          variant={option?.variant || ChipsVariant.primary}
          isLast={options.length - 1 !== index}
          disabled={disabled}
          direction={direction}
        />
      ))}
    </>
  );
};

export default ChipsRadioButtons;
