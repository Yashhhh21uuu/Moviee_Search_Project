document.getElementById("searchForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const movieTitle = document.getElementById("movieTitle").value;
    const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=2cfedfc5`);
    const movie = await response.json();
    document.getElementById("results").innerHTML = `
        <h2>${movie.Title} (${movie.Year})</h2>
        <p>Rating: ${movie.imdbRating}</p>
        <p>Genre: ${movie.Genre}</p>
        <p>Director: ${movie.Director}</p>
        <p>Plot: ${movie.Plot}</p>
    `;
});
