import React from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Overview />
    </div>
  );
}

export default App;
