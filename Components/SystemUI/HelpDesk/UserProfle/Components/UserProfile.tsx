"use client"
import {
  IconFilePencil,
  IconLayoutDashboardFilled,
  IconLogout,
  IconStarFilled,
  IconUserFilled
} from "@tabler/icons-react"
import {
  User,
  CheckSquare,
  Ticket,
  TrendingUp,
  Bell
} from "lucide-react"

export default function UserProfile() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-serif">
      <header className="bg-[#55D6C2] text-white px-4 sm:px-6 py-3 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl font-bold">Helpdesk</h1>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex rounded-md overflow-hidden border border-black ">
            <div className="bg-black text-white px-2 py-[1px] text-[10px] font-bold justify-center items-center">BM</div>
            <div className="bg-transparent text-black px-2 py-[1px] text-[10px] font-bold justify-center items-center">BI</div>
          </div>
          <Bell size={18} className="text-black" />
          <User size={18} className="text-black" />
          <IconLogout size={18} className="text-black" />
        </div>
      </header>
      <div className="flex flex-1 flex-col lg:flex-row">
        <aside className="w-full lg:w-64 bg-gray-200 p-4 border-r">
          <nav className="text-sm space-y-1">
            <div className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded hover:bg-gray-300 cursor-pointer">
              <IconLayoutDashboardFilled className="w-5 h-5" />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded hover:bg-gray-300 cursor-pointer">
              <CheckSquare className="w-5 h-5" />
              <span>Ticket Approval</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded hover:bg-gray-300 cursor-pointer">
              <Ticket className="w-5 h-5" />
              <span>My Ticket</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 text-gray-700 rounded hover:bg-gray-300 cursor-pointer">
              <TrendingUp className="w-5 h-5" />
              <span>Performance</span>
            </div>
          </nav>
        </aside>

        <main className="flex-1 flex flex-col justify-between">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">User Profile</h2>

            <div className="bg-[#55D6C2] min-h-[65vh] p-4 sm:p-6 md:px-12 md:py-8 rounded-md">
              <div className="flex flex-col lg:flex-row gap-6 xl:gap-12 xl:max-w-3xl mx-auto">
                {/* Profile Card */}
                <div className="bg-[#F2F5FF] w-full lg:w-[55%] rounded-lg shadow-lg relative">
                  <IconFilePencil color="#000" className="absolute top-3 right-3" size={24} />
                  <div className="p-6">
                    <div className="flex justify-center items-center mb-6">
                      <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                        <IconUserFilled color="#000" size={50} />
                      </div>
                    </div>
                    <div className="text-black text-sm ">
                      <div>Username</div>
                      <div>Contact Number</div>
                      <div>Email</div>
                      <div>Department</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F5FF] w-full lg:w-[45%]  rounded-lg shadow-lg h-full">
                  <div className="p-6 sm:px-10">
                    <h3 className="font-semibold text-gray-800 text-center text-sm mb-2">Give Your Feedback</h3>
                    <p className="bg-gray-300 text-gray-800 text-xs mb-3 pt-2 pb-3 px-2">
                      [Lorem ipsum]
                    </p>
                    <div className="flex justify-center mb-2">
                      <IconStarFilled size={16} className="text-gray-300" />
                      <IconStarFilled size={16} className="text-gray-300" />
                      <IconStarFilled size={16} className="text-gray-300" />
                      <IconStarFilled size={16} className="text-gray-300" />
                      <IconStarFilled size={16} className="text-gray-300" />
                      <IconStarFilled size={16} className="text-gray-300" />
                    </div>
                    <button className="w-full bg-[#55D6C2] text-white py-2 rounded text-sm">
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-[#55D6C2] text-center text-white py-4 mt-6 lg:mt-0"></footer>
        </main>
      </div>
    </div>
  )
}
