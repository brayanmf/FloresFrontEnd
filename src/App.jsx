import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "swiper/css/bundle";
import {useDispatch} from "react-redux";
import Body from "./pages/homePage/body/Body";
import Layout from "./pages/homePage/layout/Latour";
import "./App.css";
import MetaData from "./components/metaData/MetaData";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import ProductDetais from "./pages/productDetails/ProductDetails";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/components/login/Login";
import Register from "./pages/auth/components/register/Register";
import {loadUser} from "./store/authReducer/authReducer.action";
import Profile from "./pages/profile/Profile";
import NotFound from "./pages/notFound/NotFound";
import ProtectRoute from "./components/protectRoute/ProtectRoute";
import UpdateProfile from "./pages/updateProfile/UpdateProfile";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import Cart from "./pages/cart/Cart";
import Payment from "./pages/payment/Payment";
import Shipping from "./pages/payment/component/shipping/Shipping";
import OrderConfirm from "./pages/payment/component/orderConfirm/OrderConfirm";
import Pay from "./pages/payment/component/pay/Pay";
import OrderSuccess from "./pages/orderSuccess/OrderSuccess";
import MyOrders from "./pages/myOrders/MyOrders";
import OrdersDetail from "./pages/ordersDetail/OrdersDetail";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<MetaData title="Flores" />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Body />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:keyword" element={<Products />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="/product/:id" element={<ProductDetais />} />
					<Route path="forgot/password" element={<ForgotPassword />} />
					<Route path="/reset/password/:id" element={<ResetPassword />} />
					<Route path="/cart" element={<Cart />} />
					<Route
						path="/profile"
						element={<ProtectRoute component={Profile} />}
					/>
					<Route
						path="/me/update"
						element={<ProtectRoute component={UpdateProfile} />}
					/>
					<Route
						path="/password/update"
						element={<ProtectRoute component={UpdatePassword} />}
					/>
					<Route path="/payment/" element={<Payment />}>
						<Route path="shipping" element={<Shipping />} />
						<Route path="orderConfirm" element={<OrderConfirm />} />

						<Route path="pay" element={<Pay />} />
					</Route>
					<Route
						path="/success"
						element={<ProtectRoute component={OrderSuccess} />}
					/>
					<Route
						path="/orders"
						element={<ProtectRoute component={MyOrders} />}
					/>

					<Route
						path="/order/detail/:id"
						element={<ProtectRoute component={OrdersDetail} />}
					/>
				</Route>

				<Route path="/auth/" element={<Auth />}>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
