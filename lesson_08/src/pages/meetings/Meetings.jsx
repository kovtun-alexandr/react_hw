import { useLocation, useNavigate } from "react-router";
import TeachersCard from "../../components/TeachersCard/TeachersCard";
import frontRoutes from "../../routes/frontRoutes";

function Meetings() {
    const { state } = useLocation()
    const navigate = useNavigate()
    const teachersListForMeetings = state?.teachersListForMeetings
    return (
        <div className="container">
            <section className="meeting">
                <h1>Учасники зборів</h1>
                {teachersListForMeetings?.length ? (
                    <>
                        <div className="meeting__info">
                            Список вчителів ({teachersListForMeetings?.length}) для виклику на збори:
                        </div>
                        <ul className="meeting__list">
                            {teachersListForMeetings.map((teacher) => (
                                <TeachersCard
                                    key={teacher.id}
                                    teacher={teacher}
                                />
                            ))}
                        </ul>
                    </>
                ) : (
                    <div className="meeting__info">
                        Список вчителів порожній
                    </div>
                )}
                <button
                    className="meeting__btn"
                    onClick={() => navigate(frontRoutes.pages.teachers.root)}
                >Повернуться до списку вчителів</button>
            </section>
        </div>
    );
}

export default Meetings;