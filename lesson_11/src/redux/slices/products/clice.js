import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BACE_URL = 'https://react-hw.onrender.com/api/products'

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BACE_URL}`)
            if (!response.ok) {
                throw new Error('Network error')
            }
            return await response.json()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const searchProducts = createAsyncThunk('products/searchProducts',
    async (query, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BACE_URL}/search?q=${query}`)
            if (!response.ok) {
                throw new Error('Network error')
            }
            return await response.json()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchProductById = createAsyncThunk('products/fetchProductById',
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BACE_URL}/${id}`)
            if (!response.ok) {
                throw new Error('Network error');
            }
            return await response.json()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addProduct = createAsyncThunk('products/addProduct',
    async (newProduct, { rejectWithValue }) => {
        try {
            const response = await fetch(`${BACE_URL}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(newProduct)
                }
            )
            if (!response.ok) {
                throw new Error('Failed to add product')

            }

            return await response.json()
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const productsSlice = createSlice({
    name: 'productsList',
    initialState: {
        productsList: [],
        searchResults: [],
        isSearching: false,
        currentProduct: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearError: (state) => {
            state.error = null
        },
        clearSearchResults: (state) => {
            state.searchResults = []
            state.isSearching = false
        }
    },
    extraReducers: (builder) => {
        builder
            //Fetch products
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.productsList = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            // Search product
            .addCase(searchProducts.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.searchResults = action.payload
                state.isSearching = true
            })
            .addCase(searchProducts.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            //Fetch productById
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false
                state.currentProduct = action.payload
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            //Add product
            .addCase(addProduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false
                state.productsList.push(action.payload)
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const { clearError, clearSearchResults } = productsSlice.actions

export default productsSlice.reducer