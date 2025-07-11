import {AiFillEdit, AiFillDelete} from "react-icons/ai";

export const MyActivities = ({text, editMyText, updatingInInput, deleteActivity}) => {
  return (
    <div>
      <p>{text}</p>
      <AiFillEdit onClick={updatingInInput}></AiFillEdit>
      <AiFillDelete onClick={deleteActivity}></AiFillDelete>
    </div>
  )
}