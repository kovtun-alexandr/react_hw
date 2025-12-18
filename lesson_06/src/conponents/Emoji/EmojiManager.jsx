import { useState } from "react";
import EmojiTable from "./EmojiTable/EmojiTable";
import SearchForm from "./Search/SearchForm";
import FiltersField from "./Filters/FiltersField";
import useFetch from "../../hooks/useFetch";
import useFilteredEmojies from "../../hooks/useFilteredEmojies";

function EmojiManager() {
    const { data: emojies, isLoading, error } = useFetch('https://emojihub.yurace.pro/api/all')
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('all')
    const [group, setGroup] = useState('all')

    console.log("Render Manager")

    // !useDeferredValue
    // const { filteredEmojies, availableCategories, availableGroups } = useFilteredEmojies({
    //     emojies,
    //     search,
    //     category,
    //     setCategory,
    //     group,
    //     setGroup,
    //     mode: 'deferred'
    // })

    // !useDebounce()
    const { filteredEmojies, availableCategories, availableGroups } = useFilteredEmojies({
        emojies,
        search,
        category,
        setCategory,
        group,
        setGroup,
        mode: 'debounce'
    })
    return (
        <section className="emoji">
            <h2>Emoji</h2>
            <div className="emoji__wrap">
                {error
                    ? <div className="error">Data loading error</div>
                    : <>
                        <SearchForm setSearch={setSearch} />

                        <FiltersField
                            categories={availableCategories}
                            groups={availableGroups}
                            category={category}
                            setCategory={setCategory}
                            group={group}
                            setGroup={setGroup}
                        />
                        {isLoading
                            ? <div className="loading">Loadeng...</div>
                            : <EmojiTable emojies={filteredEmojies} />
                        }
                    </>
                }
            </div>
        </section>
    );
}

export default EmojiManager;