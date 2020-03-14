import '../styles/main.scss';
import 'bootstrap';
import Darkmode from 'darkmode-js';
import displayMessage from './components/displayMessages';
import userRadios from './components/userRadios';

new Darkmode().showWidget();


const buttonEvents = () => {
  const sendBtn = document.getElementById('send-button');
  sendBtn.addEventListener('click', displayMessage.addMessage);
  // $('#incoming-message').on('click', '#send-button', displayMessage.addMessage);
  $('body').on('click', '.delete', displayMessage.deleteCard);
};

const init = () => {
  displayMessage.displayAllMessages();
  userRadios.printRadioButtons();
  buttonEvents();
};

init();
