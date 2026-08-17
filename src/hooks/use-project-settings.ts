import { useEffect, useState } from "react";

interface ProjectSettings {
  success: boolean;
  message: string;
  project_id: string;
  content_niche: string;
  country_code: string;
}

function useProjectSettings(projectId:string) {
  const [data, setData] = useState<ProjectSettings | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProjectSettings() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
            `/content-dashboard/project/content-niche-county-code?project_id=proj_1042`,
            {signal:controller.signal},
        )
        if(!response.ok){
            throw new Error(
                `Failed to fetch project data.`
            );
        }
        const result:ProjectSettings = await response.json();
        setData(result)
      } catch (err) {
        if(err instanceof Error && err.name ==="AbortError"){
            return
        }
        setError(
            err instanceof Error ? err.message : "Something went wrong!!"
        )
      } finally {
        if(!controller.signal.aborted){
            setLoading(false);
        }
      }
    }
    fetchProjectSettings();
    return()=>{
        controller.abort();
    }
  }, [projectId]);

  return{data,loading,error}
}
export default useProjectSettings;
