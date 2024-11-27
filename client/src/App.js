import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import { useEffect, useState } from "react";
import SummaryApi from "./common/route";
import Footer from "./components/common/Footer";

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);

  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });
      // console.log("dataResponse fetchUserDetails", dataResponse);

      if (!dataResponse.ok)
        throw new Error("throw new error Failed to fetch user details");

      const dataApi = await dataResponse.json();
      // console.log("dataApi", dataApi);
      if (dataApi.success) {
        // console.log("Dispatching user details:", dataApi.data);
        dispatch(setUserDetails(dataApi.data));
      } else {
        console.error(
          " else condition Error fetching user details:",
          dataApi.message
        );
      }
    } catch (error) {
      console.error("catch Error fetching user details:", error.message);
    }
  };

  const fetchUserAddToCart = async () => {
    try {
      const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
        method: SummaryApi.addToCartProductCount.method,
        credentials: "include",
      });

      if (!dataResponse.ok)
        throw new Error("throw error Failed to fetch cart count");

      const dataApi = await dataResponse.json();
      setCartProductCount(dataApi?.data?.count);
    } catch (error) {
      console.error("Error fetching cart count:", error.message);
      // setCartProductCount(0); // Fallback to 0 if there's an error
    }
  };

  useEffect(() => {
    /**user Details */
    fetchUserDetails();
    /**user Details cart product */
    fetchUserAddToCart();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // user detail fetch
          cartProductCount, // current user add to cart product count,
          fetchUserAddToCart,
        }}
      >
        {/* {console.log("Context Value: in app js", {
          fetchUserDetails,
          cartProductCount,
          fetchUserAddToCart,
        })} */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Navbar />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
