exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../stories/todotrial.js'],
  capabilities: {
  'browserName': 'chrome'
}
}