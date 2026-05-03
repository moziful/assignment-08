import CourseCard from "@/components/CourseCard";

const AllCourses = ({ courses }) => {
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

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
