import Classes from './Header.module.css';
import PadIcon from './PadIcon';
const Header=()=>{
    return(
        <div className={Classes.headerr}>
            <div className={Classes.headcont}>
                 <PadIcon/>
                 <h2>NotePad</h2>
            </div>
        </div>
    )
}
export default Header;