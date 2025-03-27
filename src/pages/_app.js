import "@/styles/globals.css";
import { supabase } from '../lib/supabase';

const { data, error } = await supabase.from('tools').select('*');


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
