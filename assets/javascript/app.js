$(document).ready(function () {

    var topics = ["cats", "hotdogs", "dogs", "bananas"];
    var gifs;

    function displayGifs() {
        $("#themes-view").empty();
        var theme = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=nCwoop3mIMx3QrpKYzYtYjHlWiFDYgmJ&q=" + theme + "&limit=10&offset=0&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var wrap = $("<div>").addClass("gif-wrap col-md-4");
                var rating = $("<p>").text(response.data[i].rating).addClass("rating-value");
                var gif = $("<img>").attr("src", response.data[i].images.fixed_height.url);
                // gif.attr("alt", term + " img");
                gif.addClass("gif-img");
                wrap.append(gif, rating);
                $("#themes-view").append(wrap);
            }
        });
    }

    function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("theme-btn");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $("#buttons-view").append(a);
        }
    }

    $("#add-theme").on("click", function (event) {
        event.preventDefault();
        var theme = $("#theme-input").val().trim();
        topics.push(theme);
        renderButtons();
    });

    $(document).on("click", ".theme-btn", displayGifs);
    renderButtons();
    displayGifs();
});