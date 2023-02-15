import Movie from "./movie";

export default async function Home() {
  const data = await fetch(
    `https://imdb-api.com/en/API/Top250Movies/${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      <h1>Movie Watch List</h1>
      {res.items.map((movie) => (
        <Movie id={movie.id} title={movie.title} image={movie.image} />
      ))}
    </main>
  );
}
