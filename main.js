window.onload = ()=> {
    document.getElementById("add_btn").addEventListener("click", (e)=>{
        
        var todo = document.getElementById("todo-text").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;

        if(todo.lenth > 0) {
            var node = document.createElement("li");
            node.setAttribute("class", "todo");
            var textNode = document.createTextNode(todo);
            node.appendChild(textNode);
            var deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.addEventListener('click', e => {
                e.target.parentElement.remove()
            })
            node.appendChild(deleteButton);
        }

        // alert(todo);
    })
}