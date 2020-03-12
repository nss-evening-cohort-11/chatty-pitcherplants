import '../styles/main.scss';
import 'bootstrap';
import displayMessages from './components/displayMessages';


const buttonEvents = () => {
  $('#incoming-message').on('click', '#send-button', add-message);
  $('#incoming-message').on('change', '#brandi',add-message);
  $('#incoming-message').on('change', '#logan',add-message);
  $('#incoming-message').on('change', '#iris',add-message);
  $('#incoming-message').on('change', '#becca',add-message);
  $('#incoming-message').on('change', '#helen',add-message);

};

const init = () => {
  displayMessages.displayAllMessages();
  buttonEvents();
};

init();
