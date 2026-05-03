import Image from "next/image";
import Link from "next/link";

const PopularCourses = ({ courses }) => {
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-800">
            Popular Courses
          </p>
          <h2 className="text-2xl font-bold text-base-content sm:text-3xl">
            Our Most Popular Courses
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {topCourses.map((course) => (
            <div
              key={course.id}
              className="card bg-base-100 shadow-sm border border-base-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover rounded-tl-lg rounded-tr-lg"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title text-lg">{course.title}</h3>
                <p className="text-sm text-base-content/70">
                  Instructor: {course.instructor}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-800">
                  Rating: {course.rating}
                </div>
                <div className="card-actions mt-4">
                  <Link
                    href={`/courses/${course.id}`}
                    className="btn bg-purple-800 text-white font-semibold btn-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
