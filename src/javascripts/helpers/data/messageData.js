const messages = [{
  date: Date.now(),
  name: 'Brandy',
  message: 'Hey, everyone. Who should start with the setup branch?',
  id: 'User id + index in message array',
},
{
  date: Date.now(),
  name: 'Helen',
  message: 'Are the tickets done yet?',
  id: 'User id + index in message array',
},
{
  date: Date.now(),
  name: 'Logan',
  message: 'Yeah, the tickets are finished.',
  id: 'User id + index in message array',
},
{
  date: Date.now(),
  name: 'Iris',
  message: 'I can do the setup branch. Give me a minute...',
  id: 'User id + index in message array',
},
{
  date: Date.now(),
  name: 'Becca',
  message: 'Teamwork makes the dream work.',
  id: 'User id + index in message array',
},
];

const getMessages = () => messages;

export default {
  getMessages,
};
