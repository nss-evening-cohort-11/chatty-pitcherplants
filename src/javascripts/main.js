import '../styles/main.scss';
import 'bootstrap';
import Darkmode from 'darkmode-js';
import displayMessage from './components/displayMessages';


new Darkmode().showWidget();


const buttonEvents = () => {
  const sendBtn = document.getElementById('send-button');
  sendBtn.addEventListener('click', displayMessage.addMessage);
  $('#incoming-message').on('click', '#send-button', displayMessage.addMessage);
};

const init = () => {
  displayMessage.displayAllMessages();
  buttonEvents();
};

init();
