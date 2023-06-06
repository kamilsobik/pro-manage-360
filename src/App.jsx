import "./css/index.css";
import Sidebar from "./partials/Sidebar";
import Header from "./partials/Header";
import Main from "./partials/HomePage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./utils/NotFound";

function App() {
  return (
    // <div className="w-screen h-screen flex">
    //   <Sidebar />
    //   <div className="h-screen flex-1">
    //     <Header />
    //     <div className="justify-center items-center">
    //       <Main />
    //     </div>
    //   </div>
    // </div>
    // <Signup />
    <NotFound />
  );
}
export default App;
