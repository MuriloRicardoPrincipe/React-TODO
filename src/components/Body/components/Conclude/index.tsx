import cheked from "../../../../assets/unchecked.svg";
import trash from "../../../../assets/trash.svg";
import Style from './styles.module.css'


type taskProps= {
    task:string;
    onRemove:() => void;
    onConclude: () => void;
}

export function TaskConclude({onConclude, task, onRemove}:taskProps){
    return(
        <div className={Style.container}>
            <button className={Style.onButtonChecked} onClick={() =>onConclude()}>
                <img src={cheked} alt="" className={Style.svgChecked}/>
            </button>
            <h1 className={Style.task}>
                {task}
            </h1>
            <button className={Style.onButtontrask} onClick={() => onRemove()}>
                <img src={trash} alt="" className={Style.svgTrask}/>
            </button>
        </div>
    )
}