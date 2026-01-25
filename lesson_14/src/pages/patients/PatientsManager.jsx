import { useDeletePatientMutation, useGetPatientsQuery } from "@/api/slices/patientApi";
import PatientsList from "./PatientsList";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import frontRoutes from "@/router/frontRoutes";
import useForm from "@/hooks/useForm";
import useDebounce from "@/hooks/useDebounce";
import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";

function PatientsManager() {
    const { value, handleChange, setValue } = useForm({
        filterType: 'name',
        name: ''
    })

    const debounceSearch = useDebounce(value.name, 500)

    const { data: patients, error, isLoading } = useGetPatientsQuery(debounceSearch)
    const [deletePatient] = useDeletePatientMutation()

    const handlePatientDelete = async (id) => {
        try {
            await deletePatient(id).unwrap()
        } catch (error) {
            console.error('Помилка видалення', error)
        }
    }
    return (<section className="patients">
        <h1>Пацієнти</h1>
        <FilterBlock
            filterType={value.filterType}
            searchInputLabel="Пошук за ПІБ:"
            searchName="name"
            searchValue={value.name}
            searchPlaceholder="Введіть І`мя пацієнта"
            onChange={handleChange}
            path={frontRoutes.navigate.patients.add}
            linkLabel="Додати пацієнта"
        />
        {error
            ? (<Error error={error} />)
            : isLoading
                ? (<Loading />)
                : (
                    <PatientsList
                        patients={patients}
                        onDelete={handlePatientDelete}
                    />
                )}
    </section>);
}

export default PatientsManager;