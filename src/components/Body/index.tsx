import { PlusCircle } from "@phosphor-icons/react";
import Style from './styles.module.css'
import { TaskConclude } from "./components/Conclude";
import { Task } from "./components/Task";
import { ChangeEvent, FormEvent, useState } from "react";


export function Body(){

    const [task, setTask] = useState('');
    const [listTask, setListTask] = useState<string[]>([]);
    const [listTaskConclude, setListTaskConclude] = useState<string[]>([]);

    function TaskTodoNow(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setTask(event.target.value);
    }

    function handleAddTask(event:FormEvent){
        event.preventDefault();
        setListTask([...listTask, task ])
        setTask('')
    }
    
      function handleDeleteTask(task:string){
        setListTask(prevState => prevState.filter( taskName => taskName !== task))
        setListTaskConclude(prevState => prevState.filter( taskName => taskName !== task))
      }
    
      function handleTaskToggle(index: number) {
        const newTasks = [...listTask];
        const task = newTasks[index];
        newTasks.splice(index, 1);
        setListTask(newTasks);
        setListTaskConclude(prevState => [...prevState, task]);
      }
   
    return(
        <div className={Style.conteiner}>
            <div>
                <form onSubmit={handleAddTask} className={Style.form}>
                    <textarea  
                        placeholder="Adicione uma nova tarefa" 
                        className={Style.input}
                        value={task}
                        onChange={TaskTodoNow}
                    />
                    <button className={Style.button}onClick={handleAddTask}>
                        Criar
                        <PlusCircle size={24} />
                    </button>
                </form>
            </div>
            <div className={Style.conteinerMain}>
                <div className={Style.conteinerContTask}>
                    <div className={Style.conteinerContTaskCreated}>
                        <h1 className={Style.TaskCreated}>Tarefas criadas</h1>
                        <span className={Style.ContTask}>{listTask.length}</span>
                    </div>
                    <div className={Style.conteinerContTaskCreated}>
                        <h1 className={Style.TaskConclud}>Concluídas</h1>
                        <span className={Style.ContTask}>{`${listTask.length} de ${listTaskConclude.length}`}</span>
                    </div>
                </div>
            </div>
            {listTask.map((task, index) =>{
                return(
                    <Task 
                    onConclude={() => handleTaskToggle(index)}
                    task={task}
                    onRemove={() => handleDeleteTask(task)}/>
                )
            })}
            {listTaskConclude.map((task, indexs) =>{
                return(
                    <TaskConclude 
                    onConclude={() => handleDeleteTask(task)}
                    task={task}
                    onRemove={() => handleDeleteTask(task)}/>
                )
            })}
        </div>
    )
}