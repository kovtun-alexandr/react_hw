import AssignmentCard from './AssignmentCard'

function AssignmentSection({ assignmentsList, onUserTaskDelete }) {
  return (
    <>
      {assignmentsList?.length > 0 ? (
        <div className='appointments__block'>
          <h3>Список призначень</h3>
          <div className='appointments__list'>
            {assignmentsList.map((userAssignments, index) => (
              <AssignmentCard
                key={index}
                {...userAssignments}
                onUserTaskDelete={onUserTaskDelete}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default AssignmentSection
