document.addEventListener("DOMContentLoaded", function () {

    let button = document.getElementById("submit");
    let input = document.getElementById("todoInput");
    let list = document.getElementById("list");
    let inputText = null;
    var todoCount = 0;

    for (let i = 0; i < localStorage.length; i++) {
        oldTodo = localStorage.getItem("todo" + i);
        if(oldTodo) submit(oldTodo);
    }

    button.addEventListener("click", function () {
        submit();
    });

    function submit() {

        if (arguments.length == 1) {
            inputText = arguments[0];
        } else if (input.value) {
            inputText = input.value;
        } else return;
        let newTodo = document.createElement("li");
        newTodo.setAttribute("class", "todo");
        newTodo.setAttribute("id", "todo" + todoCount);

        newCheck = document.createElement("input");
        newCheck.setAttribute("type", "checkbox");
        newCheck.setAttribute("id", "check" + todoCount);

        list.appendChild(newTodo);
        let label = document.createElement("label");
        label.setAttribute("for", newCheck.getAttribute("id"));
        newTodo.appendChild(newCheck);
        newTodo.appendChild(label);
        newCheck.style.display = 'none';
        label.innerText = inputText;
        label.style.fontSize = 20 + "px";

        let del = document.createElement("button");
        del.append("X");
        newTodo.appendChild(del);

        newCheck.addEventListener("change", function () {
            if (this.checked) {
                newTodo.setAttribute("style", "text-decoration:line-through");
            } else {
                newTodo.removeAttribute("style");
            }
        });

        del.addEventListener("click", function () {
            localStorage.removeItem(newTodo.getAttribute("id"));
            list.removeChild(newTodo);
        });

        if (localStorage.getItem(newTodo.getAttribute("id"))==null) {
            localStorage.setItem(newTodo.getAttribute("id"), inputText);
        }

        todoCount++;
    }

    input.addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            button.click();
            input.value = "";
        }
    });

});