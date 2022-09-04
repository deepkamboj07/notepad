import Wraper from "./Wraper";
import NotesCard from "./NotesCard";
import AddButton from "../addNotes/AddButton";
const Notes=(props)=>{
    const data=props.notes;
    const deleteItemID=(id)=>{
        props.onDeleteItem(id);
    }
    const result=data.map((d,index)=><NotesCard key={index} deleteItem={deleteItemID} id={index} title={d.tittle} detail={d.detail}></NotesCard>);
    return(
        <Wraper>
            <AddButton takeInput={props.disClick}/>
            {result}
        </Wraper>

    );
}
export default Notes;