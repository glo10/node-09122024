const { request } = require('https')

function getAll(req, res) {
  render(res)
}

function getOne(req, res) {
  const url = `/users/${req.params.id}`
  render(res, 'users/details', url)
}

function render(res, view = 'users/home', url = '/users') {
  fetchUsers(url)
    .then((data) => {
      res.render(view, { data })
  })
  .catch(() => {  res.status(404) })
}

function fetchUsers(path, method='GET', hostname = 'jsonplaceholder.typicode.com' ) {
  return new Promise((resolve, reject) => {
    const myHeaders =  { hostname, path, method }
    request(myHeaders, (rs) => {
      let data = ''
      rs.on('data', (chunk) => {
        data += chunk
      })
      
      rs.on('end', () => {
        try {
          const result = JSON.parse(data)
          resolve(result)
        } catch{
          reject('JSON parse error')
        }
      })
    })
    .on('error', (error) => {
      reject(`error from https client : ${error.message}`)
    })
    .end()
  })

}

module.exports = {
  getAll,
  getOne
}