import { useDeferredValue, useEffect, useMemo } from "react";
import useDebounce from "./useDebounce";

export default function useFilteredEmojies({
    emojies = [],
    search,
    category,
    setCategory,
    group,
    setGroup,
    mode = 'debounce'
}) {
    const effectiveSearch = mode === 'debounce'
        ? useDebounce(search, 500)
        : useDeferredValue(search)

    const base = useMemo(() => {
        if (!effectiveSearch) return emojies
        return emojies.filter(el =>
            el.name.toLowerCase().includes(effectiveSearch.toLowerCase())
        )
    }, [emojies, effectiveSearch])

    const availableCategories = useMemo(() => {
        return [...new Set(base
            .filter(el => group === 'all' ? true : el.group === group)
            .map(el => el.category)
        )]
    }, [base, group])

    const availableGroups = useMemo(() => {
        return [...new Set(base
            .filter(el => category === 'all' ? true : el.category === category)
            .map(el => el.group)
        )]
    }, [base, category])

    useEffect(() => {
        if (category !== "all" && !availableCategories.includes(category)) {
            setCategory("all")
        }
    }, [availableCategories, category, setCategory])

    useEffect(() => {
        if (group !== "all" && !availableGroups.includes(group)) {
            setGroup("all")
        }
    }, [availableGroups, group, setGroup])

    const filteredEmojies = useMemo(() => {
        return base
            .filter(el => category === 'all' ? true : el.category === category)
            .filter(el => group === 'all' ? true : el.group === group)
    }, [base, category, group])

    return {
        filteredEmojies,
        availableCategories,
        availableGroups
    }
}