"use client"

import {
  Search,
  Bell,
  User,
  Settings,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const tickets = [
  { id: "1234", subject: "Login ticket issue", category: "Access issue", priority: "High", date: "13/08/21", status: "In Progress", assignee: "John" },
  { id: "1124", subject: "New ticket issue", category: "Access issue", priority: "Medium", date: "14/08/21", status: "On hold", assignee: "Sarah" },
  { id: "1224", subject: "New ticket", category: "Feedback", priority: "Low", date: "13/08/21", status: "Closed", assignee: "Mike" },
  { id: "1244", subject: "Ticket submission", category: "Ticketing", priority: "High", date: "14/08/21", status: "In Progress", assignee: "Anna" },
  { id: "1114", subject: "Login issue", category: "Access issue", priority: "High", date: "3/08/21", status: "In Progress", assignee: "Tom" },
]

const getStatusBadge = (status : string) => {
  let base = "inline-block px-2 py-1 rounded text-xs font-medium"
  switch (status) {
    case "In Progress":
      return <span className={`${base} bg-green-100 text-green-800`}>In Progress</span>
    case "On hold":
      return <span className={`${base} bg-orange-100 text-orange-800`}>On hold</span>
    case "Closed":
      return <span className={`${base} bg-gray-100 text-gray-800`}>Closed</span>
    default:
      return <span className={`${base} bg-gray-200 text-gray-600`}>{status}</span>
  }
}

const getPriorityColor = (priority : string) => {
  switch (priority) {
    case "High": return "text-red-600"
    case "Medium": return "text-orange-600"
    case "Low": return "text-green-600"
    default: return "text-gray-600"
  }
}

export default function HelpdeskDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-500 text-white px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Helpdesk</h1>
        <div className="flex items-center gap-3">
          <button className="text-white hover:bg-teal-600 px-2 py-1 rounded">EN</button>
          <Bell className="w-5 h-5" />
          <User className="w-5 h-5" />
          <Settings className="w-5 h-5" />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 min-h-screen p-4">
          <nav className="space-y-2">
            {['Dashboard', 'Ticket Approval', 'My Ticket', 'Performance'].map((item, idx) => (
              <div key={item} className={`flex items-center gap-3 px-3 py-2 rounded ${item === 'My Ticket' ? 'bg-gray-200 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-200'}`}>
                <div className={`w-4 h-4 rounded-sm ${item === 'My Ticket' ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                <span>{item}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Ticket</h2>
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input type="text" placeholder="Find ticket" className="pl-10 w-64 border rounded px-2 py-1" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Show:</span>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span>Entries</span>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="p-3">Ticket No.</th>
                    <th className="p-3">Subject</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Priority</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Person in charge</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket, index) => (
                    <tr key={ticket.id} className={index % 2 === 1 ? 'bg-red-50' : ''}>
                      <td className="p-3 font-medium text-blue-600">{ticket.id}</td>
                      <td className="p-3">{ticket.subject}</td>
                      <td className="p-3">{ticket.category}</td>
                      <td className={`p-3 ${getPriorityColor(ticket.priority)}`}>{ticket.priority}</td>
                      <td className="p-3">{ticket.date}</td>
                      <td className="p-3">{getStatusBadge(ticket.status)}</td>
                      <td className="p-3">{ticket.assignee}</td>
                      <td className="p-3 relative">
                        <button className="px-2 py-1 border rounded text-sm flex items-center gap-1">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t flex items-center justify-between">
              <div className="text-sm text-gray-600">Showing 1 to 5 of 5 entries</div>
              <div className="flex items-center gap-2">
                <button className="border rounded px-2 py-1" disabled>
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="border rounded px-3 py-1 bg-teal-500 text-white">1</button>
                <button className="border rounded px-2 py-1" disabled>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}