
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


const getMessages = () => messages;
// .slice(0, messages.length - 10);

const setMessage = (newMessage) => {
  messages.push(newMessage);
};


const lastTwentyMessages = () => messages.slice(messages.length - 6, messages.length); // this is a return statement

//
// const lastTwentyMessages = () => {
//   setMessage().slice(messages.length - 6, messages.length);
// };

export default {
  messages,
  getMessages,
  setMessage,
  lastTwentyMessages,
};
