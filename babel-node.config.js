export const presets = [
  '@babel/react',
  [
    '@babel/env',
    {
      targets: {
        node: 'current',
      },
    },
  ],
];
export const plugins = [
  ['@babel/plugin-proposal-class-properties', { loose: true }],
];
