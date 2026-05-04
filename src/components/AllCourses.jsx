"use client";

import { useMemo, useState } from "react";
import CourseCard from "@/components/CourseCard";
import { FaTimes } from "react-icons/fa";
import ScrollReveal from "@/components/ScrollReveal";

const AllCourses = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) return courses;

    return courses.filter((course) =>
      course.title.toLowerCase().includes(term),
    );
  }, [courses, searchTerm]);

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-800">
            All Courses
          </p>
          <h1 className="text-2xl font-bold text-base-content sm:text-3xl">
            Browse Every Course We Offer
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-base-content/70 sm:text-base">
            Explore all available courses and choose the one that matches your
            learning goals.
          </p>
        </div>

        <div className="mb-6">
          <div className="inline-flex w-fit flex-col">
            <label className="mb-2 text-sm font-medium">Search by title</label>
            <div className="relative inline-block w-fit">
              <input
                type="text"
                placeholder="Type a course title..."
                className="input input-bordered w-[280px] max-w-full pr-10 sm:w-[320px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm ? (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-base-content/50 transition hover:bg-base-200 hover:text-base-content"
                  aria-label="Clear search"
                >
                  <FaTimes className="text-sm" />
                </button>
              ) : null}
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <ScrollReveal key={course.id} delay={index * 0.05}>
                <CourseCard course={course} />
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-base-300 bg-base-100 p-8 text-center text-base-content/70">
              No courses found for &quot;{searchTerm}&quot;.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
