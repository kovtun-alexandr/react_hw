import AssignmentItem from './AssignmentItem'

function AssignmentCard({ userId, userName, tasksList, onUserTaskDelete }) {
  function onTaskDelete(taskId) {
    onUserTaskDelete(userId, taskId)
  }
  return (
    <>
      {tasksList?.length > 0 ? (
        <div className='appointments__card'>
          <h4>Виконавец: <span>{userName}</span></h4>
          {
            tasksList.map((task) => (
              <AssignmentItem key={task.id} {...task} onTaskDelete={onTaskDelete} />
            ))

          }
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default AssignmentCard
