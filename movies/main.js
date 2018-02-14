// HINTS
//
// The TMDB API returns a "poster_path", which needs to be prepended with "http://image.tmdb.org/t/p/w500"
// to form the full image URL

$(function() {  // when the page loads
  $("#find-movie").on("click", function(event) {  // listen for "click" event on the find-movie button
    let movieTitle = $("#movie-title").val();
    let url = "http://api.themoviedb.org/3/search/movie?query=" + movieTitle + "&api_key=8ad43d355fccbef40dc3527123bb25ff&language=en-US&page=1&include_adult=false";
    $.get(url, function(data) {
      console.log(data); // have a look at the data
      // make the magic happen
      // let movie = data.results[0];
      // $(".card-title").html(movie.title);
      // $(".card-text").html(movie.overview);
      // $(".card-img-top").attr("src", "http://image.tmdb.org/t/p/w500" + movie.poster_path);
      $(".movies").empty();
      for (let i=0; i<data.results.length; i++) {
        let movie = data.results[i];
        let html = '<div class="col-4">';
        html = html + '<div class="card">';
        html = html + '<img class="card-img-top" src="http://image.tmdb.org/t/p/w500' + movie.poster_path + '">';
        html = html + '<div class="card-body">';
        html = html + '<h4 class="card-title">' + movie.title + '</h4>';
        html = html + '<p class="card-text">' + movie.overview + '</p>';
        html = html + '</div></div></div>';
        $(".movies").append(html);
      }
      $(".movies").fadeIn();
    });
  });
});
