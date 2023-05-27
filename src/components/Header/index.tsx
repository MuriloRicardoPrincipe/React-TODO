import logo from '../../assets/rocket.svg'
import Style from './styles.module.css'

export function Header(){
    return(
        <header className={Style.header}>
            <img src={logo} className={Style.logo}/> 
            <h1 className={Style.to}>to</h1>
            <h1 className={Style.do}>do</h1>
        </header>
    )
}