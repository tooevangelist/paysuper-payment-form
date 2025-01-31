const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  css: {
    modules: true,
    extract: false,
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/gui.scss";
          @import "@/assets/styles/mixins.scss";
          @import "@/assets/styles/directional.scss";
        `,
      },
    },
  },

  filenameHashing: false,

  chainWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // По умолчанию ассеты размером больше, чем 4кб не инлайнятся, а выносятся отдельными файлами.
    // Отменаем это правило
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }));

    // По-умолчанию Vue CLI создаёт 2 отдельных чанка:
    // 1. app.js
    // 2. chunk-vendors.js
    // Отменяем это разделение, т.к. нам нужен единый файл
    config.optimization.delete('splitChunks');
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },

  configureWebpack: {
    entry: [
      'core-js/modules/es.promise',
      'core-js/modules/es.string.includes',
      'core-js/modules/es.array.iterator',
      'core-js/modules/es.object.assign.js',
      path.resolve(__dirname, 'src/main.js'),
    ],
    output: {
      filename: 'paysuper-form.js',
      chunkFilename: '[name].js',
    },
    plugins:
      process.env.CHECK_SIZE === 'true'
        ? [new BundleAnalyzerPlugin()]
        : [],
  },

  transpileDependencies: ['vue-sticky-directive'],

  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {},
    i18n: {
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },

  devServer: {
    port: 4040,
    disableHostCheck: true,
  },
};
