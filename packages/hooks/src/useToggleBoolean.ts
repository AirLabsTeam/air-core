import { useCallback, useState } from 'react';

/**
 * @description This hook can be used to keep state of a boolean that changes values.
 * @param initialValue - The initial value
 * @returns The current value, a toggle function, a function to set it to true, and a function to set it to false
 */
export function useToggleBoolean(
  initialValue: boolean,
): [boolean, () => void, () => void, () => void] {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue(!value);
  }, [value]);

  const setTrue = useCallback(() => {
    !value && setValue(true);
  }, [value]);

  const setFalse = useCallback(() => {
    value && setValue(false);
  }, [value]);

  return [value, toggle, setTrue, setFalse];
}
