const path = require("path");
const SRC_DIR = path.join(__dirname, "/team-5-pinterest-clone/client/src");
const DIST_DIR = path.join(__dirname, "/team-5-pinterest-clone/client/public");

module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      util: require.resolve("util"),
      assert: require.resolve("assert"),
    },
  },
  // Other webpack configuration options can go here
};
