import frontRoutes from "@/app/router/frontRoutes";
import { Link } from "react-router";

function AddDesireLink() {
    return (
        <Link
            className="btn"
            to={frontRoutes.navigate.desires.add}
        >
            ✚ Add desire
        </Link>
    );
}

export default AddDesireLink;