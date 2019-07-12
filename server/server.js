import path from 'path'
import fs from 'fs'
import request from 'request'

import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

import App from '../src/apps/simple-react-app/App'
import Card from '../src/apps/twitter-card/Card'
const PORT = 8080
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    request('http://localhost:3000/cards', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            let resp= JSON.parse(body);
            let newData = data.replace('<div id="root"></div>',`<div id="root"><script>window.initialData = ${body}</script>${ReactDOMServer.renderToString(<Card card={resp[0]}/>)}</div>`);
            return res.send(newData);
    });
    // return res.send(`<div id="root">${ReactDOMServer.renderToString(<Card />)}</div>`
    // //   data.replace(
    // //     '<div id="root"></div>',
    // //     `<div id="root">${ReactDOMServer.renderToString(<Card />)}</div>`
    // //   )
    // )
    
    //return res.send(data);
  })
}
router.use('^/$', serverRenderer)

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})