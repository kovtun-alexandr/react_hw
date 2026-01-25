import { Link } from "react-router";
import styles from './FilterBlock.module.css'
import InputField from "../InputField/InputField";
import CustomSelect from "../CustomSelect/CustomSelect";

function FilterBlock({
    filterType,
    selectList,
    searchInputLabel,
    searchName,
    searchValue,
    searchPlaceholder,
    dateInputLabel,
    dateName,
    dateValue,
    datePlaceholder,
    onChange,
    onChangeSelect,
    path,
    linkLabel,
}) {
    return (
        <div className={styles.filter}>
            <div className={styles.sort}>
                {!!selectList &&
                    <CustomSelect
                        label="Фільтрувати:"
                        name="filterType"
                        value={filterType}
                        selectList={selectList}
                        onChange={onChangeSelect}
                    />
                }
                {filterType === 'name' &&
                    <InputField
                        label={searchInputLabel}
                        type="text"
                        name={searchName}
                        value={searchValue}
                        placeholder={searchPlaceholder}
                        onChange={onChange}
                    />
                }
                {filterType === 'date' &&
                    < InputField
                        label={dateInputLabel}
                        type="date"
                        name={dateName}
                        value={dateValue}
                        placeholder={datePlaceholder}
                        onChange={onChange}
                    />
                }
            </div>
            <Link
                className="btn"
                to={path}
            >
                {linkLabel}
            </Link>
        </div>
    );
}

export default FilterBlock;