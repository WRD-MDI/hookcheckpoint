import "./App.css";
import { Header } from "./component/Header/Header";
import { Movielist } from "./component/movielist/Movielist";
import { Moviedata } from "./component/Moviedata";
import { Add } from "./component/Add";
function App() {
  return (
    <div className="App">
      <Add />
      <Header />
      <Movielist Moviedata={Moviedata} />
    </div>
  );
}

export default App;
