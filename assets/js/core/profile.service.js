window.ProfileService = (() => {
  const { client } = window.AppSupabase;

  async function getCurrentProfile(userId) {
    return client
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
  }

  async function getTeam() {
    return client
      .from('profiles')
      .select('id, display_name, role, department, avatar_url')
      .order('display_name');
  }

  return {
    getCurrentProfile,
    getTeam
  };
})();
