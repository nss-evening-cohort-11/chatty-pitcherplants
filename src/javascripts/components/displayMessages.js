import moment from 'moment';
import util from '../helpers/data/util';
import messageData from '../helpers/data/messageData';

const displayAllMessages = () => {
  const messages = messageData.getMessages();
  let domString = '';

  messages.forEach((userMessage) => {
    domString += '<div class="card my-3" style="width: 18rem;">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${userMessage.name}</h5>`;
    domString += `<p class="card-text">${userMessage.message}</p>`;
    domString += `<small class="card-text">${moment().subtract(1, 'days').calendar()}</small>`;
    domString += '</div>';
    domString += '</div>';
  });

  util.printToDom('incoming-message', domString);
};

const addMessage = () => {
  const message = document.getElementById('user-message').value;

  const messageObject = {
    date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'),
    name: $('input[name="userSelection"]:checked').val(),
    message,
    id: 'User id + index in message array',
  };

  messageData.messages.push(messageObject);
  displayAllMessages();
};

export default {
  addMessage,
  displayAllMessages,
};
