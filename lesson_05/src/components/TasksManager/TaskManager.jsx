import { useState } from 'react'
import AssignmentForm from './AssignmentForm/AssignmentForm'
import AssignmentSection from './AssignmentsSection/AssignmentSection'

function TaskManager({ usersList, tasksList }) {
  const [assignments, setAssignments] = useState(() => ({}))

  function getAssignmentsObject(userId, usersTasksIds) {
    const user = usersList.find((item) => item.id == userId)
    const userTasksList = usersTasksIds.map((taskId) =>
      tasksList.find((item) => item.id === taskId)
    )
    return {
      userId: user.id,
      userName: user.name,
      tasksList: userTasksList,
    }
  }

  function getAssignmentsList() {
    return Object.keys(assignments).map((userId) =>
      getAssignmentsObject(userId, assignments[userId])
    )
  }

  const assignmentsList = getAssignmentsList()

  function onTaskAssigned(taskId, newUserId) {
    setAssignments(prev => ({
      ...Object.fromEntries(
        Object.entries(prev).map(([userId, tasks]) => [
          userId,
          tasks.includes(taskId) ? tasks.filter(id => id !== taskId) : tasks
        ])
      ),
      [newUserId]: [...((prev[newUserId] || []).filter(id => id !== taskId)), taskId]
    }))
  }

  function onUserTaskDelete(userId, taskId) {
    setAssignments((prevAssignments) => {
      const updated = {
        ...prevAssignments,
        [userId]: prevAssignments[userId].filter((id) => id !== taskId),
      }
      if (updated[userId].length === 0) delete updated[userId]

      return updated
    })
  }

  return (
    <div className='tasks__manager'>
      <h2>Менеджер задач</h2>
      <AssignmentForm
        tasksList={tasksList}
        usersList={usersList}
        assignments={assignments}
        onTaskAssigned={onTaskAssigned}
      />
      <AssignmentSection
        assignmentsList={assignmentsList}
        onUserTaskDelete={onUserTaskDelete}
      />
    </div>
  )
}

export default TaskManager
