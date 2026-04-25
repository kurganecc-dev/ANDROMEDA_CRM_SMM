window.AppSupabase = (() => {
  const SUPABASE_URL = 'https://wysiuvhhetjqfhpcykgm.supabase.co';
  const SUPABASE_ANON_KEY = 'sb_publishable_PdY082TJszfAELdPBYsJvg_gJnFysNr';

  const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  return { client };
})();