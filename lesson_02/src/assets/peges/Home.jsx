import { Link } from "react-router-dom";
import tasks from '../data/tasks'

function Home() {

    return (
        <section className="homework">
            <div className="homework__container">
                <ul className="homework__list">
                    {tasks.map(task => (
                        <li className="homework__item item" key={task.id}>
                            <div className="item__body">
                                <span className="item__label">Task: {task.id}</span>
                                <p>{task.title}</p>
                                {task.subtasks && task.subtasks.length > 0 ? (
                                    <ol>
                                        {task.subtasks.map(st => (
                                            <li key={st.id}>{st.text}</li>
                                        ))}
                                    </ol>
                                ) : (
                                    ''
                                )}
                                <Link className="item__link" to={`/task/${task.id}`}>Рішення</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Home;