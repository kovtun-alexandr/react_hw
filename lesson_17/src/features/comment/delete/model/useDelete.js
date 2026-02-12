import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";

export const useDelete = baseApi.injectEndpoints({
    endpoints: (build) => ({
        deleteComment: build.mutation({
            query: (id) => ({
                url: `${apiRoutes.comments}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Comment'],
        })
    })
})

export const { useDeleteCommentMutation } = useDelete