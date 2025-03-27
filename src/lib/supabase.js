import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tncbmulzyslhrgcmoikd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuY2JtdWx6eXNsaHJnY21vaWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNjg4MjMsImV4cCI6MjA1ODY0NDgyM30.antyF6MuJ0EMlhE8ecHxff9Ma6HnwTD39j3zerkB45o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
