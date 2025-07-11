import axios from "axios";

const getAllActivities = (setActivity) => {
  axios.get("https://to-do-list-backend-ovuj.onrender.com")
  .then(({data}) => {console.log(data)
    setActivity(data)
  })
}

const addActivity = (title, setTitle, setActivity) => {
  axios.post('https://to-do-list-backend-ovuj.onrender.com/saveActivities', {title})
  .then((data) => {
    console.log(data);
    setTitle("");
    getAllActivities(setActivity)
  })
}

const editActivity = (activityId, title, setTitle, setActivity, setEditing) => {
  axios.post('https://to-do-list-backend-ovuj.onrender.com/editActivity', {_id: activityId, title}).
  then((data) => {
    console.log(data);
    setTitle("");
    setEditing(false);
    getAllActivities(setActivity)
  })
}

const deleteActivity = (_id, setActivity) => {
  axios.post('https://to-do-list-backend-ovuj.onrender.com/deleteActivity', {_id})
  .then((data) => {
    console.log(data)
    getAllActivities(setActivity)
  })
}


export {getAllActivities, addActivity, editActivity, deleteActivity};