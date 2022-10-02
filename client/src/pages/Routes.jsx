import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageCategory from "./../component/ManageCategory";
import ManageProduct from "./../component/ManageProduct";
import PlaceOrder from "./../component/PlaceOrder";
import OrderList from "./../component/OrderList";
import OrderDetail from "./../component/OrderDetail";
import Sidebar from "./Sidebar";
import RouteComponent from "../component/RouteComponent";
import BuyerMain from "./BuyerMain";
import Shop from "./Shop";
import OurStory from "./OurStory";
import Contact from "./Contact";
import YourCart from "./YourCart";
import MyOrders from "./MyOrders";
import Login from "./Login";
import RegistrationPage from "./RegistrationPage";
import SellerMain from "./SellerMain";
import HomePage from "./HomePage";
import RouteComponentLoginPage from "../component/RouteComponentLoginPage";
import AddProduct from "./AddProduct";
import RouterSellerComponent from "../component/RouterSellerComponent";
import AddCategory from "./AddCategory";
import SellerRegistration from "./SellerRegistration";
import GetAllCategory from "../component/GetComponent/GetAllCategory";
import GetAllSubCategory from "../component/GetComponent/GetAllSubCategory";
import GetAllProduct from "../component/GetComponent/GetAllProduct";
import GetAllOrder from "../component/GetComponent/GetAllOrder";
import GetAllSeller from "../component/GetComponent/GetAllSeller";
import GetAllUser from "../component/GetComponent/GetAllUser";
import GetAllAddress from "../component/GetComponent/GetAllAddress";
import AddressBuyer from "./AddressBuyer";
import DisplayProductDetails from "../component/GetComponent/DisplayProductDetails";
import { EditCategory } from "./EditCategory";
import SellerLogin from "./SellerLogin";
import RouteComponentSellerLoginPage from "../component/RouteComponentSellerLoginPage copy";
import { EditSubCategory } from "./EditSubCategory";
import { EditOrder } from "./EditOrder";
import { EditAddress } from "./EditAddress";
import { EditSeller } from "./EditSeller";
import { EditUser } from "./EditUser";
import DisplayProduct from "../component/GetComponent/DisplayProduct";
import GetAllProductSeller from "../component/GetComponent/GetAllProductSeller";
import DisplaySellerProductDetails from "../component/GetComponent/DisplaySellerProductDetails";
import EditProduct from "./EditProduct";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <RouteComponent>
                <HomePage />
              </RouteComponent>
            }
          />
          <Route
            path="buyerHome"
            element={
              <RouteComponent>
                <GetAllProduct />
              </RouteComponent>
            }
          />
          <Route
            path="shop"
            element={
              <RouteComponent>
                <Shop />
              </RouteComponent>
            }
          />
          <Route
            path="ourStory"
            element={
              <RouteComponent>
                <OurStory />
              </RouteComponent>
            }
          />
          <Route
            path="contact"
            element={
              <RouteComponent>
                <Contact />
              </RouteComponent>
            }
          />
          <Route
            path="yourCart"
            element={
              <RouteComponent>
                <YourCart />
              </RouteComponent>
            }
          />
          <Route
            path="myOrders"
            element={
              <RouteComponentLoginPage>
                <MyOrders />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="login"
            element={
              <RouteComponentLoginPage>
                <Login />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="displayAllCategory"
            element={
              <RouteComponentSellerLoginPage>
                <GetAllCategory />
              </RouteComponentSellerLoginPage>
            }
          />
          <Route
            path="displayAllSubCategory"
            element={
              <RouteComponentSellerLoginPage>
                <GetAllSubCategory />
              </RouteComponentSellerLoginPage>
            }
          />
          <Route
            path="displaySellerProduct"
            element={
              <RouteComponentSellerLoginPage>
                <GetAllProduct/>
              </RouteComponentSellerLoginPage>
            }
          />
          <Route
            path="displayAllOrder"
            element={
              <RouteComponentLoginPage>
                <GetAllOrder />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="displayAllSeller"
            element={
              <RouteComponentSellerLoginPage>
                <GetAllSeller />
              </RouteComponentSellerLoginPage>
            }
          />
          <Route
            path="displayAllUser"
            element={
              <RouteComponentLoginPage>
                <GetAllUser />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="displayAllAddress"
            element={
              <RouteComponentLoginPage>
                <GetAllAddress />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="displayProductDetails"
            element={
              <RouteComponentLoginPage>
                <DisplayProductDetails />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="addAddress"
            element={
              <RouteComponentLoginPage>
                <AddressBuyer />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="editCategory"
            element={
              <RouteComponentLoginPage>
                <EditCategory />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="editSubCategory"
            element={
              <RouteComponentLoginPage>
                <EditSubCategory />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="editOrder"
            element={
              <RouteComponentLoginPage>
                <EditOrder />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="editProduct"
            element={
              <RouteComponentLoginPage>
                <EditProduct/>
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="editAddress"
            element={
              <RouteComponentLoginPage>
                <EditAddress />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="editSeller"
            element={
              <RouteComponentSellerLoginPage>
                <EditSeller />
              </RouteComponentSellerLoginPage>
            }
          />
          <Route
            path="editUser"
            element={
              <RouteComponentLoginPage>
                <EditUser />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="displayAllProducts"
            element={
              <RouteComponentLoginPage>
                <DisplayProduct />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="displaySellerProducts"
            element={
              <RouteComponentLoginPage>
                <DisplaySellerProductDetails/>
              </RouteComponentLoginPage>
            }
          />

          <Route
            path="sellerOurStory"
            element={
              <RouterSellerComponent>
                <OurStory />
              </RouterSellerComponent>
            }
          />
          <Route
            path="sellerContact"
            element={
              <RouterSellerComponent>
                <Contact />
              </RouterSellerComponent>
            }
          />
          <Route
            path="sellerHome"
            element={
              <RouterSellerComponent>
                <GetAllProductSeller />
              </RouterSellerComponent>
            }
          />
          <Route
            path="sellerRegistration"
            element={
              <RouteComponentSellerLoginPage>
                <SellerRegistration />
              </RouteComponentSellerLoginPage>
            }
          />
          <Route
            path="sellerLogin"
            element={
              <RouteComponentSellerLoginPage>
                <SellerLogin />
              </RouteComponentSellerLoginPage>
            }
          />
          <Route
            path="registration"
            element={
              <RouteComponentLoginPage>
                <RegistrationPage />
              </RouteComponentLoginPage>
            }
          />
          <Route
            path="addProduct"
            element={
              <RouteComponentSellerLoginPage>
                <AddProduct />
              </RouteComponentSellerLoginPage>
            }
          />
          <Route
            path="addCategory"
            element={
              <RouteComponentSellerLoginPage>
                <AddCategory />
              </RouteComponentSellerLoginPage>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
