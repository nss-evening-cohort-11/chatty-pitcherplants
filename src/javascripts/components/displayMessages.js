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
    domString += '<div class ="text-right">';
    domString += '<button class="btn btn-danger">Delete</button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });

  util.printToDom('incoming-message', domString);
};

const deleteCard = (e) => {
  cardId = e.target.closest(.card).id
  const messageIndex = messages.find.index((x) => x.id === cardId);
  messages.splice(message.index, 2)
  displayAllMessages();
};


const addMessage = () => {
  const message = document.getElementById('user-message').value;

  const messageObject = {
    date: Date.now(),
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
