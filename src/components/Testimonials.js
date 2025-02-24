import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { posts } from "../data/testimonials";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-white0 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Testimoni Pelanggan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Apa kata mereka yang telah menggunakan layanan Kayla Catering?
          </p>
        </div>

        {/* List of Testimonials */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative flex flex-col rounded-2xl bg-white p-6 shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Date & Category */}
              <div className="flex items-center gap-x-3 text-xs text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
                <span className="rounded-full bg-red-200 px-3 py-1.5 text-xs font-medium">
                  {post.category.title}
                </span>
              </div>

              {/* Testimonial Content */}
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                {post.description}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {post.author.name}
                  </p>
                  <p className="text-sm text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
