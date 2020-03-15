
import moment from '../../../../node_modules/moment';


const messages = [{
  date: moment().subtract(2, 'days').calendar(),
  name: 'Brandy',
  message: 'Hey, everyone. Who should start with the setup branch?',
  id: 'user1-message1',
},
{
  date: moment().subtract(2, 'days').calendar(),
  name: 'Helen',
  message: 'Are the tickets done yet?',
  id: 'user2-message1',
},
{
  date: moment().subtract(1, 'days').calendar(),
  name: 'Logan',
  message: 'Yeah, the tickets are finished.',
  id: 'user3-message1',
},
{
  date: moment().subtract(1, 'days').calendar(),
  name: 'Iris',
  message: 'I can do the setup branch. Give me a minute...',
  id: 'user4-message1',
},
{
  date: moment().subtract(1, 'days').calendar(),
  name: 'Becca',
  message: 'Teamwork makes the dream work.',
  id: 'user5-message1',
},
];
// when i use -20 it only display the last 6 onscreen?
// when i get to 11 the first two card disappear?

const getMessages = () => messages;

const setMessage = (newMessage) => {
  messages.push(newMessage);
};

export default {
  messages,
  getMessages,
  setMessage,
};
