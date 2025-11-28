import { useParams } from "react-router-dom";
import tasks from "../data/tasks";

function Task() {
    const { id } = useParams()
    const task = tasks.find(task => task.id === Number(id))

    if (!task) return <h2>Not found</h2>;

    const Component = task.component

    return (
        <section className="task">
            <div className="task__container">
                <Component />
            </div>
        </section>
    );
}

export default Task;