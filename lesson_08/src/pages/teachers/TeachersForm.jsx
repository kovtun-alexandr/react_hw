import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import apiRouts from "../../api/apiRouts";
import useTeachersApi from "../../hooks/useTeachersApi";
import useForm from "../../hooks/useForm";
import frontRoutes from "../../routes/frontRoutes";
import InputField from "../../components/InputField/InputField";
import Loading from "../../components/Loading/Loading";

function TeachersForm() {
    const navigate = useNavigate()
    const { id } = useParams()

    const isEditing = !!id

    const titleLabel = isEditing
        ? 'Редагувати вчителя'
        : 'Додати нового вчителя'
    const saveButtonLabel = isEditing
        ? 'Оновити вчителя'
        : 'Додати вчителя'

    const { values, handleChange, setValues } = useForm({
        name: '',
        subject: '',
        photo: ''
    })

    const url = isEditing ? apiRouts.getTeacherById(id) : ''
    const {
        data: fetchedTeaher,
        isLoading,
        error
    } = useTeachersApi(url, { skip: !isEditing })


    useEffect(() => {
        if (fetchedTeaher) {
            setValues({
                name: fetchedTeaher.name ?? '',
                subject: fetchedTeaher.subject ?? '',
                photo: fetchedTeaher.photo ?? ''
            })
        }
    }, [fetchedTeaher])

    async function handleSubmit(e) {
        e.preventDefault()

        // FETCH
        // try {
        //     const url = apiRouts.addTeacher
        //     const response = await fetch(url, {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(values),
        //     })

        //     if (!response.ok) {
        //         const text = await response.text()
        //         throw new Error(text)
        //     }

        //     navigate(frontRoutes.pages.teachers.root)
        // } catch (error) {
        //     console.error("Помилка при відправці:", error)
        // }

        // AXIOS
        try {
            if (isEditing) {
                await axios.put(apiRouts.updateTeacher(id), values)
            } else {
                await axios.post(apiRouts.addTeacher, values)
            }

            navigate(frontRoutes.pages.teachers.root)
        } catch (error) {
            console.error("Помилка при відправці:", error)
        }
    }
    return (
        <div className="container">
            <section className="teachers-form">
                <h1>{titleLabel}</h1>
                {isLoading ? <Loading /> : (
                    <form onSubmit={handleSubmit} className="form-teachers">
                        <InputField
                            label="Ім`я:"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Введіть ім`я вчителя"
                        />
                        <InputField
                            label="Предмет:"
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                            placeholder="Введіть предмет викладання"
                        />
                        <InputField
                            label="Фото URL (не обов`язково):"
                            name="photo"
                            value={values.photo}
                            onChange={handleChange}
                            placeholder="Введіть URL фотографії"
                        />
                        <div className="techers-form__btns">
                            <button>
                                {saveButtonLabel}
                            </button>
                            <Link
                                className="btn btn-gray"
                                to={frontRoutes.pages.teachers.root}
                            >
                                Скасувати
                            </Link>
                        </div>
                    </form>
                )}
                {!!error && <h1 className="error">Error: {error}</h1>}
            </section>
        </div>
    );
}

export default TeachersForm;