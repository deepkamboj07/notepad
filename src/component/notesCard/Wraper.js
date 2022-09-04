import Classes from "./Notes.module.css";
const Wraper=(props)=>{
    return(
        <div className={Classes.wraper}>
            {props.children}
        </div>
    )
}
export default Wraper;
