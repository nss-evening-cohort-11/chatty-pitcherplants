import '../styles/main.scss';
import 'bootstrap';
import Darkmode from 'darkmode-js';
import displayMessage from './components/displayMessages';


new Darkmode().showWidget();


const buttonEvents = () => {
  const sendBtn = document.getElementById('send-button');
  sendBtn.addEventListener('click', displayMessage.addMessage);
  $('#incoming-message').on('click', '#send-button', displayMessage.addMessage);
  $('#incoming-message').on('change', '#brandy', displayMessage.addMessage);
  $('#incoming-message').on('change', '#logan', displayMessage.addMessage);
  $('#incoming-message').on('change', '#iris', displayMessage.addMessage);
  $('#incoming-message').on('change', '#becca', displayMessage.addMessage);
  $('#incoming-message').on('change', '#helen', displayMessage.addMessage);
};

const init = () => {
  displayMessage.displayAllMessages();
  buttonEvents();
};

init();
