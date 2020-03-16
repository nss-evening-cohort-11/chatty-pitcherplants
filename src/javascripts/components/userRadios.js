import utils from '../helpers/util';
import userData from '../helpers/data/userData';

const printRadioButtons = () => {
  const users = userData.getUsers();
  let domString = '';
  users.forEach((user, i) => {
    domString += '<div class="form-check form-check-inline">';
    domString += `<input class="form-check-input" type="radio" name="userSelection" id="${user.id}" value="${user.name}" ${i === 0 ? 'checked' : ''}>`;
    domString += `<label class="form-check-label" for="${user.id}">${user.name}</label>`;
    domString += '</div>';
  });
  utils.printToDom('user-radios', domString);
};

export default {
  printRadioButtons,
};
