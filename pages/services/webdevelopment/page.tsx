import Head from "next/head";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function WebDevelopmentService() {
  return (
    <>
      <Head>
        <title>Web Development Services | Your Company Name</title>
        <meta
          name="description"
          content="Explore our web development services that enhance your business's online presence."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Web Development
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Building robust and scalable web solutions for your business.
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">What is Web Development?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Web development is the process of creating and maintaining websites.
            It encompasses various aspects, including web design, web content
            development, and client-side/server-side scripting.
          </p>
        </div>
      </section>

      {/* Key Features / Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Responsive Design",
                description:
                  "Ensuring your website looks great on all devices.",
                icon: <FaCheckCircle />,
              },
              {
                title: "CMS Integration",
                description:
                  "Seamless integration with platforms like WordPress and Drupal.",
                icon: <FaCheckCircle />,
              },
              {
                title: "E-commerce Solutions",
                description: "Building online stores that drive sales.",
                icon: <FaCheckCircle />,
              },
              {
                title: "SEO Optimization",
                description:
                  "Improving your site's visibility on search engines.",
                icon: <FaCheckCircle />,
              },
              {
                title: "Performance Tuning",
                description: "Optimizing your site for speed and efficiency.",
                icon: <FaCheckCircle />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-3xl text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Benefits of Our Web Development Services
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">
              <FaCheckCircle className="inline text-purple-600" /> Increased
              sales and conversions
            </li>
            <li className="mb-2">
              <FaCheckCircle className="inline text-purple-600" /> Enhanced user
              engagement
            </li>
            <li className="mb-2">
              <FaCheckCircle className="inline text-purple-600" /> Improved
              brand trust and credibility
            </li>
          </ul>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
          <div className="flex flex-col md:flex-row justify-center">
            {["Discovery", "Design", "Development", "Testing", "Launch"].map(
              (step, index) => (
                <div key={index} className="flex-1 p-4">
                  <h3 className="text-2xl font-semibold mb-2">{step}</h3>
                  <p className="text-gray-600">
                    Description of {step.toLowerCase()} phase.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/project1.jpg",
                title: "Project 1",
                description: "Short description of project 1.",
              },
              {
                image: "/images/project2.jpg",
                title: "Project 2",
                description: "Short description of project 2.",
              },
              {
                image: "/images/project3.jpg",
                title: "Project 3",
                description: "Short description of project 3.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <div className="flex flex-col md:flex-row justify-center">
            {[
              { name: "Client 1", testimonial: "Great service and support!" },
              {
                name: "Client 2",
                testimonial: "Our website has never looked better!",
              },
            ].map((client, index) => (
              <div
                key={index}
                className="flex-1 p-4 border rounded-lg shadow-md m-2"
              >
                <p className="text-lg italic">"{client.testimonial}"</p>
                <p className="font-semibold mt-2">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col md:flex-row justify-center">
            {[
              {
                question: "What is web development?",
                answer: "Web development is the process of creating websites.",
              },
              {
                question: "How long does it take to build a website?",
                answer: "It depends on the complexity of the project.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="flex-1 p-4 border rounded-lg shadow-md m-2"
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing or Engagement Models Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Engagement Models</h2>
          <p className="text-lg text-gray-700 mb-8">
            We offer flexible engagement models to suit your needs:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li className="mb-2">Hourly Rate</li>
            <li className="mb-2">Fixed Price Projects</li>
            <li className="mb-2">Custom Projects</li>
          </ul>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap justify-center">
            {["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"].map(
              (tech, index) => (
                <div
                  key={index}
                  className="m-4 p-4 border rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold">{tech}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg mb-8">
          Contact us today to discuss your web development needs.
        </p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
          Talk to Us
        </button>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Quick Inquiry</h2>
          <form className="max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 mb-4 w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 mb-4 w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border p-2 mb-4 w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
