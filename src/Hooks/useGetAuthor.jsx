import { useQuery } from "@tanstack/react-query"
import api from "./apiClient"

const useGetAuthor = (id) =>{
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["users", id],
        queryFn: async () =>{
            const response = await api.get(`/users/${id}`);
            return response.data;
        }
    })
    return {data, isLoading, isError, error}
}

export default useGetAuthor;