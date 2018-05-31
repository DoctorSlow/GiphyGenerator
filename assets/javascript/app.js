$(document).ready(function () {
    // $("#themes-view").clear();
    var topics = ["rock'n'roll", "reggae", "hip-hop", "heavy-metal", "jazz", "rnb", "techno"];
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
            a.addClass("theme-btn btn btn-light-green");
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
    // $("#themes-view").clear();
});


// ###
// Overview

// In this assignment, you 'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

//     ![GIPHY](Images / 1 - giphy.jpg)

// ### Before You Begin

// 1. ** Hit the GIPHY API ** .*Fool around with the GIPHY API.[Giphy API](https: //github.com/Giphy).
//         *
//         Be sure to read about these GIPHY parameters(hint, hint):
//         *
//         `q` *
//         `limit` *
//         `rating` *
//         Like many APIs, GIPHY requires developers to use a key to access their API data.To use the GIPHY API, you 'll need a GIPHY account (don'
//         t worry, it 's free!) and then obtain an API Key by [creating an app](https://developers.giphy.com/dashboard/?create=true). *
//         Make sure you
//         switch the protocol in the query URL from ** `http to https` ** , or the app may not work properly when deployed to Github Pages.

//         2. ** [Watch the demo video](homework_demo.mov) **

//         *
//         You should have a high - level understanding of how this assignment works before attempting to code it.

//         ###Instructions

//         1. Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you.Save it to a variable called `topics`.*We chose animals
//         for our theme, but you can make a list to your own liking.

//         2. Your app should take the topics in this array and create buttons in your HTML.*Try using a loop that appends a button
//         for each string in the array.

//         3. When the user clicks on a button, the page should grab 10 static, non - animated gif images from the GIPHY API and place them on the page.

//         4. When the user clicks one of the still GIPHY images, the gif should animate.If the user clicks the gif again, it should stop playing.

//         5. Under every gif, display its rating(PG, G, so on).*This data is provided by the GIPHY API.*Only once you get images displaying with button presses should you move on to the next step.

//         6. Add a form to your page takes the value from a user input box and adds it into your `topics`
//         array.Then make a
//         function call that takes each topic in the array remakes the buttons on the page.

//         7. Deploy your assignment to Github Pages.

//         8. ** Rejoice ** !You just made something really cool.

//         -
//         - -

//         ###Minimum Requirements

//         Attempt to complete homework assignment as described in instructions.If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

//         -
//         - -

//         ###Create a README.md

//         Add a `README.md`
//         to your repository describing the project.Here are some resources
//         for creating your `README.md`.Here are some resources to help you along the way:

//         *
//         [About READMEs](https: //help.github.com/articles/about-readmes/)

//             *
//             [Mastering Markdown](https: //guides.github.com/features/mastering-markdown/)

//                 - - -

//                 ###Add To Your Portfolio

//                 After completing the homework please add the piece to your portfolio.Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment.To receive an 'A'
//                 on any assignment, you must link to it from your portfolio.

//                 -
//                 - -

//                 ###One More Thing

//                 If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you!If you 're still having trouble, you can come to office hours for assistance from your instructor and TAs.

//                 **
//                 Good Luck! **