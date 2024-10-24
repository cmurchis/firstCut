import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//👇🏻 component
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import BookUser from "./components/BookUser";
//👇🏻 React-Toastify configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default App;


function App() {
 
  

  
  
  const App = () => {
    return (
      <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Signup />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/profile/:id' element={<Profile />} />
                    <Route path='/book/:user' element={<BookUser />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
  };
  


app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
});


app.post("/login", (req, res) => {
  const { username, password } = req.body;
  let result = database.filter(
      (user) => user.username === username && user.password === password
  );
  //👇🏻 user doesn't exist
  if (result.length !== 1) {
      return res.json({
          error_message: "Incorrect credentials",
      });
  }
  //👇🏻 user exists
  res.json({
      message: "Login successfully",
      data: {
          _id: result[0].id,
          _email: result[0].email,
      },
  });
});
}
