import MovieList from "./components/MovieList";
import MovieInput from "./components/MovieInput";
import Button from "./components/Button";
import Users from "./Users.js";
import UserTest from "./components/UserTest.jsx";
// import Photos from "./components/Photos";

const App = () => {
  return (
    <>
      {/* <Photos /> */}
      <UserTest/>
      <Users />
      <MovieInput />
      <Button />
      <MovieList />
      <h5>New movies</h5>
    </>
  )
}

export default App;
