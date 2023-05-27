import cheked from "../../../../assets/checked.svg";
import trash from "../../../../assets/trash.svg";
import Style from './styles.module.css'


type TaskConcludeProps= {
    task:string;
    onRemove:() => void;
    onConclude: ()  => void;
}

export function Task({task, onConclude, onRemove}:TaskConcludeProps){
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