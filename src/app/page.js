import HeroSection from "@/components/HeroSection";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";
import courses from "@/data/courses.json";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <PopularCourses courses={courses} />
      <LearningTips />
      <TopInstructors />
    </div>
  );
}
