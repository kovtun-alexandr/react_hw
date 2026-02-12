import { baseApi } from "@/shared/api/baseApi";
import { apiRoutes } from "@/shared/config/routes/apiRoutes";

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            // query: ({ page, limit }) => ({
            //     url: apiRoutes.users,
            //     params: { page, limit },
            // }),
            query: () => ({
                url: apiRoutes.users,
            }),
            providesTags: ['User']
        }),
        getUserById: build.query({
            query: (id) => ({
                url: `${apiRoutes.users}/${id}`
            }),
            providesTags: ['User'],
        }),
        createUser: build.mutation({
            query: (data) => ({
                url: apiRoutes.users,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `${apiRoutes.users}/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        }),
    }),
})

export const {
    useGetUsersQuery,
    useLazyGetUserByIdQuery,
    useCreateUserMutation,
    useDeleteUserMutation,
} = userApi