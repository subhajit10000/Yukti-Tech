import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar open={open} setOpen={setOpen} />

      {/* Content */}
      <div className="flex min-h-screen flex-1 flex-col lg:ml-72">
        {/* Mobile Header */}
        {/* <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-900 p-4 lg:hidden">
          <button onClick={() => setOpen(true)} className="text-2xl text-white">
            <FaBars />
          </button>

          <h2 className="text-lg font-bold text-white">Yukti Tech</h2>
        </header> */}

        {/* Page Content */}
        <main className="flex-1 bg-slate-900 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
