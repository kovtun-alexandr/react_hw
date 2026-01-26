import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton/EditButton";
import StatusLabel from "@/components/StatusLabel/StatusLabel";
import TimeDisplayView from "@/components/TimeDisplayView/TimeDisplayView";
import frontRoutes from "@/router/frontRoutes";

function AppointmentsItem({ appointment, index, onDelete }) {
    const patient = appointment.patient?.fullName ?? appointment.patientId
    const doctor = appointment.doctor?.fullName ?? appointment.doctorId

    const handleDelete = (appointmentId) => {
        onDelete(appointmentId)
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{patient}</td>
            <td>{doctor}</td>
            <td>
                <TimeDisplayView
                    dateStr={appointment.date}
                />
            </td>
            <td>{appointment.reason}</td>
            <td>
                <StatusLabel
                    statusId={appointment.status}
                />
            </td>
            <td>
                <EditButton
                    title="Редагувати"
                    path={frontRoutes.navigate.appointments.edit(appointment.id)}
                />
                <DeleteButton
                    title="Видалити"
                    onClick={() => handleDelete(appointment.id)}
                />

            </td>
        </tr>
    );
}

export default AppointmentsItem;