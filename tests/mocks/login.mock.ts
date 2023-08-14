const noUsernameLoginBody = {
  password: 'terrível',
};

const noPasswordLoginBody = {
  username: 'Hagar',
};

const invalidUsername = {
  username: 'invalid-username',
  password: 'terrível',
};

const invalidPassword = {
  username: 'Hagar',
  password: 'invalid-password',
};

const validUsernameAndPassword = {
  username: 'Hagar',
  password: 'terrível',
};

const errorMessageRequiredFields = { message: '"username" and "password" are required' };

const errorMessageInvalidFields = { message: 'Username or password invalid' }

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  invalidUsername,
  invalidPassword,
  validUsernameAndPassword,
  errorMessageRequiredFields,
  errorMessageInvalidFields,
};
