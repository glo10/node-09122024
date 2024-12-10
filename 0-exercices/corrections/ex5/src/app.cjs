const http = require('http')
const path = require('path')
const PORT = 5555
const fn = require('./functions/response.mjs')

http.createServer((req, res) => {
  let filename = path.resolve(__dirname, 'views', '404.html')
  const imgRgx = /.+\.(jpg|jpeg|png)$/
  const page404 = path.resolve(__dirname, 'views', '404.html')
  const { url } = req
  let type = {'Content-Type' : 'text/html'}
  if (url.endsWith('index.html') || url === '/') {
    filename = path.resolve(__dirname, 'views', 'index.html')
  }
  else if(url.endsWith('.css')) {
    filename = join(currentFileDir, 'views', url)
    type = {'Content-Type' : 'text/css'}
  }
  else if(imgRgx.test(url)) {
    const matches = url.match(imgRgx)
    const ext = matches[1]
    filename = path.join(__dirname, 'views', url)
    console.log('img', filename)
    type = {'Content-Type' : `image/${ext}`}
  }
  else if(/favicon\.ico/.test(url)) {
    return
  }
  fn.render(filename, page404, res, type)
}).listen(PORT, () => {
  console.info(`Running on http://localhost:${PORT}`)
})