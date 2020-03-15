import moment from '../../../node_modules/moment';
import util from '../helpers/util';
import messageData from '../helpers/data/messageData';
import userData from '../helpers/data/userData';

const clearButtonDisabled = () => {
  $('#clear-button').prop('disabled', true);
};

const clearButtonActive = () => {
  $('#clear-button').prop('disabled', false);
};

const displayAllMessages = () => {
  const messages = messageData.getMessages();
  let domString = '';

  messages.forEach((userMessage) => {
    domString += `<div id="${userMessage.id}" class="card my-2" style="width: 18rem;">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${userMessage.name}</h5>`;
    domString += `<p class="card-text">${userMessage.message}</p>`;
    domString += '<div class ="text-left">';
    domString += `<small class="card-text">${userMessage.date}</small>`;
    domString += '</div>';
    domString += '<div class ="text-right">';
    domString += '<button class="delete btn btn-danger">Delete</button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('incoming-message', domString);
};

const deleteCard = (e) => {
  const messages = messageData.getMessages();
  const cardId = e.target.closest('.card').id;
  const messageIndex = messages.findIndex((x) => x.id === cardId);
  messages.splice(messageIndex, 1);
  displayAllMessages();
};

const addMessage = () => {
  const message = document.getElementById('user-message').value;
  const name = document.querySelector('input[name="userSelection"]:checked').value;
  const currentUser = userData.getUsers().find((x) => x.name === name);
  const messageCount = messageData.getMessages().filter((x) => currentUser.id === x.id).length + 1;
  if (!/^\s*$/.test(message)) {
    const messageObject = {
      date: moment().calendar(),
      name,
      message,
      id: `${currentUser.id}-message${messageCount}`,
    };
    messageData.setMessage(messageObject);
    clearButtonActive();
    displayAllMessages();
  }
  document.getElementById('input-form').reset();
};

const clearMessages = () => {
  if (messageData.messages.length > 0) {
    messageData.emptyMessages();
    clearButtonDisabled();
    displayAllMessages();
  }
};


export default {
  addMessage,
  displayAllMessages,
  deleteCard,
  clearMessages,
};
