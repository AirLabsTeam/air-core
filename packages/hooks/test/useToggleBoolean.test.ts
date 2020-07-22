/* eslint-disable @typescript-eslint/naming-convention */
import { act, renderHook } from '@testing-library/react-hooks';
import { useToggleBoolean } from '../src/useToggleBoolean';

describe('useToggleBoolean', () => {
  describe(`current value`, () => {
    it(`returns the correct initial value on load`, () => {
      const initialValue = false;
      const { result } = renderHook(() => useToggleBoolean(initialValue));

      expect(result.current[0]).toBe(initialValue);
    });
  });

  describe(`value toggler`, () => {
    it(`toggles the current value`, () => {
      const initialValue = false;
      const { result } = renderHook(() => useToggleBoolean(initialValue));

      expect(result.current[0]).toBe(initialValue);

      act(() => {
        result.current[1]();
      });

      expect(result.current[0]).toBe(!initialValue);
    });
  });

  describe(`set true function`, () => {
    it(`sets the current value to true`, () => {
      const initialValue = false;
      const { result } = renderHook(() => useToggleBoolean(initialValue));

      expect(result.current[0]).toBe(initialValue);

      act(() => {
        result.current[2]();
      });

      expect(result.current[0]).toBe(true);
    });

    it(`sets the current value to true (even if the current value is true)`, () => {
      const initialValue = true;
      const { result } = renderHook(() => useToggleBoolean(initialValue));

      expect(result.current[0]).toBe(initialValue);

      act(() => {
        result.current[2]();
      });

      expect(result.current[0]).toBe(true);
    });
  });

  describe(`set false function`, () => {
    it(`sets the current value to false`, () => {
      const initialValue = true;
      const { result } = renderHook(() => useToggleBoolean(initialValue));

      expect(result.current[0]).toBe(initialValue);

      act(() => {
        result.current[3]();
      });

      expect(result.current[0]).toBe(false);
    });

    it(`sets the current value to false (even if the current value is false)`, () => {
      const initialValue = false;
      const { result } = renderHook(() => useToggleBoolean(initialValue));

      expect(result.current[0]).toBe(initialValue);

      act(() => {
        result.current[3]();
      });

      expect(result.current[0]).toBe(false);
    });
  });
});
