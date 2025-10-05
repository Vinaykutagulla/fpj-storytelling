import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string | undefined;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string | undefined;

export const hasSupabase = !!(supabaseUrl && serviceKey);

export const supabaseAdmin = hasSupabase
  ? createClient(supabaseUrl!, serviceKey!, { auth: { persistSession: false } })
  : null;
