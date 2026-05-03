import AllCourses from "@/components/AllCourses";
import courses from "../../../public/courses.json";

export default function CoursesPage() {
  return (
    <div className="bg-gray-100">
      <AllCourses courses={courses} />
    </div>
  );
}
