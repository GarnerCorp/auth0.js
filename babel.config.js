const config = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'targets': {
          "browsers": ["last 2 versions", "ie >= 11"]
        },
      },
    ],
  ],

  include: [/src/, /node_modules/],
  exclude: [],
}

module.exports = config

