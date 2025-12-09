import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { EmployeeCard } from "../types/blog";

const posts = [
    {
        id: 1,
        title: "How to Build a Stronger Workplace Culture",
        category: "Company Culture",
        image: "https://images.pexels.com/photos/3182813/pexels-photo-3182813.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Discover practical strategies for creating an engaged and motivated workforce.",
        date: "31 Mar 2025",
    },
    {
        id: 2,
        title: "Reducing Employee Turnover",
        category: "Employee Retention",
        image: "https://images.pexels.com/photos/3182814/pexels-photo-3182814.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Learn effective techniques to retain top talent.",
        date: "25 Mar 2025",
    },
    {
        id: 3,
        title: "Enhancing Employee Wellbeing",
        category: "Employee Wellbeing",
        image: "https://images.pexels.com/photos/3182815/pexels-photo-3182815.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Practical tips to improve workplace wellbeing.",
        date: "20 Mar 2025",
    },
    {
        id: 4,
        title: "Management Best Practices",
        category: "Management",
        image: "https://images.pexels.com/photos/3182816/pexels-photo-3182816.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Learn how to manage teams effectively.",
        date: "18 Mar 2025",
    },
    {
        id: 5,
        title: "Customer Experience Strategies",
        category: "Customer Experience",
        image: "https://images.pexels.com/photos/3182817/pexels-photo-3182817.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Tips to enhance your customer experience.",
        date: "15 Mar 2025",
    },

    // Add more posts to make 9
];

export default function BlogListPage({ card }: { card?: EmployeeCard }) {
    const categories = [
        "All",
        "Management",
        "Employee Retention",
        "Employee Wellbeing",
        "Company Culture",
        "Customer Experience",
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts =
        selectedCategory === "All"
            ? posts
            : posts.filter((post) => post.category === selectedCategory);

    return (
        <div className="bg-white-50 min-h-screen py-6 md:py-10">

            {/* --------- HEADER MAIN CARD (Styled to match the image) --------- */}

            <div className="max-w-7xl mx-auto bg-white px-4 pt-10 pb-16 md:px-10 md:pt-16 md:pb-20">
                <section className="max-w-3xl"> {/* Constrain the width of the text block to match the image's layout */}

                    {/* LEFT CONTENT */}
                    <div>
                        {/* Category Tag: Changed to light grey text, lowercase, and mb-2 for tighter spacing */}
                        <div className="text-sm text-gray-500 mb-2">
                            <span className="capitalize">Blog</span>
                        </div>

                        {/* Main Heading: Increased size and ensured deep black color */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
                            Welcome to our blog
                        </h1>

                        {/* Subtitle/Description: Adjusted color, weight, and margin */}
                        <p className="mt-4 text-lg md:text-xl text-gray-600">
                            Get to know us as we share insights on our product, values and vision.
                        </p>
                    </div>
                </section>
            </div>



            {/* FULL WIDTH GREY BACKGROUND */}
            <div className="w-full bg-gray-100 py-14">

                {/* CENTERED BLOG CARD (Width reduced from max-w-6xl to max-w-4xl) */}
                <div className="max-w-4xl mx-auto px-4">

                    {/* CLICKABLE CARD */}
                    <Link
                        to="/blog/1"
                        className="block hover:opacity-95 transition"
                    >

                        {/* WHITE CARD */}
                        <div className="bg-white rounded-[1.5rem]  overflow-hidden flex flex-col md:flex-row shadow-sm">

                            {/* LEFT IMAGE (Width increased from md:w-1/2 to md:w-3/5) */}
                            <div className="md:w-3/5 w-full md:h-[420px] h-[320px]">
                                <img
                                    src="/blog_engagement_2_inline_lg@2x.webp"
                                    alt="Two employees smiling and working at a cash register"
                                    className="w-full h-full object-cover rounded-t-[1.5rem] md:rounded-l-[1.5rem] md:rounded-t-none"
                                />
                            </div>

                            {/* RIGHT CONTENT (Width reduced from md:w-1/2 to md:w-2/5) */}
                            <div className="md:w-2/5 w-full p-10 md:p-12 flex flex-col justify-center">

                                {/* DATE + badge */}
                                <div className="flex items-center justify-between mb-6">

                                    {/* DATE */}
                                    <div className="flex items-center text-gray-600 gap-2 text-sm">
                                        <span className="text-lg">🗓</span>
                                        <span>31 Mar 2025</span>
                                    </div>

                                    {/* LATEST BADGE */}
                                    <span className="px-5 py-1 border border-gray-900 rounded-full text-xs font-medium text-gray-900">
                                        Latest
                                    </span>
                                </div>

                                {/* TAG */}
                                <div className="mb-2">
                                    <span className="text-xs text-gray-500 font-medium">
                                        Employee Retention
                                    </span>
                                </div>

                                {/* TITLE */}
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-3">
                                    Keys to Reducing Turnover and Keeping Employees Motivated
                                </h2>

                                {/* SUBTITLE */}
                                <p className="text-gray-600 text-base md:text-lg mb-8">
                                    Proven Strategies to Build a Loyal, Engaged, and Productive Workforce
                                </p>

                                {/* READ MORE */}
                                <div className="inline-flex items-center gap-2 text-gray-900 font-medium text-base hover:opacity-75 transition">
                                    Read more
                                    <span className="text-xl">→</span>
                                </div>

                            </div>
                        </div>
                    </Link>

                </div>
            </div>




            <section className="mt-16 pt-12 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">

                    {/* HEADER AND CATEGORIES WRAPPER (No changes needed here) */}
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-3xl font-bold text-gray-900">More posts</h2>
                            <span className="text-gray-500 font-medium text-lg">Category:</span>
                        </div>

                        {/* Categories (No changes needed here) */}
                        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                            {/* All button */}
                            <button
                                onClick={() => setSelectedCategory("All")}
                                className={`
            flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition
            ${selectedCategory === "All" ? "bg-gray-900 text-white" : "bg-gray-900 text-white hover:bg-gray-700"}
          `}
                            >
                                All
                            </button>

                            {/* Other categories */}
                            {categories.filter(c => c !== 'All').map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`
              flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition
              ${selectedCategory === category
                                            ? "bg-gray-900 text-white"
                                            : "bg-white border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                                        }
            `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                   {/* 3x3 Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-12">
  {filteredPosts.map((post) => (
    <article
      key={post.id}
      className="
        group cursor-pointer bg-white rounded-3xl 
        hover:shadow-lg transition-all duration-300
        overflow-hidden
        flex flex-col
      "
    >
      {/* IMAGE (FULL BLEED, CROPPED, FIXED HEIGHT) */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow">

        {/* CATEGORY TAG */}
        <span className="bg-gray-100 text-xs text-gray-700 font-medium px-3 py-1 rounded-md mb-3 inline-block">
          {post.category}
        </span>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-3 group-hover:text-emerald-600 transition-colors">
          {post.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 mb-4">
          {post.description}
        </p>

        {/* DATE (bottom-aligned) */}
        <div className="text-sm text-gray-500 mt-auto">
          {post.date}
        </div>

      </div>
    </article>
  ))}
</div>

                </div>
            </section>



            {/* ---------------- GET IN TOUCH SECTION ---------------- */}
            <section className="relative w-full py-20 md:py-28 mt-20 bg-white overflow-hidden">
                <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Get your app in a few days.
                        <br />
                        <span className="relative inline-block mt-1">
                            Let's get in touch!
                            <span className="absolute left-0 right-0 -bottom-2 border-b-4 border-emerald-400 w-36 sm:w-44 mx-auto"></span>
                        </span>
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-10 px-2">
                        We love demonstrating our platform. Please don't hesitate to contact us if you're interested.
                    </p>

                    <button
                        className="
          w-full sm:w-auto 
          px-6 sm:px-8 py-3 
          bg-green-500 text-black rounded-xl 
          text-base sm:text-lg font-semibold 
          shadow-md hover:bg-green-300 transition
        "
                    >
                        Book a demo
                    </button>
                </div>
            </section>


        </div>
    );
}
