import moment from 'moment';
import util from '../../helpers/util';
import messageData from '../../helpers/data/messageData';
import userData from '../../helpers/data/userData';
import './displayMessages.scss';

const clearButtonDisabled = () => {
  $('#clear-button').prop('disabled', true);
};

const clearButtonActive = () => {
  $('#clear-button').prop('disabled', false);
};

const displayAllMessages = () => {
  const selectedName = document.querySelector('input[name="userSelection"]:checked').value;
  // const messages = messageData.getMessages();
  const messages = messageData.lastTwentyMessages();
  // const messages = messageData.lastTwentyMessages(); // added

  let domString = '';

  messages.forEach((userMessage) => {
    const isCurrentUser = userMessage.name === selectedName;
    domString += `<div class="outside ${isCurrentUser === true ? 'align-self-end' : 'align-self-start'}">`;
    domString += `<div id="${userMessage.id}" class="card-divider card my-2">`;
    domString += '<div class="user-card card-body">';
    domString += `<h5 class="card-title">${userMessage.name}</h5>`;
    domString += `<p class="card-text">${userMessage.message}</p>`;
    domString += '<div class ="text-left">';
    domString += `<small class="card-text">${userMessage.date}</small>`;
    domString += '</div>';
    domString += '<div class ="text-right">';
    domString += `${isCurrentUser === true ? '<button class="delete btn btn-danger">Delete</button>' : ''}`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });

  util.printToDom('incoming-message', domString);
  console.error(messageData.lastTwentyMessages());
  return messageData.lastTwentyMessages();
};


const deleteCard = (e) => {
  const messages = messageData.getMessages(); // added
  // const messages = messageData.lastTwentyMessages();
  const cardId = e.target.closest('.card').id;
  const messageIndex = messages.findIndex((x) => x.id === cardId);
  messages.splice(messageIndex, 1);
  displayAllMessages();
};


const addMessage = () => {
  const message = document.getElementById('user-message').value;

  const name = document.querySelector('input[name="userSelection"]:checked').value;
  const currentUser = userData.getUsers().find((x) => x.name === name);
  // console.error(currentUser.id);
  // console.error(messageData.getMessages());
  const messageCount = messageData.getMessages().filter((x) => x.name === currentUser.name).length + 1;
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
    messageData.lastTwentyMessages(); // i added this
  }
  document.getElementById('input-form').reset();
};

const clearMessages = () => {
  if (messageData.getMessages().length > 0) {
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
