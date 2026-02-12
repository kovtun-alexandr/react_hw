import { useRefreshMutation } from "@/features/auth";
import { useEffect } from "react";

export function AppInit() {
    const [refresh] = useRefreshMutation()

    useEffect(() => {
        const init = async () => {
            await refresh()
        }
        init()
    }, [refresh])

    return null
}