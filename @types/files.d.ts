declare module '*.mdx' {
  let MDXComponent: (props?: { [key: string]: any }) => JSX.Element;
  export default MDXComponent;
}
