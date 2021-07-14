import { useField } from 'formik';

import { Toggle, ToggleProps } from './Toggle';

export interface FormikToggleProps extends ToggleProps {
  name: string;
}

export const FormikToggle = ({ name, ...restOfProps }: FormikToggleProps) => {
  const [field] = useField({ name, type: 'checkbox' });

  return <Toggle inputProps={field} {...restOfProps} />;
};
