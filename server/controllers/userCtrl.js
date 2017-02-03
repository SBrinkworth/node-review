var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function (req, res, next) {
    var filterUsers = users.slice();

    filterUsers = filterUsers.filter(function (user, i, users) {
      if (user.name === req.body.name && user.password === req.body.password) {
        return true;
      }
      return false;
    });
    if (!filterUsers.length) {
      return res.status(404).send({userFound: false});
    }
    req.session.currentUser = filterUsers[0];

    return res.status(200).send({userFound: true});
  }
};
