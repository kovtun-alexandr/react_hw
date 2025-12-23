import { NavLink } from "react-router";
import frontRoutes from "../../router/frontRoutes";

function ProductsCategoriesItem({ name }) {
    return (
        <li className="categories__item">
            <NavLink to={frontRoutes.navigate.getCategories(name)}>
                {name}
            </NavLink>
        </li>
    );
}

export default ProductsCategoriesItem;