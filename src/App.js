
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Headers from './Pages/Shared/Headers';
import AuthProvider from './contexts/AuthProvider';
import Registration from './Pages/Home/Registration/Registration';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Details from './Details/Details';
import Footer from './Pages/Home/Footer/Footer';
import AddService from './Pages/Home/AddService/AddService';
import ManageServices from './Pages/Home/MangeServices/ManageServices';
import OrderDashboard from './Pages/OrderDashboard/OrderDashboard';
import MyOrders from './Pages/Home/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Headers></Headers>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path="/detail/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageService">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute Route path="/manageAllOrders">
              <OrderDashboard></OrderDashboard>
            </PrivateRoute>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
