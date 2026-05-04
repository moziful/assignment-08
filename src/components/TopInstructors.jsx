import courses from "@/data/courses.json";
import ScrollReveal from "@/components/ScrollReveal";

const instructors = Array.from(
  new Map(
    courses.map((course) => [
      course.instructor,
      {
        name: course.instructor,
        role: `${course.category} Instructor`,
        bio: `Teaches ${course.category.toLowerCase()} through ${course.title.toLowerCase()}.`,
      },
    ]),
  ).values(),
).slice(0, 4);

const TopInstructors = () => {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-800">
            Top Instructors
          </p>
          <h2 className="text-2xl font-bold text-base-content sm:text-3xl">
            Meet the people behind the courses
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {instructors.map((instructor, index) => (
            <ScrollReveal key={instructor.name} delay={index * 0.08}>
              <div className="rounded-xl border border-base-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-base-content">
                  {instructor.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-purple-800">
                  {instructor.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-base-content/70">
                  {instructor.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
