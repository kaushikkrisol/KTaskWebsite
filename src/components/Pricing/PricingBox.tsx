import axios from "axios";
import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";

const PricingBox = ({ product }: { product: Price }) => {

  const router=useRouter()

  const razorpaylinks:{[key:string]:string}={
    Basic:"https://api.razorpay.com/v1/l/subscriptions/sub_PyEjOXQmkQTfLZ",
    Pro:"https://api.razorpay.com/v1/l/subscriptions/sub_PyEiqnSuUnQHOb"
  }
  // POST request
 const handleSubscription=async(e:any)=>{
  e.preventDefault();
  if(razorpaylinks[product.nickname]){
    window.location.assign(razorpaylinks[product.nickname]);
  }
  else{
    const {data}=await axios.post("/api/payment",{priceId:product.id,},{headers:{"Content-Type":"application/json",},});
    window.location.assign(data);
  }
 }

 const handleContactUs=()=>{
  router.push("/contact")
 }


  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14 h-full flex flex-col justify-between"
        data-wow-delay=".1s"
      >
        {product.nickname === "Premium" && (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Recommended
          </p>
        )}

        <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
          {product.nickname}
        </span>

        <h2 className="mb-11 text-2xl font-semibold text-dark dark:text-white xl:text-[32px] xl:leading-[1.21]">
          <span className="-ml-1 -tracking-[2px]">
            {typeof product.unit_amount === "number"
              ? (product.unit_amount / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              : product.unit_amount}
          </span>
          <span className="text-base font-normal text-body-color dark:text-dark-6">
            {" "}
            Per Month
          </span>
        </h2>

        <div className="mb-[5px]">
          <h3 className="mb-1 text-lg font-medium text-dark dark:text-white">
            Features
          </h3>
          <div className="mb-10">
            {product?.offers.map((offer, i) => (
              <OfferList key={i} text={offer} />
            ))}
          </div>
        </div>

        {product.unit_amount === "Custom Pricing" && product.description && (
          <p className="bg-teal-100 text-teal-800 p-3 rounded-md mt-2">
            {product.description}
          </p>
        )}

        <div className="w-full mt-auto">
          {product.unit_amount==="Custom Pricing"? (
            <button onClick={handleContactUs}
            className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90">Contact Us</button>
          ): (<button
          onClick={handleSubscription}
          className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90"
        >
          Purchase Now
        </button>)}
        
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
