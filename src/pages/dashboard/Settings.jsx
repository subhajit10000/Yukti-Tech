import { useState } from "react";
import { FaUserCog, FaLock, FaBell, FaMoon, FaSave } from "react-icons/fa";

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotification: true,
    publicProfile: false,
    darkMode: true,
    twoFactorAuth: false,

    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (e) => {
    const { name, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Settings saved successfully!");
  };

  return (
    <section className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Header */}

        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            Account Settings
          </p>

          <h1 className="mt-2 text-4xl font-bold">Settings</h1>

          <p className="mt-3 text-slate-400">
            Manage your profile, security, notifications and appearance.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile */}

          <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">
            <div className="mb-6 flex items-center gap-3">
              <FaUserCog className="text-2xl text-blue-400" />
              <h2 className="text-2xl font-semibold">Profile Settings</h2>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-900 p-4">
              <div>
                <h3 className="font-medium">Public Profile</h3>

                <p className="text-sm text-slate-400">
                  Allow others to view your profile.
                </p>
              </div>

              <input
                type="checkbox"
                name="publicProfile"
                checked={settings.publicProfile}
                onChange={handleToggle}
                className="h-5 w-5 accent-blue-500"
              />
            </div>
          </div>

          {/* Notifications */}

          <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">
            <div className="mb-6 flex items-center gap-3">
              <FaBell className="text-2xl text-yellow-400" />
              <h2 className="text-2xl font-semibold">Notifications</h2>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
              <div>
                <h3 className="font-medium">Email Notifications</h3>

                <p className="text-sm text-slate-400">
                  Receive updates about courses and announcements.
                </p>
              </div>

              <input
                type="checkbox"
                name="emailNotification"
                checked={settings.emailNotification}
                onChange={handleToggle}
                className="h-5 w-5 accent-blue-500"
              />
            </div>
          </div>

          {/* Security */}

          <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">
            <div className="mb-6 flex items-center gap-3">
              <FaLock className="text-2xl text-red-400" />
              <h2 className="text-2xl font-semibold">Security</h2>
            </div>

            <div className="space-y-5">
              <input
                type="password"
                placeholder="Current Password"
                name="currentPassword"
                value={settings.currentPassword}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 outline-none focus:border-blue-500"
              />

              <input
                type="password"
                placeholder="New Password"
                name="newPassword"
                value={settings.newPassword}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 outline-none focus:border-blue-500"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={settings.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 outline-none focus:border-blue-500"
              />

              <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>

                  <p className="text-sm text-slate-400">
                    Improve account security with 2FA.
                  </p>
                </div>

                <input
                  type="checkbox"
                  name="twoFactorAuth"
                  checked={settings.twoFactorAuth}
                  onChange={handleToggle}
                  className="h-5 w-5 accent-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Appearance */}

          <div className="rounded-2xl border border-white/10 bg-slate-800 p-6">
            <div className="mb-6 flex items-center gap-3">
              <FaMoon className="text-2xl text-indigo-400" />
              <h2 className="text-2xl font-semibold">Appearance</h2>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4">
              <div>
                <h3 className="font-medium">Dark Mode</h3>

                <p className="text-sm text-slate-400">
                  Use the dark theme throughout the application.
                </p>
              </div>

              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleToggle}
                className="h-5 w-5 accent-blue-500"
              />
            </div>
          </div>

          {/* Button */}

          <button
            type="submit"
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold transition hover:scale-105"
          >
            <FaSave />
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
};

export default Settings;
