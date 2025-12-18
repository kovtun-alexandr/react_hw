import FiltersSelect from "./FiltersSelect";

function FiltersField({ categories, category, setCategory, groups, group, setGroup }) {
    console.log("Render FiltersField")
    return (
        <div className="emoji__filter">
            <FiltersSelect
                title="Category"
                name="category"
                options={categories}
                value={category}
                setValue={setCategory}
            />
            <FiltersSelect
                title="Group"
                name="group"
                options={groups}
                value={group}
                setValue={setGroup}
            />
        </div>
    );
}

export default FiltersField;