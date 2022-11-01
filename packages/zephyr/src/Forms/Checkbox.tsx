import { Check } from '@air/icons';
import { useId } from '@reach/auto-id';

import { SVGComponent } from '../shared';
import { Box, BoxProps } from '../Box';
import { Label } from './Label';
import { VisuallyHidden } from '../VisuallyHidden';

export interface CheckboxProps
  extends Pick<BoxProps<'input'>, 'checked' | 'id' | 'name' | 'onChange' | 'tx' | 'value'> {
  activeIcon?: SVGComponent;
  isLabelHidden?: boolean;
  label: string;
}

export const Checkbox = ({
  activeIcon = Check,
  checked,
  id,
  isLabelHidden,
  label,
  name,
  onChange,
  value,
  tx,
}: CheckboxProps) => {
  const autoId = useId(id)!;

  return (
    <Label for={autoId} tx={{ display: 'flex', alignItems: 'center', color: 'pigeon500', ...tx }}>
      <Box
        as="input"
        checked={checked}
        id={autoId}
        onChange={onChange}
        name={name}
        tx={{
          display: 'none',

          [`&:checked + ${Box}`]: {
            backgroundColor: 'jay500',
            borderColor: 'jay500',

            [`> ${Box}`]: {
              transform: 'scale(1)',
              opacity: 1,
            },
          },
        }}
        type="checkbox"
        value={value}
      />
      <Box
        tx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          width: 16,
          height: 16,
          border: '1px solid',
          borderRadius: 2,
        }}
      >
        <Box
          as={activeIcon}
          tx={{
            width: 12,
            color: 'white',
            strokeWidth: 1,
            stroke: 'white',
            opacity: 0,
            transform: 'scale(0.6)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        />
      </Box>
      {isLabelHidden ? (
        <VisuallyHiddenn>{label}</VisuallyHidden>
      ) : (
        <Box as="span" tx={{ my: -1, ml: 8 }}>
          {label}
        </Box>
      )}
    </Label>
  );
};
