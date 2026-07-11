// import Sidebar from "./components/Sidebar/Sidebar";

// function App() {
//   return (
//     <div>
//       <Sidebar />
//     </div>
//   );
// }

// export default App;


// import Login from "./pages/Login/Login";

// function App() {
//   return <Login />;
// }

// export default App;


// import Register from "./pages/Register/Register";

// function App() {
//   return <Register />;
// }

// export default App;



// import { Routes, Route } from "react-router-dom";

// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// import NotFound from "./pages/NotFound/NotFound";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }

// export default App;



// import Home from "./pages/Home/Home";

// function App() {
//   return <Home />;
// }

// export default App;



import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <main className="main-content">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route 
            path="/products" 
            element={<Products />} 
          />

        </Routes>
      </main>

    </div>
  );
}

export default App;