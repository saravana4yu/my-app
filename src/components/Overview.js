import React from "react";
import Cards from "./Cards";
import Storage from "./Storage";
import LastFile from "./LastFile";
import { IoMdNotificationsOutline, IoIosLogIn, IoMdSearch } from "react-icons/io";

function Overview() {
  return (
    <div className="flex-grow p-8">
      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold">Overview</h1>
          <div className="bg-red-500 text-white px-2 py-1 rounded">
            <span>185 GB</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search something..."
              className="px-4 py-2 pl-10 "
            />
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </div>
          <div className="border-2 bg-white rounded-xl p-2">
            <IoMdNotificationsOutline className="text-gray-500 text-xl" />
          </div>
          <div className="border-2 bg-white rounded-xl p-2">
            <IoIosLogIn className="text-gray-500 text-xl" />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400">
            Upgrade Plan
          </button>
        </div>
      </header>
      <main className="flex">
        <section className="flex-grow mr-6">
          <h2 className="text-2xl font-semibold mb-4">Manage your folders</h2>
          <p className="text-gray-500">
            Create folders to sort files and have quick access to documents
          </p>
        </section>
        <section>
          <Cards />
        </section>
      </main>
      <section className="mt-10">
        <div className="flex justify-between">
          <Storage />
          <LastFile />
        </div>
      </section>
    </div>
  );
}

export default Overview;
