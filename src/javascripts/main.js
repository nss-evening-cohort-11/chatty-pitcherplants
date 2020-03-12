import '../styles/main.scss';
import 'bootstrap';
import displayMessages from './components/displayMessages';


const buttonEvents = () => {
  $('#incoming-message').on('click', '#send-button', add-message);
  $('#incoming-message').on('change', '#iris', );

};

const init = () => {
  displayMessages.displayAllMessages();
  buttonEvents();
};

init();
