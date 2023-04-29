const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsRefreshing = state => state.auth.isRefreshing;

const getName = state => state.auth.user.name;

const getEmail = state => state.auth.user.email;

const authSelector = {
  getIsLoggedIn,
  getIsRefreshing,
  getName,
  getEmail,
};

export default authSelector;
