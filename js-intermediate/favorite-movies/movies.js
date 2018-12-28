/// <reference path="../typings/index.d.ts" />
$(function () {

    $("#addMovie").on("click", function () {
        if ($("[name='title']").val().length > 0 && $("[name='rating']").val()) {
            addMovie();
        }
    });
});

function addMovie() {
    let title = $("[name='title']").val();
    let rating = $("[name='rating']").val();

    let $newLine = $("<tr>");
    let $title = $("<td>",{text: title,class:'text-center'});
    $newLine.append($title);
    let $rating = $("<td>",{text: rating,class:'text-center'});
    $newLine.append($rating);

    $del = $("<button>",{text: 'Delete',class:'text-center',style:"width:100px"});
    $del.on('click',function() {
        $newLine.remove();
    });
    $newLine.append($del);

    $("#moviesTable").append($newLine);
}