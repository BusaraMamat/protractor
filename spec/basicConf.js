var env = require('./environment.js');

// The main suite of Protractor tests.
exports.config = {
  seleniumAddress: 'http://localhost:8111',

  framework: 'jasmine2',

  // Spec patterns are relative to this directory.
  specs: [
    'basic/*_spec.js'
  ],

  // Exclude patterns are relative to this directory.
  exclude: [
    'basic/exclude*.js'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

  jasmineNodeOpts: {
    isVerbose: true,
    realtimeFailure: true
  },

  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  }
};
