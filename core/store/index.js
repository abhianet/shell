const PouchDB = require('pouchdb');

const ds = new PouchDB('./storage');

module.exports = {
  putCube: cube => ds.put(Object.assign({
    _id: `cube_${cube.id}`
  }, cube)),
  getCube: id => ds.get(`cube_${id}`),

  listCubes: () => ds.allDocs({
    include_docs: true,
    attachments: true,
    startkey: 'cube_',
    endkey: 'cube_\uffff'
  })
};
