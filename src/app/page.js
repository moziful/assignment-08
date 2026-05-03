import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import fs from "fs/promises";
import path from "path";

export default async function Home() {
  const filePath = path.join(process.cwd(), "public", "courses.json");
  const coursesData = await fs.readFile(filePath, "utf8");
  const courses = JSON.parse(coursesData);

  return (
    <div className="bg-zinc-50">
      <HeroSection />
      <PopularCourses courses={courses} />
    </div>
  );
}
