import Card from "./Card";

const stats = [
  { title: "Total Users", value: "12,430", icon: "👥", accent: "bg-violet-100" },
  { title: "Revenue", value: "$48,295", icon: "💰", accent: "bg-emerald-100" },
  { title: "Orders", value: "3,210", icon: "📦", accent: "bg-amber-100" },
  { title: "Pending", value: "142", icon: "⏳", accent: "bg-red-100" },
];

const activity = [
  { user: "Alice", action: "Signed up", date: "Feb 19", status: "Active" },
  { user: "Bob", action: "Made a purchase", date: "Feb 18", status: "Completed" },
  { user: "Carol", action: "Submitted ticket", date: "Feb 17", status: "Pending" },
];

const statusStyles = {
  Active: "bg-emerald-100 text-emerald-700",
  Completed: "bg-blue-100 text-blue-700",
  Pending: "bg-amber-100 text-amber-700",
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {stats.map((stat, i) => (
            <Card key={i} {...stat} />
          ))}
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">Recent Activity</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {["User", "Action", "Date", "Status"].map((h) => (
                    <th
                      key={h}
                      className="text-left text-xs font-semibold text-gray-400 uppercase tracking-widest pb-3 pr-6"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activity.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="py-4 pr-6 font-medium text-gray-800">{row.user}</td>
                    <td className="py-4 pr-6 text-gray-600">{row.action}</td>
                    <td className="py-4 pr-6 text-gray-500">{row.date}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}