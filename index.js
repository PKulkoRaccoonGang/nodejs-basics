const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    response.writeHead(200, {
      'Content-Type': 'text/html; charset: utf-8'
    })

    switch (request.url) {
      case '/':
        fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf-8', (error, content) => {
          if (error) throw error

          response.end(content)
        })
        break;
      case '/about':
        fs.readFile(path.join(__dirname, 'views', 'about.html'), 'utf-8', (error, content) => {
          if (error) throw error

          response.end(content)
        })
        break;
      case '/api/users':
        response.writeHead(200, {
          'Content-Type': 'text/json'
        })
        const users = [
          { name: 'Peter', age: 27 },
          { name: 'Olena', age: 23 }
        ]
        response.end(JSON.stringify(users))
        break;
    }
  } else if (request.method === 'POST') {
    const body = []

    response.writeHead(200, {
      'Content-Type': 'text/html; charset: utf-8'
    })

    request.on('data', data => {
      body.push(data)
    })

    request.on('end', () => {
      const message = body.toString().split('=')[1]

      response.end(`
        <h1>Your message: ${message}</h1>
      `)
    })
  }
})

server.listen(3000, () => {
  console.log('Server is running...')
})
