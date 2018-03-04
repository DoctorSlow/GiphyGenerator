  //event listener for button
  $("#giphy").on("click", function () {

      //giphy API URL for image searches
      var queryURL =
          "https://api.giphy.com/v1/gifs/random?api_key=nCwoop3mIMx3QrpKYzYtYjHlWiFDYgmJ&tag=cats&limit=10";

      //AJAX GET request via the queryURL
      $.ajax({
              url: queryURL,
              method: "GET"
          })
          //wait until AJAX request comes back
          .then(function (response) {

              //save the image_original_url property
              var imageURL = response.data.image_original_url;

              //create and store image tag
              var catImage = $("<img>");

              //set the catImage src and attribute to imageURL
              catImage.attr("src", imageURL);
              catImage.attr("alt", "cat image");

              //prepend catImage to the images div
              $("#images").prepend(catImage);
          });
  });