import moment from '../../../node_modules/moment';
import util from '../helpers/util';
import messageData from '../helpers/data/messageData';


const displayAllMessages = () => {
  const messages = messageData.getMessages();
  let domString = '';

  messages.forEach((userMessage) => {
    domString += `<div id="${userMessage.id}" class="card my-3" style="width: 18rem;">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${userMessage.name}</h5>`;
    domString += `<p class="card-text">${userMessage.message}</p>`;
    domString += '<div class ="text-left">';
    domString += `<small class="card-text">${userMessage.date}</small>`;
    domString += '</div>';
    domString += '<div class ="text-right">';
    domString += '<button id="delete" class="btn btn-danger">Delete</button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });

  const deleteCard = (e) => {
    const cardId = e.target.closest('.card').id;
    const messageIndex = messages.findIndex((x) => x.id === cardId);
    messages.splice(messageIndex, 1);
    displayAllMessages();
  };

  util.printToDom('incoming-message', domString);
  document.getElementById('delete').addEventListener('click', deleteCard);
};


const addMessage = () => {
  const message = document.getElementById('user-message').value;
  if (!/^\s*$/.test(message)) {
    const name = document.querySelector('input[name="userSelection"]:checked').value;
    const messageObject = {
      date: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a'),
      name,
      message,
      id: `message${messageData.getMessages().length}`,
    };
    messageData.setMessage(messageObject);
    displayAllMessages();
  }
  document.getElementById('input-form').reset();
};


export default {
  addMessage,
  displayAllMessages,
};
