import ResultPane from "../result-pane";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./app";

export default () => {
  const [results, setResults] = useState(null);
  const accessToken = useContext(AuthContext);
  useEffect(() => {
    if (accessToken === null) return;
    const fetchPets = async () => {
      const petResults = await fetch(
        "GET https://api.petfinder.com/v2/animals",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const json = await petResults.json();
      setResults(json.animals);
    };
    fetchPets();
  }, [accessToken]);
  if (results === null) return null;
  return <ResultPane results={results} />;
};