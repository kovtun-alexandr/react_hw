import { Outlet } from 'react-router'
import GoHomeButton from '../components/GoHomeButton/GoHomeButton';

function InfoLayout() {
    return (
        <div className="container">
            <section className='info'>
                <h1>Інформація</h1>
                <div className='info-contant'>
                    <Outlet />
                </div>
                <GoHomeButton />
            </section>
        </div>
    );
}

export default InfoLayout;