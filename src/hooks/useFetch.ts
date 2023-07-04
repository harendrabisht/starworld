import { useEffect, useState } from 'react';

export interface IUseFetch<T> {
    data?: T,
    isLoading: boolean;
    error: Error | null;
}

export function useFetch<T = unknown>(url: string): IUseFetch<T> {
    const [data, setData] = useState<T>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getApiCall(url: string): Promise<void> {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (e: any) {
            setError(e);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }

    }
    useEffect(() => {
        getApiCall(url);
    }, [url]);
    return {
        data,
        isLoading,
        error
    }
}