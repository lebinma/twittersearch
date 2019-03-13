function search() {
  const app = document.getElementById("root");
  var searchText = document.getElementById("search-input").value;
  var url =
    "https://aravindtwitter.herokuapp.com/twittersearch?key=" + searchText;

  var request = new XMLHttpRequest();
  request.open("GET", url, true);

  request.onload = function() {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      for (i in data.statuses) {
        var img_url = data.statuses[i].user.profile_image_url;
        var name = data.statuses[i].user.name;
        var tweet = data.statuses[i].text;
        var time = data.statuses[i].created_at;
        var location = data.statuses[i].user.location;

        const card = document.createElement("div");
        card.setAttribute("class", "card mt-5");

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        const img = document.createElement("img");
        img.src = img_url;
        img.setAttribute("class", "card-img-top");
        img.setAttribute("style", "width:100px;");

        const nameElement = document.createElement("h4");
        nameElement.textContent = name;

        const timeElement = document.createElement("h5");
        timeElement.textContent = time;

        const locationElement = document.createElement("h6");
        locationElement.textContent = location;

        const tweetElement = document.createElement("p");
        tweetElement.setAttribute("class", "card-text blockquote");
        tweetElement.textContent = tweet;

        app.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(img);
        cardBody.appendChild(nameElement);
        cardBody.appendChild(timeElement);
        cardBody.appendChild(locationElement);
        cardBody.appendChild(tweetElement);
      }
    } else {
      console.log("error");
    }
  };

  request.send();
}

//counter
var timeleft = 29;
var timer = setInterval(() => {
  document.getElementById("timer").innerHTML = timeleft;
  if (timeleft <= 0) {
    location.reload();
  }
  timeleft -= 1;
}, 1000);
