const init = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    selectedMovies = form.searchByID.value;
    // the input should be captured after the prevent default so it is not locked
    fetch(`http://localhost:3000/movies/${selectedMovies}`)
      // notice the use of backticks as you are interpolating here
      .then((res) => res.json())
      .then((movies) => {
        document.querySelector("h4").innerText = movies.title;
        document.querySelector("p").innerText = movies.summary;
        form.reset();
      });
  });
};
document.addEventListener("DOMContentLoaded", init);
