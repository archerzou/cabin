import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cnlsqoronxcbuphzauns.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubHNxb3JvbnhjYnVwaHphdW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0MTAyMjEsImV4cCI6MjAwMjk4NjIyMX0.KFVUsduH-ZzDuCsLsBkxNCae6r8rO8zbySttBjyrZgc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
