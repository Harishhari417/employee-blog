import { useState, useRef, useEffect } from "react";

export default function EmployeeBlog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const scrollLeft = sliderRef.current.scrollLeft;
    const width = sliderRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-6 md:py-10">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-xl p-4 sm:p-6 md:p-10">

        {/* ---------------- HEADER ---------------- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Category & Date */}
            <div className="flex flex-wrap items-center space-x-3 text-sm text-gray-500 mb-4">
              <span>March 20, 2025</span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full font-medium">
                Engagement
              </span>
            </div>

            {/* Blog Title */}
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900 font-aeonik">
              <span className="block">Why Employee</span>
              <span className="block">Engagement Matters</span>
              <span className="block">And How to Make It Thrive</span>
            </h1>

            <p className="mt-3 text-base sm:text-lg text-gray-700">
              Creating a Culture of Open Communication and Motivation in the Workplace
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 mt-4">
              <img
                src="WhatsApp Image 2025-12-08 at 10.21.19 AM.jpeg"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Harish M</p>
                <p className="text-xs text-gray-500">Employee Engagement Specialist</p>
              </div>
            </div>

            {/* Published Info */}
            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm text-gray-500">
              <span>Published on December 10, 2025</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>6 min read</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="blog_engagement_2_lg@2x.webp"
              alt="Employee engagement"
              className="w-full h-auto max-w-md rounded-xl shadow-md object-cover"
            />
          </div>
        </section>

        {/* ---------------- ARTICLE CONTENT ---------------- */}
        <div className="flex justify-center mt-12 md:mt-20">
          <div className="text-gray-700 leading-relaxed space-y-6 w-full max-w-3xl px-1 sm:px-3">

            <p className="text-base sm:text-lg">
              Employee engagement isn’t just a trendy term—it’s what helps businesses thrive. When employees are engaged, they feel more connected to their work, their team, and the company’s goals. This sense of connection doesn’t just boost their productivity and satisfaction, but it also keeps them around longer. Research shows that engaged employees are more likely to stick with their company, and they’re also 21% more productive. The results are clear: engaged employees are happier, more innovative, and contribute to a more positive work environment.
            </p>

            <p className="text-base sm:text-lg">
              But what makes employee engagement so powerful? It’s all about emotional connection. When employees feel truly connected to their role, they go above and beyond. It’s not just about completing tasks—it's about wanting to contribute and see the company succeed.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10">
              The Power of Two-Way Communication
            </h2>

            <p className="text-base sm:text-lg">
              One of the best ways to boost engagement is through two-way communication. It’s not just about leaders telling employees what to do—it’s about creating a space where everyone’s voice matters. When employees feel like they can share their thoughts, ideas, and feedback, they feel valued and heard. This kind of open communication builds trust and makes employees more invested in the organization.
            </p>

            {/* IMAGE */}
            <div className="my-8 flex justify-center">
              <img
                src="blog_engagement_2_inline_lg@2x.webp"
                className="rounded-xl shadow-md w-full max-w-4xl object-cover"
              />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10">
              How to Foster Two-Way Communication
            </h2>

            <p className="text-base sm:text-lg mb-4">
              Creating an environment where two-way communication thrives requires consistent effort and the right tools. Here are some key strategies:
            </p>

            <ul className="space-y-3 list-disc pl-6 text-base sm:text-lg">
              <li><strong>Make feedback easy and accessible</strong> – Employees should have multiple channels to share their thoughts.</li>
              <li><strong>Encourage open dialogue</strong> – Leaders should actively invite input and show that feedback is valued.</li>
              <li><strong>Use real-time communication tools</strong> – Instant messaging and forums help break barriers.</li>
              <li><strong>Follow up and take action</strong> – Communication should lead to change.</li>
            </ul>

            <div className="my-8 flex justify-center">
              <img
                src="blog_engagement_2_inline_2_lg@2x.webp"
                className="rounded-xl shadow-md w-full max-w-4xl object-cover"
              />
            </div>

            <p className="text-base sm:text-lg">
              By prioritizing communication and making it a core part of your company culture, you create an environment where employees feel valued, motivated, and committed to success.
            </p>

            {/* SOURCES */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Sources</h3>
              <ul className="space-y-2 text-base">
                <li>
                  <a
                    href="https://wellable.co/blog/employee-engagement-statistics-you-should-know"
                    className="text-blue-600 hover:underline"
                  >
                    https://wellable.co/blog/employee-engagement-statistics-you-should-know
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.peoplebox.ai/blog/employee-engagement-statistics"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.peoplebox.ai/blog/employee-engagement-statistics
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.forbes.com/sites/nazbeheshti/2019/01/16/10-timely-statistics-about-the-connection-between-employee-engagement-and-wellness"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.forbes.com/sites/nazbeheshti/2019/01/16/10-timely-statistics-about-the-connection-between-employee-engagement-and-wellness
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ---------------- MORE POSTS SLIDER ---------------- */}
        <section className="mt-16 bg-gray-100 py-10 rounded-xl">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More Posts</h2>

            <div
              ref={sliderRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:snap-none"
            >
              {[1, 2, 3].map((item) => (
                <article
                  key={item}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center transition"
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-3">
                    <img
                      src={`https://images.pexels.com/photos/${3182812 + item}/pexels-photo-${3182812 + item}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={`Related article ${item}`}
                    />
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold uppercase">Engagement</span>
                  <h3 className="text-base sm:text-lg font-semibold mt-1">
                    How to Build a Stronger Workplace Culture
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Discover practical strategies for creating an engaged and motivated workforce.
                  </p>
                </article>
              ))}
            </div>

            {/* MOBILE DOTS */}
            <div className="flex justify-center mt-6 space-x-2 md:hidden">
              {[0, 1, 2].map((dot, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full cursor-pointer transition ${
                    activeIndex === idx ? "bg-emerald-600 scale-110" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section className="w-full py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get your app in a few days. Let's get in touch!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            We love demonstrating our platform. Please don't hesitate to contact us if you're interested.
          </p>
          <button className="px-6 py-3 bg-emerald-500 rounded-xl text-lg font-semibold hover:bg-emerald-400 transition">
            Book a demo
          </button>
        </section>

      </div>
    </div>
  );
}
