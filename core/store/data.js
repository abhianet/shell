const PouchDB = require('pouchdb');

const ds = new PouchDB('./storage');

ds.info().then(info => console.log(info));
