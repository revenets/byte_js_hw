const makeToDoList = () => {
    const taskList = {};
    let taskTime;
    let taskText;

    while (true) {
        taskTime = prompt("Enter the time");
        taskText = prompt("Enter the task");
        
        if (taskTime === null || taskText === null) {
            break;
        } else if (taskTime === "" || taskText === "") {
            continue;
        }

        taskList[`${taskTime}`] = taskText;
    } 

    return taskList;
}

console.log(makeToDoList());