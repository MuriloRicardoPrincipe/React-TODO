import Style from './styles.module.css'

type props={
    task:string
}

export function InputTask({task}:props){
    return(
        <textarea  
            placeholder="Adicione uma nova tarefa" 
            className={Style.input}
            value={task}
        />
    )
}