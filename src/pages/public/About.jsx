import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg"
import { FaBullseye, FaLightbulb, } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import placements from "../../data/placement.js";

const About = () => {
  return (
    <div className="bg-slate-50">
      <div className="relative h-105 overflow-hidden ">
        <img src={about1} alt="About" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-900/70 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            About{" "}
            <span className="text-yellow-400">Us</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-200">
            Empowering students with quality education, practical skills,
            and expert mentorship to build successful careers in technology.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20 bg-slate-950">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div className="relative group">

            <img
              src={about2}
              alt=""
              className="rounded-3xl shadow-2xl w-full h-137.5 object-cover"
            />

          </div>

          <div>


            <h1 className="text-4xl font-bold text-white mt-6 leading-tight">
              Building Future Professionals Through
              <span className="text-blue-600">
                {" "}
                Modern Learning
              </span>
            </h1>



            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              <div className="bg-green-900 rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition duration-300">
                <FaBullseye className="text-4xl text-white mb-4" />
                <h3 className="font-bold text-2xl mb-2">Our Mission</h3>
                <p className="text-white font-bold">
                  Deliver accessible and industry-focused education for
                  every learner.
                </p>
              </div>

              <div className="bg-green-400 text-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition duration-300">
                <FaLightbulb className="text-black text-4xl mb-4" />
                <h3 className="font-bold text-2xl mb-2 text-black">Our Vision</h3>
                <p className="text-black font-bold">
                  Inspire innovation and prepare students for the future of
                  technology.
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-linear-to-br from-slate-500 to-slate-800 p-10 text-white shadow-xl hover:-translate-y-2 duration-300">
            <h2 className="text-3xl font-bold">
              Why Choose Us?
            </h2>

            <p className="mt-5 text-slate-300 leading-8">
              We provide industry-standard learning materials,
              experienced mentors, real-world projects, certificates,
              and lifetime access to course content.
            </p>
            <NavLink
              to="/courses"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Courses
            </NavLink>
          </div>

          <div className="rounded-3xl bg-linear-to-br from-cyan-600 to-blue-900 p-10 text-white shadow-xl hover:-translate-y-2 duration-300">

            <h2 className="text-3xl font-bold">
              Build Your Future
            </h2>

            <p className="mt-5 leading-8">
              Start learning today and unlock new opportunities with
              practical knowledge, expert guidance, and hands-on
              experience.
            </p>

            <div className="mt-10 flex gap-6">

              <div>
                <h3 className="text-4xl font-bold">100+</h3>
                <p>Courses</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">50+</h3>
                <p>Mentors</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">10K+</h3>
                <p>Students</p>
              </div>

            </div>

          </div>
        </div>

      </section>



      <section className="bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-3xl text-center font-bold mb-10">
            Our Success Stories
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {placements.map((placement) => (
              <div
                key={placement.id}
                className="bg-slate-100 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition duration-300"
              >
                <img
                  src={placement.image}
                  alt={placement.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />

                <h2 className="text-xl font-bold text-black">
                  {placement.name}
                </h2>

                <p className="text-black m-2 text-xl">
                  {placement.company}
                </p>

                <img src={placement.icon} className="w-10 h-10 mx-auto mb-2" />

                <p className="text-black font-semibold mt-1">
                  {placement.lpa}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;