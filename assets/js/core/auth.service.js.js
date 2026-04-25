window.AuthService = (() => {
  const { client } = window.AppSupabase;

  async function login(email, password) {
    return client.auth.signInWithPassword({ email, password });
  }

  async function logout() {
    return client.auth.signOut();
  }

  async function getSession() {
    return client.auth.getSession();
  }

  async function getUser() {
    return client.auth.getUser();
  }

  async function changePassword(newPassword) {
    return client.auth.updateUser({ password: newPassword });
  }

  return {
    login,
    logout,
    getSession,
    getUser,
    changePassword
  };
})();