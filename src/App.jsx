import './App.css'
import { MyActivities } from './MyActivities';
import { useState, useEffect } from 'react';
import { addActivity, getAllActivities, editActivity, deleteActivity } from './FetchActivities';

function App() {
  const [myActivity, setActivity] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [activityId, setActivityId] = useState("");

  useEffect(() => {
    getAllActivities(setActivity);
  }, []);

  const updatingInInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setActivityId(_id);
  }

  return(
    <div>
      <h1>What are your plans for today?</h1>
      <input
      type='text'
      placeholder='What would you like to do?'
      value={ title }
      onChange={(e) => setTitle(e.target.value)}
      />
      <button
        disabled = { !title }
        onClick={
        editing ? () => editActivity(activityId, title, setTitle, setActivity, setEditing) : 
        () => addActivity(title, setTitle, setActivity)}>
        {editing ? "Edit" : "Add"}
      </button>
      {myActivity.map((activity) => <MyActivities text={activity.title} key={activity._id} updatingInInput={() => updatingInInput(activity._id, activity.title)} deleteActivity={() => deleteActivity(activity._id, setActivity)}/>)}
    </div>
  )
  }

export default App
