import Like from "./common/like";
const MoviesTable = (props) => {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")}>Title</th>
          <th onClick={() => onSort("Genre.name")}>Genre</th>
          <th onClick={() => onSort("numberInStock")}>In Stock</th>
          <th onClick={() => onSort("dailyRentalRate")}>Daily Rental Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)}></Like>
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
