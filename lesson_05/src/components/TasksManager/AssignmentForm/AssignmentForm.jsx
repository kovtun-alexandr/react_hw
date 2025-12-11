import TaskSelector from './TaskSelector'

function AssignmentForm({ usersList, tasksList, assignments, onTaskAssigned }) {
  return (
    <div className='tasks__block'>
      <h3>Розподілювач задач</h3>
      <div className='tasks__list'>
        {tasksList?.length > 0 ? (
          tasksList.map((task) => (
            <TaskSelector
              key={task.id}
              task={task}
              assignments={assignments}
              usersList={usersList}
              onTaskAssigned={onTaskAssigned}
            />
          ))
        ) : (
          <p>Список задач порожній</p>
        )}
      </div>
    </div>
  )
}

export default AssignmentForm
