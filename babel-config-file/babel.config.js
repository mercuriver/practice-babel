const presets = ['@babel/preset-react'];
const plugins = [
  [
    '@babel/plugin-transform-template-literals',
    {
      'loose': true,
    },
  ],
]

module.exports = { preserts, plugins };