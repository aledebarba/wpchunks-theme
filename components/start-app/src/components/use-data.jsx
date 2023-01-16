import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useSocial = ( path="/wp-json/wp/v2/social" ) => {
    const { data, error, isLoading } = useSWR(path, fetcher);
    return {
        data,
        error,
        isLoading
    }
}

export const useProjects = ( path="/wp-json/wp/v2/projects" ) => {
    const { data, error, isLoading } = useSWR(path, fetcher);
    return {
        data,
        error,
        isLoading
    }
}

export const useColabs = ( path="/wp-json/wp/v2/colabs" ) => {
    const { data, error, isLoading } = useSWR(path, fetcher);
    return {
        data,
        error,
        isLoading
    }
}

export const useConfig = ( path="/wp-json/wp/v2/admin" ) => {
    const { data, error, isLoading } = useSWR(path, fetcher);
    return {
        data,
        error,
        isLoading
    }
}

export const useClients = ( path="/wp-json/wp/v2/clients" ) => {
    const { data, error, isLoading } = useSWR(path, fetcher);
    return {
        data,
        error,
        isLoading
    }
}

export const useMockupProjects = ( path="/wp-content/themes/hysteria-theme/components/start-app/src/data/projetos.json" ) => {
    const { data, error, isLoading } = useSWR(path, fetcher);
    return {
        data,
        error,
        isLoading
    }
}
