//Check off task by clicking

$("ul").on("click", "li", function(){
    //cant check with 'gray' so we use rgb($$%)
    $(this).toggleClass("completed");
});

// delete by clicking on X
// click only existing elements , on is for all future elements
$("ul").on("click", "span", function(event){
    //.parent() gives the parent li and removes the entire tag, fadeout inner function allows the
    //tag to be removed from the html page
    $(this).parent().fadeOut(200,function(){
        $(this).remove();
    });
    //stop propagation method stops the parent methods from executing, this stopped the gray out and line through of li
    event.stopPropagation();


});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var inputText=$(this).val();
        $(this).val("");
        //append() adding to the ul in the page
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> "+inputText+"</li>");
    }

});

$(".fa-pencil").on("click",function(){
    $("input[type='text']").fadeToggle();
});