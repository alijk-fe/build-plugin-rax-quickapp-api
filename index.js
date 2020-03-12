module.exports = (api, options) => {
  const { onGetWebpackConfig } = api;
  onGetWebpackConfig((config) => {
    config.externals([
      function(ctx, request, callback) {
        if (request.indexOf('@system') !== -1) {
          return callback(null, 'undefined');
        }
        callback();
      },
    ]);
  });
};
