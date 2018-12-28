/// <reference path="typings/index.d.ts" />
$(document).ready(function () {

    console.log("Ready");
    $("article img").addClass("image-center");

    let $lastParagraph;
    for ($lastParagraph of $("p")) { }
    $lastParagraph.remove();

    $("h1#title").attr("style", "font-size: " + Math.random() * 100 + "px");
    $("aside > ol").append($("<li>", { text: "Another paragraph" }));

    $("aside").empty().append($("<p>", { text: "Sorry I exist" }));

    $("div > input").on('keyup blur change', function() {
        $("body").attr("style", "background-color:rgb("
        + $("div:contains('Red') > input").val() + ","
        + $("div:contains('Green') > input").val() + "," 
        + $("div:contains('Blue') > input").val() + ")");
    });

    $("img").on('click',function() {
        $(this).remove();
    });
});