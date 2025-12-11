import styles from './TaskSelector.module.css'

function TaskSelector({ task, usersList, assignments, onTaskAssigned }) {
  const assignedUserId = Number(
    Object.entries(assignments).find(([userId, tasks]) =>
      tasks.includes(task.id)
    )?.[0] || 0
  )
  function selectUser(e) {
    const value = Number(e.target.value)
    onTaskAssigned(task.id, value)
  }
  return (
    <div className={styles.taskItem}>
      <div>{task.title}</div>
      <select
        value={assignedUserId}
        onChange={selectUser}
      >
        <option value="0" disabled>Виберіть користувача</option>
        {usersList.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TaskSelector
