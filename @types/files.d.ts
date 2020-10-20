declare module '*.mdx' {
  let MDXComponent: (props?: { [key: string]: any }) => JSX.Element;
  export default MDXComponent;
}

declare module '*.svg' {
  import { SVGProps, ReactSVGElement } from 'react';

  const component: (props?: SVGProps<SVGElement>) => ReactSVGElement;

  export default component;
}
