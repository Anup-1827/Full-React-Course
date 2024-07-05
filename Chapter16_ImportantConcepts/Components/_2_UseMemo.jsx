import React, { useMemo, useState } from 'react'

const allTods = createTodo();

function UseMemo() {
    const [tab, setTab] = useState("all") // all, acitve, completed
    const [isDark, setIsDark] = useState(false)

    const visibleTodos = useMemo(()=>filterToDos(tab, allTods), [tab, allTods]) 
  
    return (
       <div>
        <input
            id="checkbox"
            type='checkbox'
            onClick={()=>setIsDark(prev=>!prev)}
        />
        <label htmlFor='checkbox'>Dark</label>
        <div>
            <button onClick={()=>setTab("all")}>All</button> 
            <button onClick={()=>setTab("active")}>Active</button> 
            <button onClick={()=>setTab("completed")}>Completed</button> 
        </div>

        <div style={{color: isDark?"white": "black", background: isDark?"black":"white"}}>
            {
                visibleTodos.map(todo=>{
                    return(
                        <div key={todo.id}>
                            {
                                todo.completed ?
                                <s>{todo.text}</s>
                                :
                                todo.text
                            }
                        </div>                    
                    )
                })
            }
        </div>

       </div>
  )
}

// Step 1
function createTodo(){
        const todos = []

        for(let i=0; i<50; i++){
            todos.push({
                id: i,
                text: "Todos :- " + i,
                completed: Math.random() > 0.5
            })
        }

        return todos

}

function filterToDos(tab, todos){
    console.log("Rendering Todos");
    // Slowing Down the application
    const time = new Date()
    while(new Date() - time <2000){

    }

    return todos.filter((todo)=>{
        if(tab === "active"){
            return !todo.completed
        }
        else if(tab === "completed"){
            return todo.completed
        }
        else{
            return todo
        }
    })
}

export default UseMemo