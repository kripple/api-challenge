function Controller(view) {
  this.view = view;
};

Controller.prototype.getMovie = function(title) {
  var url = "http://www.omdbapi.com/?t=" + title
  $.ajax(url)
  .done(function(response) {
      test = response;
    });
};

Controller.prototype.search = function(title) {
  var url = "http://www.omdbapi.com/?t=" + title
  $.ajax(url)
  .done(function(response) {
      if(response.Response === "False") {
        this.view.displayNotFound();
      } else {
        var movie = new Model(response);
        this.view.displayMovie(movie);
      };
    }.bind(this));
};
