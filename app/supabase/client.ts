import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

export function createSupabaseClient() {
  return createClient<Database>(
    "https://itwqbhdhrbzqrcqfmvhu.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0d3FiaGRocmJ6cXJjcWZtdmh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NjE2ODAsImV4cCI6MjAzNzMzNzY4MH0.2VurSGhrobrPia_MJZto6hqNqVGiKsA7Udc5D5h6gKo"
  );
}
