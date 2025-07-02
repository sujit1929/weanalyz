"use client"
import { IconLogout, IconUserFilled } from "@tabler/icons-react"
import {
  User, Edit3, LayoutDashboard, CheckSquare,
  Ticket, TrendingUp, Bell, Settings, Star
} from "lucide-react"

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-teal-500 text-white px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">Helpdesk</h1>
        <div className="flex items-center gap-3">
          <div className="bg-teal-600 px-2 py-1 rounded text-sm">EN</div>
          <Bell className="w-5 h-5 font-bold"   color="black" />
          <User className="w-5 h-5 font-bold"   color="black"/>
          <IconLogout className="w-5 h-5 font-bold" color="black" />
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 bg-gray-200 p-4">
          <nav className="space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-300 rounded cursor-pointer">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-300 rounded cursor-pointer">
              <CheckSquare className="w-5 h-5" />
              <span>Ticket Approval</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-700 bg-gray-300 rounded cursor-pointer">
              <Ticket className="w-5 h-5" />
              <span>My Ticket</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-300 rounded cursor-pointer">
              <TrendingUp className="w-5 h-5" />
              <span>Performance</span>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Profile</h2>

          <div className="bg-[#55D6C2] p-4 sm:p-6 md:px-12 md:py-8 rounded-md">
            <div className="flex flex-col lg:flex-row xl:gap-12 lg:gap-8 gap-6">
              {/* Profile Card */}
              <div className="bg-[#F2F5FF] rounded-lg w-full shadow-lg">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center">
                      <IconUserFilled color="#000" className="w-16 h-16 sm:w-20 sm:h-20 text-gray-600" />
                    </div>
                    <Edit3 className="w-4 h-4 text-gray-600" />
                  </div>

                  <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <div>
                      <div className="font-bold">Username</div>
                    </div>
                    <div>
                      <div className="font-bold">Contact Number</div>
                    </div>
                    <div>
                      <div className="font-bold">Email</div>
                    </div>
                    <div>
                      <div className="font-bold">Department</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback Section */}
              <div className="bg-[#F2F5FF] rounded-lg w-full xl:w-1/2 xl:h-52 h-full shadow-lg ">
                <div className="py-6 px-10">
                  <h3 className="font-semibold text-gray-800 text-center mb-4">Give Your Feedback</h3>
                  <div className="flex justify-center gap-1 mb-4">
                    <Star className="w-5 h-5 text-gray-300" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <Star className="w-5 h-5 text-gray-300" />
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                  <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded">
                    Submit Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
