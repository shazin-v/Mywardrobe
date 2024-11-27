import { toast } from "react-toastify";
import SummaryApi from "../common/route";


const addToCart = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();

  const response = await fetch(SummaryApi.addToCartProduct.url, {
    method: SummaryApi.addToCartProduct.method,
    credentials:"include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId: id }),
  });

  // Introduce a 2-second delay before processing the response

  const responseData = await response.json();
  console.log("responseData of addtocart", responseData);

  if (responseData.success) {
    toast.success(responseData.message);
  }

  if (responseData.error) {
    toast.error("Error: toast add to cart" + responseData.message);
  }

  return responseData;
};

export default addToCart;
