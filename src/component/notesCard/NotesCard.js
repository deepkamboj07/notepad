import Classes from "./Notes.module.css";
import Pin from "/Mini Project/notepad-app/notepad/src/assets/pin.png";

const NotesCard=(props)=>{

    const pointPageId=()=>{
        props.deleteItem(props.id)
    }
    const clas=Classes["Notes-Cover"]+" container";
    const summry=props.detail.substring(0,270);
    return(
        <div className={clas}>
            <div><img className={Classes.pin} src={Pin} alt="pin" onClick={pointPageId}/></div>
            <div className={Classes.notesDetail}>
                <h3>{props.title}</h3>
                <div className={Classes.line}></div>
                <p>{summry}....</p>
            </div>
        </div>
    )
}
export default NotesCard;