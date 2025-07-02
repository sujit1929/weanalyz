"use client"
import { IconFilePencil, IconLayoutDashboardFilled, IconLogout, IconStarFilled, IconUserFilled } from "@tabler/icons-react"
import {
  User, LayoutDashboard, CheckSquare,
  Ticket, TrendingUp, Bell
} from "lucide-react"

export default function UserProfile() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-teal-500 text-white px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Helpdesk</h1>
        <div className="flex items-center gap-3">
          <div className="bg-teal-600 px-2  rounded text-xs">EN</div>
          <Bell size={14} className=" font-bold" color="black" />
          <User size={14} className=" font-bold" color="black" />
          <IconLogout size={14} className=" font-bold" color="black" />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-gray-200 p-4 border-r ">
          <nav className="text-sm">
            <div className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded cursor-pointer">
              <IconLayoutDashboardFilled className="w-5 h-5" />
              <span>Dashboard</span>
            </div> 
            <div className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded cursor-pointer">
              <CheckSquare className="w-5 h-5" />
              <span>Ticket Approval</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded cursor-pointer">
              <Ticket className="w-5 h-5" />
              <span>My Ticket</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded cursor-pointer">
              <TrendingUp className="w-5 h-5" />
              <span>Performance</span>
            </div>
          </nav>
        </aside>

        {/* Right Content */}
        <main className="flex-1    flex flex-col justify-between"> {/* Added flex-col and justify-between */}
          <div className=" p-4 sm:p-6"> {/* Wrapper for the existing main content */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Profile</h2>

            <div className="bg-[#55D6C2] h-[65vh] p-4 sm:p-6 md:px-12 md:py-8 rounded-md">
              <div className="flex flex-col lg:flex-row xl:gap-12 lg:gap-8 gap-6">
                {/* Profile Card */}
                <div className="bg-[#F2F5FF] rounded-lg w-full shadow-lg xl:w-7/12 lg:w-[55%] relative">
                  <IconFilePencil color="#000" className="absolute top-3 right-3" size={24} />
                  <div className="p-6">
                    <div className="flex justify-center items-center mb-6 w-full">
                      <div className="w-24 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                        <IconUserFilled color="#000" size={50} className=" text-gray-600" />
                      </div>
                    </div>
                    <div className="text-gray-700 text-sm  ">
                      <div className="font-bold">Username</div>
                      <div className="font-bold">Contact Number</div>
                      <div className="font-bold">Email</div>
                      <div className="font-bold">Department</div>
                    </div>
                  </div>
                </div>

                {/* Feedback Card */}
                <div className="bg-[#F2F5FF] rounded-lg  w-full xl:w-5/12 lg:w-[45%] shadow-lg">
                  <div className="py-6 px-10">
                    <h3 className="font-semibold text-gray-800 text-center text-xs mb-1">Give Your Feedback</h3>
                    <p className="w-full bg-gray-300 text-gray-800 text-xs mb-2 pt-2 pb-4 px-2">
                      [Lorem ipsum]
                    </p>
                    <div className="flex justify-center mb-4 gap-1">
                      <IconStarFilled size={16} className="text-gray-300" />
                      <IconStarFilled size={16} className="text-gray-300" />
                      <IconStarFilled size={16} className="text-gray-300" />
                      <IconStarFilled size={16} className="text-gray-300" />
                      <IconStarFilled size={16} className="text-gray-300" />
                    </div>
                    <button className="w-full bg-[#55D6C2]  text-white py-1 rounded">
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-[#55D6C2] text-center py-4 fixed w-full bottom-0 ">

          </footer>
        </main>
      </div>
    </div>
  )
}