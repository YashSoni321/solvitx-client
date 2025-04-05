import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              alt="Profile picture of Dmitro Morinov"
              className="rounded-full"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/y4k26WHpccbz-jDQha-cJAtS8QV_9_2bFDbmzIW8ips.jpg"
              width="50"
            />
            <div className="ml-4">
              <h1 className="text-xl font-bold">
                Yash Soni
                <span className="text-red-500">•</span>
              </h1>
              <p className="text-gray-500">Your personal manager</p>
              <p className="mt-2">contact@solvitx.com</p>
              <p>+1 (234) 567-89-00</p>
              <button className="mt-2 px-4 py-2 bg-gray-200 rounded-full">
                Book a call
              </button>
            </div>
          </div>
          <div>
            <button className="text-2xl">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-5xl font-bold">
            Now it’s time for collaborate and fill the brief, sure we
            <span className="text-red-500">include all details</span>
          </h2>
          <button className="mt-8 px-8 py-4 bg-red-500 text-white rounded-full text-lg">
            Fill in the brief
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="font-bold">SOLVITX© ON PRODUCTION</p>
              <div className="mt-4">
                <a className="block" href="#">
                  Behance
                </a>
                <a className="block" href="#">
                  Dribbble
                </a>
                <a className="block" href="#">
                  Telegram
                </a>
              </div>
            </div>
            <div>
              <p className="font-bold">About Agency</p>
              <div className="mt-4">
                <a className="block" href="#">
                  Home
                </a>
                <a className="block" href="#">
                  Work
                </a>
                <a className="block" href="#">
                  About
                </a>
              </div>
              <p className="font-bold mt-8">Template Page</p>
              <div className="mt-4">
                <a className="block" href="#">
                  License
                </a>
                <a className="block" href="#">
                  Changelog
                </a>
                <a className="block" href="#">
                  Style Guide
                </a>
                <a className="block" href="#">
                  Start Here
                </a>
              </div>
            </div>
            <div>
              <p className="font-bold">Services</p>
              <div className="mt-4">
                <a className="block" href="#">
                  Services
                </a>
                <a className="block" href="#">
                  Blog
                </a>
                <a className="block" href="#">
                  Blog Post
                </a>
                <a className="block" href="#">
                  Contact V1
                </a>
                <a className="block" href="#">
                  Contact V2
                </a>
                <a className="block" href="#">
                  Shop
                </a>
                <a className="block" href="#">
                  Team
                </a>
              </div>
            </div>
            <div>
              <p className="font-bold">
                For those interested in business, technology, creativity and
                design.
              </p>
              <div className="mt-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-full"
                  placeholder="YOUR EMAIL"
                  type="email"
                />
                <button className="mt-2 px-4 py-2 bg-gray-200 rounded-full">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
              <p className="mt-4 text-gray-500 text-sm">
                By signing up, you agree to our Privacy Policy and agree to
                receive updates from our company.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2025, SOLVITX Powered by{" "}
            <a href="https://techieyash.com/" target="_blank">
              TechieYash
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
