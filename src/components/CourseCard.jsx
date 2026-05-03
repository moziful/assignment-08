import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm">
      <div className="relative h-56 w-full">
        <Image src={course.image} alt={course.title} fill className="object-cover" />
      </div>

      <div className="card-body">
        <div className="flex items-start justify-between gap-3">
          <h2 className="card-title text-lg">{course.title}</h2>
          {course.level ? <span className="badge badge-primary whitespace-nowrap">{course.level}</span> : null}
        </div>

        <p className="text-sm text-base-content/70">Instructor: {course.instructor}</p>
        {course.category ? <p className="text-sm text-base-content/70">Category: {course.category}</p> : null}
        {course.duration ? <p className="text-sm text-base-content/70">Duration: {course.duration}</p> : null}

        <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-purple-800">
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
  );
};

export default CourseCard;
