import { useEffect, useState } from "react";


async function useProjectSettings() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "/content-dashboard/project/content-niche-county-code?project_id=proj_1042"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch project settings");
                }
                const result = await response.json();

                setData(result);
            } catch (err) {
                if(err instanceof Error){
                    setError(err.message)
                }else{
                    setError("Something went wrong.")
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])
    return {
        data,
        loading,
        error
    }
}
export default useProjectSettings