import { useDeleteDoctorMutation, useGetDoctorsQuery } from "@/api/slices/doctirApi";
import DoctorsList from "./DoctorsList";
import FilterBlock from "@/components/FilterBlock/FilterBlock";
import frontRoutes from "@/router/frontRoutes";
import Error from "@/components/Error/Error";
import Loading from "@/components/Loading/Loading";

function DoctorsManager() {
    const { data: doctors, error, isLoading } = useGetDoctorsQuery()
    const [deleteDoctor] = useDeleteDoctorMutation()

    const handleDoctorDelete = async (id) => {
        try {
            await deleteDoctor(id).unwrap()
            console.log('Лікаря видалено')
        } catch (err) {
            console.error('Помилка видалення', err)
        }
    }
    return (<section className="doctors">
        <h1>Лікарі</h1>
        <FilterBlock
            path={frontRoutes.navigate.doctors.add}
            linkLabel="✚ Додати лікаря"
        />
        {error
            ? (<Error error={error} />)
            : isLoading
                ? (<Loading />)
                : (
                    <DoctorsList
                        doctors={doctors}
                        onDelete={handleDoctorDelete}
                    />
                )}
    </section>);
}

export default DoctorsManager;