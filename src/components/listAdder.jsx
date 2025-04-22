import { useState } from "react";

function ListAdder(e) {
  const [goals, setGoal] = useState([]);
  const [newGoal, addNewGoal] = useState("");

  function addToList(e) {
    e.preventDefault();
    if (newGoal.trim() === "") return;

    const updatedGoals = [...goals, newGoal];
    setGoal(updatedGoals);
    addNewGoal("");
    alert("New list:\n" + updatedGoals.join("\n"));

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
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Hello, list adder</h2>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <input
              type="text"
              value={newGoal}
              onChange={(e) => addNewGoal(e.target.value)}
            />
            <button type="button" onClick={addToList}>
              Add to list
            </button>
          </div>
        </div>

        
          {goals.map((goal, index) => (
            <div className="row" key={index}>
              <div className="col">{goal}</div>
            </div>
          ))}
          
      </div>
    </>
  );
}

export default ListAdder;
