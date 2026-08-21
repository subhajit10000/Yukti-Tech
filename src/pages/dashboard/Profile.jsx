import {
  FaUserCircle,
  FaEnvelope,
  FaUser,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { UseAuth } from "../../context/AuthContext";

const Profile = () => {
  const { currentUser } = UseAuth();

  if (!currentUser) {
    return (
      <section className="flex min-h-[80vh] items-center justify-center bg-slate-900 px-6">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-800/70 p-10 text-center backdrop-blur-xl">
          <FaUserCircle className="mx-auto text-8xl text-slate-500" />

          <h2 className="mt-6 text-3xl font-bold text-white">No User Found</h2>

          <p className="mt-3 text-slate-400">
            Please login to access your profile.
          </p>
        </div>
      </section>
    );
  }

  const profileItems = [
    {
      icon: <FaUser />,
      title: "Full Name",
      value: currentUser.name,
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      value: currentUser.email,
    },
    {
      icon: <FaShieldAlt />,
      title: "Role",
      value: currentUser.role || "Student",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Member Since",
      value: "June 2026",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 p-8 shadow-xl">
          <div className="absolute -top-10 right-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl"></div>

          <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-between">
            <div className="flex items-center gap-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-4xl font-bold shadow-2xl">
                {currentUser.name?.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="uppercase tracking-widest text-blue-400">
                  My Profile
                </p>

                <h1 className="mt-2 text-4xl font-bold">{currentUser.name}</h1>

                <p className="mt-2 text-slate-400">{currentUser.email}</p>

                <span className="mt-4 inline-flex rounded-full bg-green-500/20 px-4 py-1 text-sm font-medium text-green-400">
                  ● Active Account
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Information */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Personal Information</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {profileItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 backdrop-blur-lg transition hover:border-blue-500/50 hover:bg-slate-800"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-500/20 p-4 text-2xl text-blue-400">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">{item.title}</p>

                    <h3 className="mt-1 text-lg font-semibold">{item.value}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Summary */}
        <div className="rounded-3xl border border-white/10 bg-slate-800/60 p-8 backdrop-blur-lg">
          <h2 className="mb-6 text-2xl font-bold">Account Summary</h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6">
              <h3 className="text-lg font-semibold">Role</h3>
              <p className="mt-2 text-3xl font-bold">
                {currentUser.role || "Student"}
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-purple-500 p-6">
              <h3 className="text-lg font-semibold">Status</h3>
              <p className="mt-2 text-3xl font-bold">Active</p>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 p-6">
              <h3 className="text-lg font-semibold">Account</h3>
              <p className="mt-2 text-3xl font-bold">Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
