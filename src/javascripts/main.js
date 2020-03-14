import '../styles/main.scss';
import 'bootstrap';
import Darkmode from 'darkmode-js';
import displayMessage from './components/displayMessages';


new Darkmode().showWidget();


const buttonEvents = () => {
  const sendBtn = document.getElementById('send-button');
  const clearBtn = document.getElementById('clear-button');
  sendBtn.addEventListener('click', displayMessage.addMessage);
  clearBtn.addEventListener('click', displayMessage.clearMessages);
  $('#incoming-message').on('click', '#send-button', displayMessage.addMessage);
};

const init = () => {
  displayMessage.displayAllMessages();
  buttonEvents();
};

init();
