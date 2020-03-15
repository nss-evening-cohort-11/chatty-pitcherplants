import moment from '../../../node_modules/moment';
import util from '../helpers/util';
import messageData from '../helpers/data/messageData';
import userData from '../helpers/data/userData';


const displayAllMessages = () => {
  const messages = messageData.getMessages();
  // const messages = messageData.lastTwentyMessages(); // added

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
    domString += '<button id="delete" class="btn btn-danger delete">Delete</button>';
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
  const messageCount = messageData.getMessages().filter((x) => currentUser.id === x.id).length + 1;
  if (!/^\s*$/.test(message)) {
    const messageObject = {
      date: moment().calendar(),
      name,
      message,
      id: `${currentUser.id}-message${messageCount}`,
    };
    messageData.setMessage(messageObject);
    displayAllMessages();
  }
  document.getElementById('input-form').reset();
};

export default {
  addMessage,
  displayAllMessages,
  deleteCard,
};
