import { Link } from 'react-router';
import InputField from '../InputField/InputField';
import styles from './ProductsFilter.module.css'
import frontRoutes from '@/routes/frontRoutes';
import useForm from '@/hooks/useForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '@/hooks/useDebounce';
import { clearSearchResults, searchProducts } from '@/redux/slices/products/clice';

function ProductsFilter() {
    const dispatch = useDispatch()
    const { value, handleChange } = useForm({})

    const debounceSearch = useDebounce(value.search, 500)

    useEffect(() => {
        if (debounceSearch && debounceSearch.trim() !== "") {
            dispatch(searchProducts(debounceSearch))
        } else {
            dispatch(clearSearchResults())
        }
    }, [debounceSearch, dispatch])

    return (
        <div className={styles.filter}>
            <InputField
                label='Enter the product name:'
                name='search'
                placeholder='iPhone 14'
                value={value}
                onChange={handleChange}
            />
            <Link
                className={`btn ${styles["filter-btn"]}`}
                to={frontRoutes.navigate.products.add}
                aria-label='Go to add product'
            >
                Add product
            </Link>
        </div >
    );
}

export default ProductsFilter;