import { useDeleteAppointmentMutation, useGetAppointmentsQuery } from "@/api/slices/appointmentApi";
import AppointmentsList from "./AppointmentsList";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import frontRoutes from "@/router/frontRoutes";
import useForm from "@/hooks/useForm";
import { appointmentFilteredList } from "@/constants/appointmentFilteredList";
import useDebounce from "@/hooks/useDebounce";
import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";

function AppointmentsManager() {
    const { value, handleChange, setValue } = useForm({
        filterType: 'name',
        name: '',
        date: '',
    })

    const debounceSearch = useDebounce(value, 500)

    const { data: appointments, error, isLoading } = useGetAppointmentsQuery(value)

    const [deleteAppointment] = useDeleteAppointmentMutation()

    const appointmentDelete = async (id) => {
        try {
            await deleteAppointment(id).unwrap()
        } catch (error) {
            console.error('Помилка видалення', error)
        }
    }

    const handleSelectOnChange = (e) => {
        const newFilterType = e.target.value
        setValue(prev => ({
            ...prev,
            filterType: newFilterType,
            name: newFilterType === 'name' ? prev.name : '',
            date: newFilterType === 'date' ? prev.date : '',
        }))
    }
    return (<section className="appointments">
        <h1>Призначення відвідування лікаря</h1>
        <FilterBlock
            filterType={value.filterType}
            selectList={appointmentFilteredList}
            search="true"
            searchName="name"
            searchValue={value.name}
            searchPlaceholder="Введіть І`мя пацієнта"
            dateName="date"
            dateValue={value.date}
            datePlaceholder="Виберіть дату"
            onChangeSelect={handleSelectOnChange}
            onChange={handleChange}
            path={frontRoutes.navigate.appointments.add}
            linkLabel="Додати призначення"
        />
        {error
            ? (<Error error={error} />)
            : isLoading
                ? (<Loading />)
                : (
                    <AppointmentsList
                        appointments={appointments}
                        onDelete={appointmentDelete}
                    />

                )}
    </section>);
}

export default AppointmentsManager;