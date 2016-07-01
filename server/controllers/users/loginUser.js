import User from '../../models/user.js';

const loginUser = (token) => {
  User.findOne({
    token: token,
  }, (err, user) => {
    console.log('inside loginUser', err, user);

    if (user === null) {
      User.create({
        token: token,
      }, (err, user) => {
        if (err) {
          console.log('The user is new and we could not create a new entry in the database');
        } else {
          console.log('this is new user data', user);
          return user;
        }
      });
    } else {
      console.log('Welcome back', user);
      return user;
    }
  });
};

export default loginUser;
