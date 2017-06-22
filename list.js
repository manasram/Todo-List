var todo=["buy new car"];
var input = prompt("What would you like to do?");

while(input!=="quit")
{
    if (input==="list")
    {
        listTask();

    }else if(input ==="new")
    {
        addNew();

    }else if(input =="delete"){
            deleteTask();
    }

    input = prompt("What would you like to do?");


}
console.log("You quit!!")

function listTask(){
    console.log("**************");
        todo.forEach(function(todo, index){ //todo is just a place holder for this function

            console.log(index+": "+ todo);

        });
        console.log("**************");
    }

function addNew(){
    var  newTodo=prompt("Enter new todo");
        todo.push(newTodo);
        console.log("New task added");
}

function deleteTask(){
    var index =prompt("Enter index of the task");

        todo.splice(index,1);
        console.log("Task "+index+" deleted");
}
