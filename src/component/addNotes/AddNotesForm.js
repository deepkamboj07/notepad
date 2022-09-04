import { useState , useCallback} from "react";
import Classes from "./AddNotes.module.css";
const AddNotesForm=(props)=>{

    const[tittle,setTittle]=useState("");
    const[detail,setDetail]=useState("");
    const[error,setError]=useState(false);

    const formHandler=useCallback((event)=>{   
            event.preventDefault();

            if(tittle.trim().length===0 || detail.trim().length===0){
                setError(true);
                return;
            }
            const data={
              tittle:tittle,
              detail:detail
            }
            props.onAdd(data);
            setTittle("");
            setDetail("");
    },[tittle,detail,props])

    const tiitleHandler=(event)=>{
        setTittle(event.target.value);
        setError(false);
    }
    const detailHandler=(event)=>{
        setDetail(event.target.value);
        setError(false);
    }
    return(
        <form className={Classes.form} onSubmit={formHandler}>    
            <div className={Classes.input}>
                <div>
                    Tittle : <br/>
                    <input className="form-control" type="text" onChange={tiitleHandler} value={tittle}/> <br/>
                </div>
                <div>
                    Detail : <br/>
                    <textarea className="form-control"  rows="5" cols="50" onChange={detailHandler} value={detail}/><br/>
                </div>
            </div>
            <div className={Classes.button}>
                <button className="btn btn-warning" type="submit">Add Note</button>
                {error && <p className={Classes.error}>Please Write Something</p>}
            </div>
        </form>
    )
}
export default AddNotesForm;