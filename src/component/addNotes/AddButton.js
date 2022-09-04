import React from "react";
import Classes from "./AddNotes.module.css";

const AddButton=(props)=>{
    return(
            <div className={Classes.addButtonContainer}>
                <div className={Classes.pencil}>
                    <i className='bx bxs-pencil' onClick={props.takeInput}></i>
                </div>
            </div>
    )
}
export default AddButton;