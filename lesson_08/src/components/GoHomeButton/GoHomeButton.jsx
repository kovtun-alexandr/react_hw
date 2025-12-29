import { useNavigate } from 'react-router'
import frontRouters from '../../routes/frontRoutes';
import styles from './GoHomeButton.module.css'

function GoHomeButton() {
    const navigate = useNavigate()
    function handleHome() {
        navigate(frontRouters.pages.home)
    }
    return (
        <>
            <button className={styles['go-home']} onClick={handleHome}>На головну</button>
        </>
    );
}

export default GoHomeButton;