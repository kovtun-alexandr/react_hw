import { useCreateDoctorMutation, useGetDoctorByIdQuery, usePutDoctorByIdMutation } from "@/api/slices/doctirApi";
import ActionForm from "@/components/ActionForm/ActionForm";
import Error from "@/components/Error/Error";
import InputField from "@/components/InputField/InputField";
import Loading from "@/components/Loading/Loading";
import useForm from "@/hooks/useForm";
import frontRoutes from "@/router/frontRoutes";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function DoctorsForm() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: doctor, error, isLoading } = useGetDoctorByIdQuery(id, { skip: !id })
    const [putDoctorById] = usePutDoctorByIdMutation()
    const [createDoctor] = useCreateDoctorMutation()

    const { value, handleChange, setValue } = useForm({
        fullName: '',
        specialty: '',
        room: '',
        notes: '',
        phone: '',
        email: '',
    })

    useEffect(() => {
        if (!doctor) return

        setValue(prev => ({
            ...prev,
            fullName: doctor.fullName ?? '',
            specialty: doctor.specialty ?? '',
            room: doctor.room ?? '',
            notes: doctor.notes ?? '',
            phone: doctor.phone ?? '',
            email: doctor.email ?? '',
        }))
    }, [doctor, setValue])

    const handlEditDoctor = async (e) => {
        e.preventDefault()
        try {
            if (id) {
                await putDoctorById({ id, data: value }).unwrap()
            } else (
                await createDoctor({ ...value }).unwrap()
            )
            navigate(frontRoutes.navigate.doctors.root)
        } catch (error) {
            console.error('Помилка при збереженні запису', error)
        }
    }
    return (<section className="doctors">
        <h1>{!!id
            ? 'Редагувати лікаря'
            : 'Додати лікаря'
        }</h1>
        {error ? (<Error error={error} />) : isLoading ? (<Loading />) : (
            <form
                className="form"
                onSubmit={handlEditDoctor}
                action=""
            >
                <InputField
                    label="Ім`я лікаря:"
                    type="text"
                    name="fullName"
                    value={value.fullName}
                    placeholder="Введіть ім`я та прізвище лікаря"
                    onChange={handleChange}
                />
                <InputField
                    label="Спеціалізація лікаря:"
                    type="text"
                    name="specialty"
                    value={value.specialty}
                    placeholder="Введіть спеціадізацію лікаря (Терапевт)"
                    onChange={handleChange}
                />
                <InputField
                    label="Кабінет лікаря:"
                    type="text"
                    name="room"
                    value={value.room}
                    placeholder="Введіть № кабінету лікаря (101)"
                    onChange={handleChange}
                />
                <InputField
                    label="Часи прийому лікаря:"
                    type="text"
                    name="notes"
                    value={value.notes}
                    placeholder="Працює з 09:00 до 15:00"
                    onChange={handleChange}
                />
                <InputField
                    label="Номер телефона лікаря:"
                    type="tel"
                    name="phone"
                    value={value.phone}
                    placeholder="+380501112233"
                    onChange={handleChange}
                />
                <InputField
                    label="E-mail лікаря:"
                    type="email"
                    name="email"
                    value={value.email}
                    placeholder="somename@example.com"
                    onChange={handleChange}
                />
                <ActionForm
                    path={frontRoutes.navigate.doctors.root}
                    id={id}
                />
            </form>
        )}
    </section>);
}

export default DoctorsForm;