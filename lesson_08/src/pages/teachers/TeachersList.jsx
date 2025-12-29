import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import useTeachersApi from "./../../hooks/useTeachersApi";
import TeachersCard from "../../components/TeachersCard/TeachersCard";
import frontRoutes from "../../routes/frontRoutes";
import apiRouts from './../../api/apiRouts'
import Loading from "../../components/Loading/Loading";

function TeachersList() {
    const [teachers, setTeachers] = useState([])
    const [selectedTeachersIdList, setSelectedTeachersIdList] = useState([])
    const navigate = useNavigate()

    const {
        data: teachersList,
        isLoading,
        error
    } = useTeachersApi(apiRouts.getAllTeachers)

    useEffect(() => {
        if (!isLoading && !error) setTeachers(teachersList)
    }, [teachersList, isLoading, error])

    const onSelect = (teacherId) => {
        if (selectedTeachersIdList.includes(teacherId))
            setSelectedTeachersIdList((prevList) =>
                prevList.filter((el) => el !== teacherId))
        else setSelectedTeachersIdList((prevList) =>
            [...prevList, teacherId])
    }

    const goToMeetings = () => {
        const teachersListForMeetings =
            teachers.filter((teacher) =>
                selectedTeachersIdList.includes(teacher.id))
        navigate(frontRoutes.navigate.meeting, {
            state: {
                teachersListForMeetings,
            },
        })
    }

    const goToAddNew = () => {
        navigate(frontRoutes.pages.teachers.add)
    }
    return (
        <div className="container">
            <section className="teachers">
                <h1>Список вчителів</h1>
                {isLoading
                    ? <Loading />
                    : (
                        <>
                            <div className="teachers__head">
                                <button
                                    className="btn btn-green"
                                    onClick={goToAddNew}
                                >
                                    Додати новаго вчителя
                                </button>
                                {!!selectedTeachersIdList.length && (
                                    <button
                                        className="btn btn-blue"
                                        onClick={goToMeetings}
                                    >
                                        {`Викликати ${selectedTeachersIdList.length} вчителів на збори`}
                                    </button>
                                )}
                            </div>
                            <ul className="teachers__list">
                                {teachers.map(teacher => (
                                    <TeachersCard
                                        key={teacher.id}
                                        teacher={teacher}
                                        onSelect={onSelect}
                                        isSelected={selectedTeachersIdList.includes(teacher.id)}
                                        onDelete={(id) => setTeachers(prev => prev.filter(t => t.id !== id))}
                                    />
                                ))}
                            </ul>
                        </>
                    )}
                {!!error && <h1 className="error">Error: {error}</h1>}
            </section>
        </div>
    );
}

export default TeachersList;