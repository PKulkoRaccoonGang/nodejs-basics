const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request.url)

  response.write('<h1>Hello from Node JS</h1>')
  response.write('<h2>Hello from Node JS</h2>')
  response.write('<h3>Hello from Node JS</h3>')

  response.end(`
    <div style="background: red">
      <h1>Test 1</h1>
    </div>
  `)
})

server.listen(3000, () => {
  console.log('Server is running...')
})
