const express = require("express");
const server = express();
var history = require("connect-history-api-fallback");

const isProd = process.env.NODE_ENV === "production";
server.use(history());

if (!isProd) {
  const webpack = require("webpack");
  const config = require("../../config/webpack.dev.js");
  const compiler = webpack(config);

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  );

  const webpackHotMiddlware = require("webpack-hot-middleware")(
    compiler,
    config.devServer
  );

  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddlware);
}

// const staticMiddleware = express.static("dist")
const expressStaticGzip = require("express-static-gzip");
// server.use(staticMiddleware)
server.use(
  "/",
  expressStaticGzip("dist", {
    etag: true, // Just being explicit about the default.
    lastModified: true,  // Just being explicit about the default.
    setHeaders: (res, path) => {
      if (path.endsWith('.html')) {
        // All of the project's HTML files end in .html
        res.setHeader('Cache-Control', 'no-cache');
      } else {
        res.setHeader('Cache-Control', 'max-age=31536000');
      }
    },
  })
);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
