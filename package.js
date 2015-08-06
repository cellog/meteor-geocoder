Package.describe({
  name: "cellog:geocoder",
  summary: "Easy geocoding by way of the node-geocoder package",
  version: "0.3.7",
  git: "https://github.com/aldeed/meteor-geocoder.git"
});

Npm.depends({
  'node-geocoder': '2.22.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore');
  api.export('GeoCoder', 'server');
  api.addFiles('geocoder.js', 'server');
});
