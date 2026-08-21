import {
  FaBookOpen,
  FaUsers,
  FaUserGraduate,
  FaArrowTrendUp,
} from "react-icons/fa6";
import { UseAuth } from "../../context/AuthContext";
import { UseContext } from "../../context/CourseContext";

const Dashboard = () => {
  const { currentUser, users } = UseAuth();
  const { courses } = UseContext();

  const stats = [
    {
      title: "Available Courses",
      value: courses?.length || 0,
      icon: <FaBookOpen />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Students",
      value: users?.length || 0,
      icon: <FaUsers />,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "My Learning",
      value: currentUser ? 1 : 0,
      icon: <FaUserGraduate />,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Progress",
      value: "78%",
      icon: <FaArrowTrendUp />,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="space-y-8 text-white">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-violet-600/20 blur-3xl"></div>

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-blue-400 font-medium">Dashboard</p>

            <h1 className="mt-2 text-4xl font-bold">
              Welcome Back,
              <span className="text-blue-400">
                {" "}
                {currentUser?.name || "Student"} 👋
              </span>
            </h1>

            <p className="mt-3 text-slate-400">{currentUser?.email}</p>

            <p className="mt-6 max-w-xl text-slate-300">
              Continue your learning journey, explore new courses, and track
              your progress from one place.
            </p>
          </div>

          {/* Avatar */}
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-4xl font-bold shadow-2xl">
            {currentUser?.name?.charAt(0).toUpperCase() || "S"}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${item.color} text-2xl shadow-lg`}
            >
              {item.icon}
            </div>

            <h3 className="mt-5 text-slate-400">{item.title}</h3>

            <h2 className="mt-2 text-4xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-lg">
        <h2 className="mb-6 text-2xl font-bold">Quick Overview</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6">
            <h3 className="text-lg font-semibold">Courses</h3>

            <p className="mt-2 text-blue-100">
              Browse and enroll in the latest learning programs.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 p-6">
            <h3 className="text-lg font-semibold">Profile</h3>

            <p className="mt-2 text-violet-100">
              Manage your personal information and account settings.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 p-6">
            <h3 className="text-lg font-semibold">Learning</h3>

            <p className="mt-2 text-green-100">
              Track your completed lessons and continue where you left off.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
