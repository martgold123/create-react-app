import Sidebar from "./component/SideBar/Sidebar";
import Topbar from "./component/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/home";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import UserList from "./pages/userList/Userlist";
import User from "./pages/user/user";
import NewUser from "./pages/newUser/newUser";
import ProductList from "./pages/productList/productList";
import Product from "./pages/products/products";
import NewProduct from "./pages/newProduct/newProduct";

function App() {
  return (
    <Router>

      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/users">
            <UserList />
          </Route>

          <Route path="/user/:userId">
            <User/>
          </Route>

          <Route path="/newUser">
            <NewUser/>
          </Route>

       
          <Route path="/products">
            <ProductList />
          </Route>

          <Route path="/product/:productsId">
            <Product/>
          </Route>

          <Route path="/newproduct">
            <NewProduct/>
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
