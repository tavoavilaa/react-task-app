import "./VisibilityControl.css";

const VisibilityControl = ({setShowCompleted, cleanTasks, isChecked}) => {

  const handleDelete = () => {

    if (window.confirm('Are you sure yo want to delete it?')) {
        cleanTasks()
        setShowCompleted(false)
    }
        
    }

  return (
    <div className="show-task-done">
        


        <label class="switch">
        <input 
                id='switch'
                className="container_toggle"
                type="checkbox" 
                onChange={ e => setShowCompleted(e.target.checked)} 
                checked={isChecked}
                />
          <span class="slider round"></span>
        </label>

        
        <label className="task-done" htmlFor='switch'>Show Tasks Done</label>

        <button className="clear-btn" onClick={handleDelete}>Clear</button>
    </div>
  )
}

export default VisibilityControl