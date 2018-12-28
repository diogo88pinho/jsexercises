/// <reference path="../typings/index.d.ts" />
$(function () {

    $("form").on("submit", function (e) {
        e.preventDefault();
        getGif();
    });
    $("#remove").on("click",function() {
        $("#gif-area").empty();
    });
});
function getGif() {
    let url = 'http://api.giphy.com/v1/gifs/search';
    let name = $("#search").val();

    var data = {
        q: name,
        api_key: 'dc6zaTOxFJmzC'
    };

    $.getJSON({
        url: url,
        data: data,
        success: function (response) {
            var $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
            var $newGif = $("<img>", {
                src: response.data[Math.floor(Math.random() * response.data.length)].images.original.url,
                style:'width:33%'
            });
            $newCol.append($newGif);
            $("#gif-area").append($newGif);
        },
        error: function () {
            alert('Errorr');
        }
    });
}