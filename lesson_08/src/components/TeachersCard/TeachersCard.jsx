import { Link, useNavigate } from 'react-router'
import frontRoutes from "../../routes/frontRoutes";
import styles from './TeachersCard.module.css'
import axios from 'axios';
import apiRouts from '../../api/apiRouts';

function TeachersCard({ teacher, onSelect, isSelected, onDelete }) {
    const navegate = useNavigate()

    async function deleteTeacher(teacherId) {
        try {
            await axios.delete(apiRouts.deleteTeacher(teacherId))
            onDelete?.(teacherId)
        } catch (error) {
            console.error("Помилка при ввидаленні:", error)
        }
    }

    function goToEdit() {
        navegate(frontRoutes.navigate.teachers.edit.replace(':id', teacher.id), {
            state: { teacher }
        })
    }
    return (
        <li className="teachers__item">
            <div className={[styles['teacher-card'], isSelected ? `${styles.active}` : ''].join(" ")}>
                <div className={styles['teacher-card__header']}>
                    <img src={teacher.photo} alt={`Photo ${teacher.name}`} />
                </div>
                <div className={styles['teacher-card__body']}>
                    <h2>{teacher.name}</h2>
                    <p>
                        Приедмет: <span>{teacher.subject}</span>
                    </p>
                </div>
                {onSelect ? (
                    <div className={styles['teacher-card__footer']}>
                        <button
                            onClick={() => onSelect(teacher.id)}
                        >
                            {!isSelected ? 'Вибрати на збори' : 'Вибрано'}
                        </button>
                    </div>
                ) : null}
            </div>
            {onSelect ? (
                <div className="teachers__btns">
                    <button
                        className='btn btn-blue'
                        onClick={goToEdit}
                    >
                        Редагувати
                    </button>
                    <button
                        className='btn-red'
                        onClick={() => deleteTeacher(teacher.id)}
                    >Видалити</button>
                </div>
            ) : null}
        </li>
    );
}

export default TeachersCard;