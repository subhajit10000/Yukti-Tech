import {
  FaUsers,
  FaBookOpen,
  FaUserShield,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";
import { UseAuth } from "../../context/AuthContext";
import { UseContext } from "../../context/CourseContext";

const AdminPanel = () => {
  const { users, currentUser } = UseAuth();
  const { courses } = UseContext();

  return (
    <section className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">
        {/* Header */}

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 shadow-xl">
          <p className="uppercase tracking-widest text-blue-100">
            Administration
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Welcome, {currentUser?.name}
          </h1>

          <p className="mt-3 text-blue-100">
            Manage users, courses and monitor your learning platform.
          </p>
        </div>

        {/* Statistics */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Users"
            value={users?.length || 0}
            icon={<FaUsers />}
            color="from-blue-500 to-cyan-500"
          />

          <StatCard
            title="Total Courses"
            value={courses?.length || 0}
            icon={<FaBookOpen />}
            color="from-violet-500 to-purple-500"
          />

          <StatCard
            title="Admins"
            value={users?.filter((u) => u.role === "admin").length || 1}
            icon={<FaUserShield />}
            color="from-emerald-500 to-green-500"
          />

          <StatCard
            title="Students"
            value={users?.filter((u) => u.role !== "admin").length || 0}
            icon={<FaGraduationCap />}
            color="from-pink-500 to-rose-500"
          />
        </div>

        {/* Tables */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Users */}

          <div className="rounded-3xl border border-white/10 bg-slate-800 p-6">
            <h2 className="mb-6 text-2xl font-bold">Registered Users</h2>

            <div className="space-y-4">
              {users?.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl bg-slate-900 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <h3 className="font-semibold">{user.name}</h3>

                      <p className="text-sm text-slate-400 flex items-center gap-2">
                        <FaEnvelope />
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.role === "admin"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {user.role || "student"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}

          <div className="rounded-3xl border border-white/10 bg-slate-800 p-6">
            <h2 className="mb-6 text-2xl font-bold">Available Courses</h2>

            <div className="space-y-4">
              {courses?.map((course, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-slate-900 p-5 transition hover:bg-slate-700"
                >
                  <h3 className="text-lg font-semibold">{course.title}</h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {course.description}
                  </p>

                  <div className="mt-4 flex justify-between text-sm text-slate-500">
                    <span>Instructor: {course.instructor || "Unknown"}</span>

                    <span>₹{course.price || "Free"}</span>
                  </div>
                </div>
              ))}

              {courses?.length === 0 && (
                <div className="rounded-xl bg-slate-900 p-6 text-center text-slate-400">
                  No courses available.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-800 p-6 transition hover:-translate-y-1">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r ${color} text-2xl`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-slate-400">{title}</h3>

      <h2 className="mt-2 text-4xl font-bold">{value}</h2>
    </div>
  );
};

export default AdminPanel;
