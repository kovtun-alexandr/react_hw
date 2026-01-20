import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('products/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if (!response.ok) {
                throw new Error('Network error')
            }
            const data = await response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const postsSlice = createSlice({
    name: 'postsList',
    initialState: {
        postsList: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
            //Fetch posts
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false
                state.postsList = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { clearError } = postsSlice.actions

export default postsSlice.reducer