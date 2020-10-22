window.onload = ()=> {
    document.getElementById("add_btn").addEventListener("click", (e)=>{
        
        // select form inputs
        var todo = document.getElementById("todo-text");
        var date = document.getElementById("date");
        var time = document.getElementById("time");
       
        var todos = document.getElementById("todos");

        console.log(todo.value);
        console.log(date.value);
        console.log(time.value);
        
        if((todo.value.length > 0) && (date.value.length > 0) && (time.value.length > 0)) {
            // create todo 'li', set class, add todo text to element
        var liNode = document.createElement("li");
        liNode.setAttribute("class", "todo");

        // Add todo text
        var pNode = document.createElement("p");
        var textNode = document.createTextNode(todo.value);

        pNode.appendChild(textNode);
        liNode.appendChild(pNode);
        
        // Add date
        var dateNode = document.createElement("p");
        var dateText = document.createTextNode(date.value);

        dateNode.appendChild(dateText);
        liNode.appendChild(dateNode);
        
        // Add time
        var timeNode = document.createElement("p");
        var timeText = document.createTextNode(time.value);

        timeNode.appendChild(timeText);
        liNode.appendChild(timeNode);

        // add delete button to li
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener('click', e => {
            e.target.parentElement.remove()
        })
        liNode.appendChild(deleteButton);
        
        // add the todo element to the container
        todos.appendChild(liNode);

        // reset iputs
        todo.value = '';
        date.value = '';
        time.value = '';
        }
        
        
    })
}