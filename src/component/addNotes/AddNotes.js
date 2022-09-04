import { useCallback } from "react";
import Classes from "./AddNotes.module.css";
import Modal from "../UI/modal";
import AddNotesForm from "./AddNotesForm";
const AddNotes=(props)=>{
    const onAddData=useCallback((data)=>{
            props.onSub(data);
    },[props])
    return(
        <Modal onhide={props.close}>
            <div className={Classes.addCont}>
                <AddNotesForm onAdd={onAddData}/>
                {/* <button onClick={props.close}>close</button> */}
            </div>
        </Modal>
    )
}
export default AddNotes;