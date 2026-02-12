import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";

export const useCreate = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createComment: build.mutation({
            query: (data) => ({
                url: apiRoutes.comments,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Comment'],
        })
    })
})

export const { useCreateCommentMutation } = useCreate