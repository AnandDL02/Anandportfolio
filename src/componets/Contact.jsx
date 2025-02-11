import React from "react";

function ContactForm() {
  return (
    <div className=" contactpage  w-full h-[500px] max-w-lg mx-auto mt-[100px] p-8 m-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact
      </h2>
      <form className="flex flex-col space-y-4">
        <div>
          <label className="text-gray-700 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium">Contact</label>
          <input
            type="tel"
            placeholder="Enter your contact number"
            className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium text-lg hover:bg-pink-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
