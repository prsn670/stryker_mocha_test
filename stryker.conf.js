module.exports = function(config) {
  config.set({
    testRunner: "mocha",
    mutator: "javascript",
    transpilers: [],
    reporter: ["clear-text", "progress"],
    packageManager: "npm",
    coverageAnalysis: "off",
    mutate: ["src/App.js"],
    /*mochaOptions: {
        files: ['./test/unit/!*.js'],
        opts: './test/mocha.opts',
        require: [require.resolve('./test/test-utils/mocha-hook.js')]
    }*/
  });
};
