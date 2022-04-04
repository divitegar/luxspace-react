import Breadcrumb from "components/Breadcrumb";
import ShippingDetails from "parts/Cart/ShippingDetails";
import ShoppingCart from "parts/Cart/ShoppingCart";

import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";

import React from "react";

export default function Cart() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "home" },
          { url: "/categories/133432", name: "Office Room" },
          { url: "/", name: "office room" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
