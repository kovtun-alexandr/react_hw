import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton/EditButton";
import frontRoutes from "@/router/frontRoutes";

function DoctorsItem({ doctor, index, onDelete }) {
    const handleDelete = (doctorId) => {
        onDelete(doctorId)
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>✚ {doctor.fullName}</td>
            <td>
                {doctor.specialty}
            </td>
            <td>{doctor.notes}</td>
            <td>{doctor.room}</td>
            <td>{doctor.phone}</td>
            {/* <td>{doctor.email}</td> */}
            <td>
                <EditButton
                    title="Редагувати"
                    path={frontRoutes.navigate.doctors.edit(doctor.id)}
                />
                <DeleteButton
                    title="Видалити"
                    onClick={() => handleDelete(doctor.id)}
                />

            </td>
        </tr>
    );
}

export default DoctorsItem;