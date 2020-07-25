declare module '*.mdx' {
  let MDXComponent: (props?: { [key: string]: any }) => JSX.Element;
  export default MDXComponent;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
