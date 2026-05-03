import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import courses from "../../public/courses.json";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <PopularCourses courses={courses} />
    </div>
  );
}
