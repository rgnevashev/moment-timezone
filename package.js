
Package.describe({
  name: 'rgnevashev:moment-timezone',
  version: '0.5.0',
  summary: 'Parse and display moments in any timezone.',
  git: 'https://github.com/moment/moment-timezone.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  //api.versionsFrom('1.2.1');
  api.use('momentjs:moment@2.11.1');
  api.imply('momentjs:moment');
  api.addFiles([
    'require-shim.js',
    'builds/moment-timezone-with-data.js',
    'revert-require-shim.js'
  ], ['client', 'server']);
});
