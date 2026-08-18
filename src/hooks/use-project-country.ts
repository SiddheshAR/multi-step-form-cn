import { useEffect, useState } from "react";

interface ProjectCountryResp {
  success: boolean;
  message: string;
  project_id: number | string;
  content_niche: string;
  country_code: string;
}

export default function useProjectCountry() {
  const [data, setData] = useState<ProjectCountryResp | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    setError(null);
    async function fetchCountryDetails() {
      try {
        const resp = await fetch(
          "/content-dashboard/project/content-niche-county-code",
          { signal: abortController.signal },
        );
        if (!resp.ok) {
          throw new Error(`Failed to Fetch Project data.`);
        }
        const respJson = await resp.json();
        setData(respJson);
      } catch (err) {
        if (err instanceof Error && err.name == "AbortError") {
          return;
        }
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    }
    fetchCountryDetails();
    return()=>{
        abortController.abort();
    }
  }, []);

  return { data, loading, error };
}
