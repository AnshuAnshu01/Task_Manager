import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const { isLoggedIn, user, tasks = [] } = useSelector(
    (state) => state.authReducer
  );

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  useEffect(() => {
    document.title = isLoggedIn
      ? `${user?.name}'s Dashboard`
      : "Task Manager | Organize Better";
  }, [isLoggedIn, user]);

  return (
    <MainLayout>
      {!isLoggedIn ? (
        <>
          {/* ---------- Hero Section ---------- */}
          <section className="min-h-[65vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary to-indigo-700 text-white px-4">
            <h1 className="text-4xl font-bold mb-4">
              Manage Tasks. Master Your Day.
            </h1>

            <p className="max-w-xl text-lg text-gray-200 mb-8">
              A minimal task manager designed to help you stay focused,
              organized, and productive every single day.
            </p>

            <Link
              to="/signup"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Start Organizing →
            </Link>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-5xl">
              {[
                {
                  icon: "fa-list-check",
                  title: "Simple Task Flow",
                  desc: "Add, update and manage tasks without clutter.",
                },
                {
                  icon: "fa-bolt",
                  title: "Fast & Secure",
                  desc: "Built with MERN stack for performance & safety.",
                },
                {
                  icon: "fa-brain",
                  title: "Stay Focused",
                  desc: "Clear layout that helps you think better.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl"
                >
                  <i className={`fa-solid ${item.icon} text-3xl mb-3`}></i>
                  <h3 className="font-semibold text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- About Application ---------- */}
          <section className="bg-white py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                About Task Manager
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Task Manager is a productivity-focused web application built
                using the MERN stack. It helps users efficiently organize their
                daily work, track progress, and maintain focus with a clean and
                intuitive interface.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 border rounded-xl hover:shadow transition">
                  <i className="fa-solid fa-layer-group text-3xl text-primary mb-3"></i>
                  <h3 className="font-semibold text-xl mb-2">
                    Organized Workflow
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Keep all your tasks structured and accessible in one place.
                  </p>
                </div>

                <div className="p-6 border rounded-xl hover:shadow transition">
                  <i className="fa-solid fa-shield-halved text-3xl text-primary mb-3"></i>
                  <h3 className="font-semibold text-xl mb-2">
                    Secure & Reliable
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Authentication and protected APIs ensure user data safety.
                  </p>
                </div>

                <div className="p-6 border rounded-xl hover:shadow transition">
                  <i className="fa-solid fa-rocket text-3xl text-primary mb-3"></i>
                  <h3 className="font-semibold text-xl mb-2">
                    High Performance
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Optimized frontend and backend for smooth user experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- Unique Features ---------- */}
          <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                What Makes This App Unique?
              </h2>

              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    icon: "fa-user-check",
                    title: "User-Specific Tasks",
                    desc: "Each user manages their own tasks securely after login.",
                  },
                  {
                    icon: "fa-chart-simple",
                    title: "Task Progress Tracking",
                    desc: "Visual statistics for completed and pending tasks.",
                  },
                  {
                    icon: "fa-pen-to-square",
                    title: "Real-Time Updates",
                    desc: "Add, edit, and update tasks without page reload.",
                  },
                  {
                    icon: "fa-mobile-screen",
                    title: "Fully Responsive",
                    desc: "Optimized for mobile, tablet, and desktop devices.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <i
                      className={`fa-solid ${item.icon} text-2xl text-primary`}
                    ></i>
                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* ---------- Logged-in View ---------- */
        <section className="px-8 py-6">
          {/* Welcome Card */}
          <div className="bg-white shadow rounded-xl p-6 mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold">
                👋 Welcome, {user?.name}
              </h1>
              <p className="text-gray-500 mt-1">{today}</p>
            </div>

            <p className="italic text-gray-600 mt-4 md:mt-0">
              “Small steps every day lead to big results.”
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-indigo-50 p-5 rounded-xl text-center">
              <h2 className="text-3xl font-bold text-indigo-600">
                {tasks.length}
              </h2>
              <p className="text-gray-600">Total Tasks</p>
            </div>

            <div className="bg-green-50 p-5 rounded-xl text-center">
              <h2 className="text-3xl font-bold text-green-600">
                {tasks.filter((t) => t.completed).length}
              </h2>
              <p className="text-gray-600">Completed</p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl text-center">
              <h2 className="text-3xl font-bold text-yellow-600">
                {tasks.filter((t) => !t.completed).length}
              </h2>
              <p className="text-gray-600">Pending</p>
            </div>
          </div>

          <Tasks />
        </section>
      )}

      {/* ---------- Footer ---------- */}
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Task Manager App
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Built with MERN Stack · Designed for productivity
          </p>

          <div className="flex justify-center space-x-6 text-lg mb-4">
            <a href="#" className="hover:text-white">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Task Manager · Crafted with ❤️ by
            Anshuman Panda
          </p>
        </div>
      </footer>
    </MainLayout>
  );
};

export default Home;
