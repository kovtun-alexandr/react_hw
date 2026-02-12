import { authApi, tokenRefreshed } from "@/features/auth"
import { store } from "../store/store"
import { redirect } from "react-router"

export const authCheckLoader =
    ({ refreshMutex }) =>
        async (route) => {
            const meta = route?.meta

            let user = store.getState()?.auth?.user

            const loaderData = {
                user,
                isAuthentificated: !!user,
            }

            if (meta?.requierAuth) {
                if (refreshMutex.isLocked()) {
                    await refreshMutex.waitForUnlock()
                    user = store.getState()?.auth?.user
                    loaderData.user = user
                    loaderData.isAuthentificated = !!user
                }

                if (!user) {
                    const release = await refreshMutex.acquire()
                    try {
                        const res = await store.dispatch(authApi.endpoints.refresh.initiate())
                        if (res?.data?.user && res?.data?.accessToken) {
                            store.dispatch(tokenRefreshed(res.data))
                        }
                        user = res?.data?.user
                        loaderData.user = user
                        loaderData.isAuthentificated = !!user
                        if (!user) {
                            throw redirect('/login')
                        }
                    } catch {
                        throw redirect('/login')

                    } finally {
                        release()
                    }
                }

                if (meta?.roles && meta?.roles?.length > 0 && (!user?.role || !meta.roles.incledes(user.role))) {
                    throw redirect('/login')
                }
            }

            return loaderData
        }