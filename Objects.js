const ol = document.querySelector("ol");

const favoriteMovies = [
    {
        name: "Bladerunner 2049",
        year: 2017,
        director: "Denis Villeneuve",
        picture: "bladerunner2049.jpg"
    },
    {
        name: "Perfect Blue",
        year: 1997,
        director: "Satoshi Kon",
        picture: "perfectblue.jpg"
    },
    {
        name: "Scott Pilgrim vs. the World",
        year: 2010,
        director: "Edgar Wright",
        picture: "scottpilgrimvstheworld.jpg"
    }
];

const template = favoriteMovies.map(movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <p>Picture: </p><img src=${movie.picture}>
</li>
`);

console.log(template);
ol.innerHTML = template.join('');