import { createClient } from '@supabase/supabase-js';

export const supabaseClient = createClient(
  'https://vpujussczbbblcelgkhi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdWp1c3NjemJiYmxjZWxna2hpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5MzMwMTcsImV4cCI6MjA0NTUwOTAxN30.DTM9hEFRqjQqI1QNOWLaYNOcGeUb4aQT6O9GALjTQ_E',
);
