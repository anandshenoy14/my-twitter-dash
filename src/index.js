import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './apps/simple-react-app/App';
//import Game from './apps/tictactoe/Game'
import Cards from '../src/apps/twitter-card/Cards'
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faRetweet } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faChevronDown)
library.add(fab, faHeart)
library.add(fab, faReply)
library.add(fab, faRetweet)

//ReactDOM.render(<Card card={{}} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const initialData = window.initialData;
console.log('hydrating initial Data == > '+initialData)
ReactDOM.hydrate(<Cards cards={initialData}/>, document.getElementById('root'))
serviceWorker.unregister();