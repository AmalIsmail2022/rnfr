import AdminProfile from "./components/Admin/Profile";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Regist";
import Landing from "./components/Home/Landing";
import Search from "./components/Home/Search";
import ViewContainer from "./components/Home/viewContainer";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import AddUser from "./components/User/AddUser";
import EditUser from "./components/User/EditUser";
import ViewUser from "./components/User/ViewUser";
import Footer from "./components/utility/Footer";
import Navy from "./components/utility/navbar";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  // const getAllStudents = async () => {
  //     const res = await axios.get("http://localhost:5555/api/v1/employees")
  //     setEmployees(res.data.data)
  //   }

  // const createEmployee = async () => {
  //     if (name, age, email, phone) {
  //     const res = await axios.post("http://localhost:5555/api/v1/employees", {
  //     name:name,
  //     age:age,
  //     email: email,
  //     phone: phone
  //     })
  //   }

  //   }

  return (
    <div className="App">
      <Navy />

      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<ViewContainer />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/employees/:id" element={<ViewUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
