import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const hasValidConfig = Boolean(supabaseUrl && supabaseAnonKey)

if (!hasValidConfig) {
  console.error(
    'Supabase environment variables are missing. ' +
    'Visit logging, contact form, and admin panel ' +
    'will not function until VITE_SUPABASE_URL and ' +
    'VITE_SUPABASE_ANON_KEY are set.'
  )
}

export const supabase = hasValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isSupabaseConfigured = hasValidConfig
