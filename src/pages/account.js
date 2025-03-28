//#region Imports
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/router';
import Head from 'next/head';
//#endregion

export default function Account() {
  const [user, setUser] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [uploads, setUploads] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Check auth
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) router.push('/login');
      else {
        setUser(user);
        loadUserData(user.id); // Load purchases and uploads
      }
    });
  }, []);

  async function loadUserData(userId) {
    // Get purchases
    const { data: purchaseData } = await supabase
      .from('purchases')
      .select('id, tool_id, created_at, tools(name, price, download_url)')
      .eq('user_id', userId);

    setPurchases(purchaseData || []);

    // Get uploads (seller tools)
    const { data: uploadData } = await supabase
      .from('tools')
      .select('id, name, price, download_url, created_at')
      .eq('owner_id', userId);

    setUploads(uploadData || []);
  }

  return (
    <>
      <Head>
        <title>Devly – My Account</title>
      </Head>
      <div className="min-h-screen bg-black text-white px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Welcome, {user?.email}</h1>

          {/* Logout */}
          <button
            className="mb-8 bg-white text-black px-4 py-2 rounded"
            onClick={async () => {
              await supabase.auth.signOut();
              router.push('/login');
            }}
          >
            Logout
          </button>

          {/* Purchase History */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2">🛒 Your Purchases</h2>
            {purchases.length > 0 ? (
              <ul className="space-y-2">
                {purchases.map((purchase) => (
                  <li key={purchase.id} className="bg-gray-800 p-4 rounded">
                    <div className="font-medium">{purchase.tools.name}</div>
                    <div className="text-sm text-gray-400">
                      Purchased on {new Date(purchase.created_at).toLocaleDateString()}
                    </div>
                    <a
                      href={purchase.tools.download_url}
                      className="text-blue-400 underline text-sm"
                      download
                    >
                      Download again
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No purchases yet.</p>
            )}
          </section>

          {/* Seller Uploads */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2">📦 Your Uploads</h2>
            {uploads.length > 0 ? (
              <ul className="space-y-2">
                {uploads.map((tool) => (
                  <li key={tool.id} className="bg-gray-800 p-4 rounded">
                    <div className="font-medium">{tool.name}</div>
                    <div className="text-sm text-gray-400">Uploaded on {new Date(tool.created_at).toLocaleDateString()}</div>
                    <div className="text-sm">Price: ${tool.price}</div>
                    <a
                      href={tool.download_url}
                      className="text-blue-400 underline text-sm"
                      download
                    >
                      Download file
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No uploads yet.</p>
            )}
          </section>

          {/* Subscription Info */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-2">💳 Subscription</h2>
            <p className="text-gray-400">Coming soon — you'll be able to manage your plan here.</p>
          </section>
        </div>
      </div>
    </>
  );
}
