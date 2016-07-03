import User from '../../models/user.js';

const loginUser = (facebookUserId, firstName, lastName) => {
  User.findOne({
    facebookUserId: facebookUserId,
  }, (err, user) => {
    console.log('inside loginUser', err, user);

    if (user === null) {
      User.create({
        facebookUserId: facebookUserId,

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
