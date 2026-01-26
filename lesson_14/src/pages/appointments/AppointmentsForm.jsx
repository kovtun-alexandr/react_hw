import { useCreateAppointmentMutation, useGetAppointmentByIdQuery, usePutAppointmentByIdMutation } from "@/api/slices/appointmentApi";
import { useGetDoctorsQuery } from "@/api/slices/doctirApi";
import { useGetPatientsQuery } from "@/api/slices/patientApi";
import ActionForm from "@/components/ActionForm/ActionForm";
import CustomSelect from "@/components/CustomSelect/CustomSelect";
import InputField from "@/components/InputField/InputField";
import { appointmentStatuses } from "@/constants/appointmentStatuses";
import useForm from "@/hooks/useForm";
import frontRoutes from "@/router/frontRoutes";
import { useEffect } from "react";
import { data, useNavigate, useParams } from "react-router";
import { toDateTimeLocal, fromDateTimeLocal } from "@/utils/date";
import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";

function AppointmentsForm() {
    const { id } = useParams()
    const navigation = useNavigate()

    const { value, handleChange, setValue } = useForm({
        patientId: '',
        doctorId: '',
        date: '',
        reason: '',
        status: 'actove',
    })

    const { data: patients } = useGetPatientsQuery()
    const { data: doctors } = useGetDoctorsQuery()
    const { data: appointment, error, isLoading } = useGetAppointmentByIdQuery(id, { skip: !id })
    const [putAppointmentById] = usePutAppointmentByIdMutation()
    const [createAppointment] = useCreateAppointmentMutation()

    useEffect(() => {
        if (!appointment) return

        setValue(prev => ({
            ...prev,
            patientId: appointment.patientId ?? '',
            doctorId: appointment.doctorId ?? '',
            date: toDateTimeLocal(appointment.date) ?? '',
            reason: appointment.reason ?? '',
            status: appointment.status ?? 'active',
        }))
    }, [appointment, setValue])

    const handleChangeAppointment = async (e) => {
        e.preventDefault()
        const payload = {
            ...value,
            date: fromDateTimeLocal(value.date)
        }
        try {
            if (id) {
                await putAppointmentById({ id, data: payload }).unwrap()
            } else {
                await createAppointment({ ...payload }).unwrap()
            }
            navigation(frontRoutes.navigate.appointments.root)
        } catch (error) {
            console.error('Помилка при збереженні запису', error)
        }
    }
    return (<section className="appointments">
        {!!id
            ? <h1>Редагувати запис</h1>
            : <h1>Новий запис</h1>
        }
        {error ? (<Error error={error} />) : isLoading ? (<Loading />) : (
            <form
                className="form"
                onSubmit={handleChangeAppointment} action=""
            >
                <CustomSelect
                    label="Пацієнт:"
                    name="patientId"
                    value={value.patientId}
                    selectList={patients}
                    onChange={handleChange}
                />
                <CustomSelect
                    label="Лікар:"
                    name="doctorId"
                    value={value.doctorId}
                    selectList={doctors}
                    onChange={handleChange}
                />
                <InputField
                    label="Дата і час прийому:"
                    type="datetime-local"
                    name="date"
                    value={value.date}
                    placeholder="Виберіть дату народження пацієнта"
                    onChange={handleChange}
                />
                <InputField
                    label="Причина - Скарга:"
                    type="text"
                    name="reason"
                    value={value.reason}
                    placeholder="Введіть на що скаржиться пацієнт"
                    onChange={handleChange}
                />
                <CustomSelect
                    label="Статус:"
                    name="status"
                    value={value.status}
                    selectList={appointmentStatuses}
                    onChange={handleChange}
                />
                <ActionForm
                    path={frontRoutes.navigate.appointments.root}
                    id={id}
                />
            </form>
        )}
    </section>);
}

export default AppointmentsForm;