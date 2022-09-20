import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ManageCategory from './../component/ManageCategory';
import ManageProduct from './../component/ManageProduct';
import PlaceOrder from './../component/PlaceOrder';
import OrderList from './../component/OrderList';
import OrderDetail from './../component/OrderDetail';
import Sidebar from './Sidebar';
import RouteComponent from '../component/RouteComponent';
import BuyerMain from './BuyerMain';
import Shop from './Shop';
import OurStory from './OurStory';
import Contact from './Contact';
import Offers from './Offers';
import YourCart from './YourCart';
import MyOrders from './MyOrders';
import LogOut from './LogOut';
import Login from './Login';
import RegistrationPage from './RegistrationPage';
import SellerMain from './SellerMain';
import User from '../component/User';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<RouteComponent><BuyerMain/></RouteComponent>} />
                    <Route path="shop" element={<RouteComponent><Shop/></RouteComponent>} />
                    <Route path="ourStory" element={<RouteComponent><OurStory/></RouteComponent>} />
                    <Route path="contact" element={<RouteComponent><Contact/></RouteComponent>} />
                    <Route path="offers" element={<RouteComponent><Offers/></RouteComponent>} />
                    <Route path="yourCart" element={<RouteComponent><YourCart/></RouteComponent>} />
                    <Route path="order" element={<RouteComponent><OrderList/></RouteComponent>} />
                    <Route path="logout" element={<RouteComponent><LogOut/></RouteComponent>} />
                    <Route path="login" element={<RouteComponent><Login/></RouteComponent>} />
                    <Route path="user" element={<RouteComponent><User/></RouteComponent>} />
                    <Route path="registration" element={<RouteComponent><RegistrationPage/></RouteComponent>} />

                    <Route path="category" element={
                        
                            <ManageCategory />
                        
                    } />
                    <Route path="product" element={
                        
                        <ManageProduct />
                    
                } />
                
                    {/* <Route path="manageproduct" element={<RouteComponent><BuyerMain/></RouteComponent>} />
                    <Route path="placeorder" element={<RouteComponent><PlaceOrder /></RouteComponent>} />
                    <Route path="orderlist" element={<RouteComponent><OrderList /></RouteComponent>} />
                    <Route path="orderdeatils" element={<RouteComponent><OrderDetail /></RouteComponent>} /> */}
                    {/* <Route path="orderdeatils/:ordid" element={<OrderDetail />} /> */}
                </Route>
                {/* <Route path="/sellerHome">
                <Route path="/sellerHome" element={<RouteComponent><SellerMain/></RouteComponent>} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes