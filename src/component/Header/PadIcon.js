import Classes from './Header.module.css';
import Icn from '/Mini Project/notepad-app/notepad/src/assets/icon.png';
const PadIcon=()=>{
    return(
        <div className={Classes.icon}>
            <img src={Icn} alt="notepad" />
        </div>
    )
}
export default PadIcon;