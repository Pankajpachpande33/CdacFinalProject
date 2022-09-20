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
import YourCart from './YourCart';
import MyOrders from './MyOrders';
import Login from './Login';
import RegistrationPage from './RegistrationPage';
import SellerMain from './SellerMain';
import HomePage from './HomePage';
import RouteComponentLoginPage from '../component/RouteComponentLoginPage';
import AddProduct from './AddProduct';
import RouterSellerComponent from '../component/RouterSellerComponent';
import AddCategory from './AddCategory';
import SellerRegistration from './SellerRegistration';
import GetAllCategory from '../component/GetComponent/GetAllCategory';
import GetAllSubCategory from '../component/GetComponent/GetAllSubCategory';
import GetAllProduct from '../component/GetComponent/GetAllProduct';
import GetAllOrder from '../component/GetComponent/GetAllOrder';
import GetAllSeller from '../component/GetComponent/GetAllSeller';
import GetAllUser from '../component/GetComponent/GetAllUser';
import GetAllAddress from '../component/GetComponent/GetAllAddress';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                <Route index element={<RouteComponent><HomePage/></RouteComponent>} />
                    <Route path="buyerHome" element={<RouteComponent><BuyerMain/></RouteComponent>} />
                    <Route path="shop" element={<RouteComponent><Shop/></RouteComponent>} />
                    <Route path="ourStory" element={<RouteComponent><OurStory/></RouteComponent>} />
                    <Route path="contact" element={<RouteComponent><Contact/></RouteComponent>} />
                    <Route path="yourCart" element={<RouteComponent><YourCart/></RouteComponent>} />
                    <Route path="myOrders" element={<RouteComponent><MyOrders/></RouteComponent>} />
                    <Route path="login" element={<RouteComponentLoginPage><Login/></RouteComponentLoginPage>} />
                    <Route path="registration" element={<RouteComponentLoginPage><RegistrationPage/></RouteComponentLoginPage>} />
                    <Route path="addProduct" element={<RouteComponentLoginPage><AddProduct/></RouteComponentLoginPage>} />
                    <Route path="addCategory" element={<RouteComponentLoginPage><AddCategory/></RouteComponentLoginPage>} />
                    <Route path="sellerRegistration" element={<RouteComponentLoginPage><SellerRegistration/></RouteComponentLoginPage>} />
                    <Route path="displayCategory" element={<RouteComponentLoginPage><GetAllCategory/></RouteComponentLoginPage>} />
                    <Route path="displaySubCategory" element={<RouteComponentLoginPage><GetAllSubCategory/></RouteComponentLoginPage>} />
                    <Route path="displayProduct" element={<RouteComponentLoginPage><GetAllProduct/></RouteComponentLoginPage>} />
                    <Route path="displayOrder" element={<RouteComponentLoginPage><GetAllOrder/></RouteComponentLoginPage>} />
                    <Route path="displaySeller" element={<RouteComponentLoginPage><GetAllSeller/></RouteComponentLoginPage>} />
                    <Route path="displayUser" element={<RouteComponentLoginPage><GetAllUser/></RouteComponentLoginPage>} />
                    <Route path="displayAddress" element={<RouteComponentLoginPage><GetAllAddress/></RouteComponentLoginPage>} />
                    
                    {/* <Route path="managecategory" element={
                        <RouteComponent>
                            <ManageCategory />
                        </RouteComponent>
                    } /> */}
                    {/* <Route path="manageproduct" element={<RouteComponent><BuyerMain/></RouteComponent>} />
                    <Route path="placeorder" element={<RouteComponent><PlaceOrder /></RouteComponent>} />
                    <Route path="orderlist" element={<RouteComponent><OrderList /></RouteComponent>} />
                    <Route path="orderdeatils" element={<RouteComponent><OrderDetail /></RouteComponent>} /> */}
                    {/* <Route path="orderdeatils/:ordid" element={<OrderDetail />} /> */}
                </Route>
                <Route path="/sellerHome">
                <Route index element={<RouterSellerComponent><SellerMain/></RouterSellerComponent>} />
                
                </Route>


            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes