import util from '../helpers/data/util';
import messageData from '../helpers/data/messageData';

const displayAllMessages = () => {
  const messages = messageData.getMessages();
  let domString = '';

  messages.forEach((userMessage) => {
    domString += userMessage.name;
  });

  util.printToDom('incoming-message', domString);
};

export default {
  displayAllMessages,
};
