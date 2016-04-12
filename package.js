Package.describe({
  name: 'hedaro:errors',
  version: '0.0.1',
  summary: 'A(n example) pattern to display application errors to the user',
  git: 'https://github.com/hedaro/Meteor-Errors',
  documentation: 'README.md'
});

Package.onUse(function(api, where) {
  api.versionsFrom('0.9.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if(api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('hedaro:errors', 'client');
  api.use(['tinytest', 'test-helpers','templating'], 'client');

  api.addFiles('errors_tests.js', 'client');
});