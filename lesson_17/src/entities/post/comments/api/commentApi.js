import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";

export const commentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCommentsByPost: build.query({
            query: (postId) => ({
                url: apiRoutes.getCommentsByPostId(postId),
            }),
            providesTags: ['Comment'],
        }),
    }),
})

export const {
    useGetCommentsByPostQuery,
} = commentApi