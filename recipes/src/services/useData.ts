import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchHTTResponse<T> {
  count: number;
  meals: T[] | null; // meals can be null if no results found
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    // Set the correct endpoint, defaulting to 'f=c' if searchText is empty or meals are null
    const modifiedEndpoint = requestConfig?.params?.s
      ? `/search.php?s=${requestConfig.params.s}`
      : `/search.php?f=c`; // Default to 'f=c' if no 's' is provided

    apiClient
      .get<FetchHTTResponse<T>>(modifiedEndpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        if (res.data.meals === null || res.data.meals.length === 0) {
          // No meals found for the search query

          setError("No meals found for your search."); // Provide a useful message
        } else {
          setData(res.data.meals);
          setError(""); // Reset error if meals are found
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [requestConfig?.params?.s]); // Run the effect when `s` changes

  return { data, error, isLoading };
};

export default useData;
