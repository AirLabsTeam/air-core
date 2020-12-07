import * as React from 'react';
import { As } from '@reach/utils';

export type PropsWithAs<TElement extends As = As, TProps = {}> = TProps &
  Omit<React.ComponentProps<TElement>, 'as' | keyof TProps> & {
    as?: TElement;
  };

export type ComponentWithAs<TDefaultElement extends As, TProps, TOmittedProps extends keyof any> = {
  <TElement extends As>(
    props: Omit<PropsWithAs<TElement, TProps>, TOmittedProps> & { as: TElement },
  ): JSX.Element;
  (props: Omit<PropsWithAs<TDefaultElement, TProps>, TOmittedProps>): JSX.Element;
};

export function forwardRefWithAs<
  TDefaultElement extends As,
  TProps,
  TOmittedProps extends keyof any = never
>(component: React.ForwardRefRenderFunction<any, any>) {
  return (React.forwardRef(component) as unknown) as ComponentWithAs<
    TDefaultElement,
    TProps,
    TOmittedProps
  > & { displayName?: string };
}
