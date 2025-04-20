import { useState } from 'react';


function ListAdder(e) {
    const [goals, setGoal] = useState([]);
    const [newGoal, addNewGoal] = useState("");

    function addToList(e) {
       
        e.preventDefault();
        if (newGoal.trim() === "") return;

        const updatedGoals = [...goals, newGoal];
        setGoal(updatedGoals);
        addNewGoal("");
        alert("New list:\n" + updatedGoals.join('\n'));

       // setGoal([...goals, [newGoal]])
       // alert (JSON.stringify(goals))


        // if  (myList.length === 0) {
        //     myList = ["Hi"];
        //     alert(myList);
    
        // }
        // else {
            
        //     alert (myList.join(', ') + '\n' + "Hi")
        // }
    
    }


    return (
    <>
      <div>
        <h2>Hello, list adder</h2>
        <input 
            type="text" 
            value={newGoal} 
            onChange={e => addNewGoal(e.target.value)}
            />


        <button type="button" onClick={addToList}>
            Add to list
        </button>
        <ul>

            {goals.map((goal, index)=>  (
            <li key={index}>{goal}</li>
            ))}

            

        </ul>
        

      </div>
    </>
  );
}

export default ListAdder;

