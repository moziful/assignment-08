import CourseCard from "@/components/CourseCard";
import ScrollReveal from "@/components/ScrollReveal";

const NewReleases = ({ courses }) => {
  const latestCourses = [...courses]
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    .slice(0, 3);

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-800">
            New Releases
          </p>
          <h2 className="text-2xl font-bold text-base-content sm:text-3xl">
            Fresh courses released recently for you to explore
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestCourses.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.08}>
              <CourseCard course={course} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
