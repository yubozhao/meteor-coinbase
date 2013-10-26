Package.describe({
  summary:'Coinbase API integration'
});

Npm.depends({'coinbase':'1.3.0'});

Package.on_use(function (api) {
  api.add_files('coinbase.js', 'server');
  api.export('Coinbase', 'server');
});
