import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: null,
        role: null,
        isAuth: false,
    },
    reducers: {
        setUser(state, action) {
            state.userName = action.payload.userName
            state.role = action.payload.role
            state.isAuth = true
        },
        logout(state) {
            state.userName = null
            state.role = null
            state.isAuth = false
        }
    }
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer