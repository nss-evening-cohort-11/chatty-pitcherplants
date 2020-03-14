
import moment from '../../../../node_modules/moment';


const messages = [{
  date: moment().subtract(1, 'days').calendar(),
  name: 'Brandy',
  message: 'Hey, everyone. Who should start with the setup branch?',
  id: 'brandy',
},
{
  date: moment().subtract(1, 'days').calendar(),
  name: 'Helen',
  message: 'Are the tickets done yet?',
  id: 'helen',
},
{
  date: moment().subtract(1, 'days').calendar(),
  name: 'Logan',
  message: 'Yeah, the tickets are finished.',
  id: 'logan',
},
{
  date: moment().subtract(1, 'days').calendar(),
  name: 'Iris',
  message: 'I can do the setup branch. Give me a minute...',
  id: 'iris',
},
{
  date: moment().subtract(1, 'days').calendar(),
  name: 'Becca',
  message: 'Teamwork makes the dream work.',
  id: 'becca',
},
];


const getMessages = () => messages;

const setMessage = (newMessage) => {
  messages.push(newMessage);
};

export default {
  messages,
  getMessages,
  setMessage,
};
