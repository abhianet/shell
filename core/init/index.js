const ds = require('../store');

Promise
  .all([
    ds.putCube({
      id: 'todo-cube',
      name: 'Todo Cube',
      version: '1.0.0',
      description: 'Creates a simple TODO list.'
    }),
    ds.putCube({
      id: 'notes-cube',
      name: 'Notes Cube',
      version: '1.0.0',
      description: 'Creates a simple notes application.'
    }),
    ds.putCube({
      id: 'hw-cube',
      name: 'HW Cube',
      version: '1.0.0',
      description: 'Creates a simple Hello World application.'
    })
  ])
  .then(results => {
    console.log(results);

    return ds.listCubes();
  })
  .then(response => console.log(response))
  .catch(error => console.error(error))
