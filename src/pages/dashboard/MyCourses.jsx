import { NavLink } from "react-router-dom";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";

const MyCourses = () => {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-800/60 p-10 text-center shadow-2xl backdrop-blur-xl">
        {/* Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-500/10">
          <FaBookOpen className="text-5xl text-blue-400" />
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-bold text-white">No Courses Yet</h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-slate-400">
          It looks like you haven't enrolled in any courses yet. Explore our
          collection of courses and start learning today.
        </p>

        {/* Button */}
        <NavLink
          to="/courses"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
        >
          Browse Courses
          <FaArrowRight />
        </NavLink>

        {/* Bottom Info */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
            <h3 className="text-2xl font-bold text-blue-400">100+</h3>
            <p className="mt-1 text-sm text-slate-400">Courses</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
            <h3 className="text-2xl font-bold text-violet-400">24/7</h3>
            <p className="mt-1 text-sm text-slate-400">Learning Access</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
            <h3 className="text-2xl font-bold text-emerald-400">∞</h3>
            <p className="mt-1 text-sm text-slate-400">Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCourses;
