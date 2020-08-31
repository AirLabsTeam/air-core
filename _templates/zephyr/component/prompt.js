module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the component name? (e.g. ComponentName)',
  },
  {
    type: 'input',
    name: 'asProp',
    message:
      'What is the component HTML tag that would get applied to the component? This value is passed to the `as` polymorphic prop that switches out what is rendered. (Optional)',
  },
];
