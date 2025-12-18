import { useEffect, useMemo, useState } from "react"

export default function useWindowSize() {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    // const deviceType = width > 1200 ? 'desktop' : width > 768 ? 'tablet' : 'mobile'

    const deviceType = useMemo(() => {
        if (width > 1200) return 'desktop'
        else if (width > 768) return 'tablet'
        else return 'mobile'
    })

    useEffect(() => {
        function handleResize() {
            setWidth(document.documentElement.clientWidth)
            setHeight(document.documentElement.clientHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return {
        width,
        height,
        deviceType
    }
}