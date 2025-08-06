import { useState } from "react";


function Components(){

    const[tasks, settasks]=useState(["eat breakfast","shower","study"]);
    const[newtask, setnewtask]=useState("");

    function handleinputchange(event){
        setnewtask(event.target.value)
    }
    function addtask(){
        if(newtask.trim()!==""){
        settasks(t=>[...t,newtask])
        setnewtask("")}
    }
    function removetask(index){
        const updatedtask=tasks.filter((_,i)=>i!==index);
        settasks(updatedtask);
    }
    function movetaskup(index){
        if(index>0){
            const updatedtask=[...tasks];
            [updatedtask[index], updatedtask[index-1]]=[updatedtask[index-1],updatedtask[index]];
            settasks(updatedtask);
        }

    }
    function movetaskdown(index){
        if(index<tasks.length-1){
    const updatedtask=[...tasks];
    [updatedtask[index], updatedtask[index+1]]=[updatedtask[index+1],updatedtask[index]];
    settasks(updatedtask);
}
    }
    
    return(
        <div className="to-do-list">
            <h2>To-Do-List</h2>
            <div>
                <input type="text" value={newtask} onChange={handleinputchange} placeholder="enter a task"/>
                <button className="add-task" onClick={addtask}>Add task</button>
            </div>
            <ol>
                {tasks.map((task,index)=><li key={index}>
                                            <span className="text">{task}</span>
                <button className="delete-btn" onClick={()=>removetask(index)}>Delete</button>
                <button className="moveup-btn" onClick={()=>movetaskup(index)}>Move-up</button>
                <button className="movedown-btn" onClick={()=>movetaskdown(index)}>Move-down</button>
                </li>
            )}
            </ol>
        </div>
    );
}
export default Components