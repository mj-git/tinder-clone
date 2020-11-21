import logo from './images/react-lego.jpeg';
import './styles/main.scss';

// Create a class property without a constructor
class Game {
    name = 'Violin Charades'
  }
  const myGame = new Game();

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)

app.style.background = 'yellow';