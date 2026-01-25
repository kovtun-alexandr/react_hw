import { useCreatePatientMutation, useGetPatientByIdQuery, usePutPatientByIdMutation } from "@/api/slices/patientApi";
import ActionForm from "@/components/ActionForm/ActionForm";
import GeenderInpitRadioFild from "@/components/GeenderInpitRadioFild/GeenderInpitRadioFild";
import InputField from "@/components/InputField/InputField";
import useForm from "@/hooks/useForm";
import frontRoutes from "@/router/frontRoutes";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function PatientsForm() {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: patient } = useGetPatientByIdQuery(id, { skip: !id })
    const [putPatientById] = usePutPatientByIdMutation()
    const [createPatient] = useCreatePatientMutation()

    const { value, handleChange, setValue } = useForm({
        fullName: '',
        birthDate: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        notes: '',
    })

    useEffect(() => {
        if (!patient) return

        setValue(perv => ({
            ...perv,
            fullName: patient.fullName ?? '',
            birthDate: patient.birthDate ?? '',
            gender: patient.gender ?? '',
            phone: patient.phone ?? '',
            email: patient.email ?? '',
            address: patient.address ?? '',
            notes: patient.notes ?? '',
        }))
    }, [patient, setValue])

    const handleEditPatient = async (e) => {
        e.preventDefault()
        try {
            if (id) {
                await putPatientById({ id, data: value }).unwrap()
            } else {
                await createPatient({ ...value }).unwrap()
            }
            navigate(frontRoutes.navigate.patients.root)
        } catch (error) {
            console.error('Помилка при збереженні запису', error)
        }
    }
    return (<section className="patients">
        {!!id
            ? <h1>Редагувати пацієнта</h1>
            : <h1>Додати пацієнта</h1>
        }
        <form
            className="form"
            onSubmit={handleEditPatient}
            action=""
        >
            <InputField
                label="Ім`я пацієнта:"
                type="text"
                name="fullName"
                value={value.fullName}
                placeholder="Введіть ім`я та прізвище пацієнта"
                onChange={handleChange}
            />
            <InputField
                label="Дата народження пацієнта:"
                type="date"
                name="birthDate"
                value={value.birthDate}
                placeholder="Виберіть дату народження пацієнта"
                onChange={handleChange}
            />
            <GeenderInpitRadioFild
                patientId={id}
                name="gender"
                value={value.gender}
                onChange={handleChange}
            />
            <InputField
                label="Вади пацієнта, чи захворювання:"
                type="text"
                name="notes"
                value={value.address}
                placeholder="Алергія на пеніцилін, і т.д."
                onChange={handleChange}
            />
            <InputField
                label="Номер телефона пацієнта:"
                type="tel"
                name="phone"
                value={value.phone}
                placeholder="+380501112233"
                onChange={handleChange}
            />
            <InputField
                label="E-mail пацієнта:"
                type="email"
                name="email"
                value={value.email}
                placeholder="somename@example.com"
                onChange={handleChange}
            />
            <InputField
                label="Адресса пацієнта:"
                type="text"
                name="address"
                value={value.address}
                placeholder="м. Харків, пр-т Науки, 22"
                onChange={handleChange}
            />
            <ActionForm
                path={frontRoutes.navigate.patients.root}
                id={id}
            />
        </form>
    </section>);
}

export default PatientsForm;

// {
//     address: "м. Харків, пр-т Науки, 22",
//     birthDate: "1978-01-12",
//     email: "m.koval@gmail.com",
//     fullName: "Марія Коваль11",
//     gender: "female",
//     id: "p003",
//     notes: "Підвищений тиск",
//     phone: "+380674448899",
// }