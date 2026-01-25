import { useGetPatientByIdQuery } from "@/api/slices/patientApi";
import Loading from "@/components/Loading/Loading";
import { Link, useParams } from "react-router";
import styles from './PatientsCard.module.css'

function PatientsCard() {
    const { id } = useParams()
    const { data: patient, error, isLoading } = useGetPatientByIdQuery(id)

    if (!patient) return null

    const date = new Date(patient.birthDate)

    const optionsDate = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }
    const readableDate = date.toLocaleString('uk-UA', optionsDate);

    const genderView = patient.gender === 'female' ? 'Жінка' : 'Чоловік'
    console.log(patient)
    return (
        <section className={styles.patient}>
            {error ? (<Error error={error} />) : isLoading ? (<Loading />) : (
                <>
                    <h1>Пацієнт: <span>{patient.fullName}</span></h1>
                    <div className={styles.body}>
                        <div className={styles.birthday}>
                            <h2>Дата народження:</h2>
                            <div>
                                <span>{readableDate}</span>
                            </div>
                        </div>
                        <div className={styles.gender}>
                            <h2>Стать:</h2>
                            <div>
                                <span>{genderView}</span>
                            </div>
                        </div>
                        {!!patient.notes &&
                            <div className={styles.notes}>
                                <h2>Вади пацієнта,захворювання :</h2>
                                <p>{patient.notes}</p>
                            </div>
                        }
                        <div className={styles.contacts}>
                            <h2>Контактні данні:</h2>
                            <div>
                                <div className={styles.phone}>
                                    <span>Телефон: </span>
                                    <Link
                                        target="_blank"
                                        to={`tel:${patient.phone}`}
                                    >
                                        {patient.phone}
                                    </Link>
                                </div>
                                <div className={styles.email}>
                                    <span>Електронна пошта: </span>
                                    <Link
                                        target="_blank"
                                        to={`mailto:${patient.email}`}
                                    >
                                        {patient.email}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.adress}>
                            <h2>Адресса: </h2>
                            <p>{patient.address}</p>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}

export default PatientsCard;