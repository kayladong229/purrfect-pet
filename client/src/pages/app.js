import { useEffect, createContext, useState } from "react";

export const AuthContext = createContext();

function MyApp({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const res = await fetch("/api/oauth-token");
      const json = await res.json();
      setAccessToken(json.access_token);
    };
    fetchAccessToken();
  }, []);

  return (
    <AuthContext.Provider value={accessToken}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
export default MyApp;