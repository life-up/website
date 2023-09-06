import { resolve } from 'path';

module.exports = {
  entry: {
    main: resolve('src/index.tsx')
  },
  output: {
    path: resolve(process.cwd(), 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'swc-loader'
        }
      }
    ]
  }
}