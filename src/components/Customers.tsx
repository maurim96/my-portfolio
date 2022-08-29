import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Customer, customers } from "../data";

export default function Customers() {
  return (
    <section id="customers" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BuildingOfficeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Customers
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Some of the customers I've the chance to work for and collaborate with, supporting their needs and helping building their dreams.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {customers.map((customer: Customer) => (
            <a
              href={customer.link}
              key={customer.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full  object-center bg-white"
                  src={customer.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {customer.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {customer.title}
                  </h1>
                  <p className="leading-relaxed">{customer.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}