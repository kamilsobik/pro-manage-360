import "./css/index.css";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import Main from "./partials/HomePage";

function App() {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="h-screen flex-1">
        <Header />
        <div className="justify-center items-center">
          <Main />
        </div>
      </div>
    </div>
  );
}
export default App;
