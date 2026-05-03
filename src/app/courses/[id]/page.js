"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { useSession } from "@/lib/auth-client";
import Loader from "@/components/Loader";
import courses from "@/data/courses.json";

const curriculum = [
  "Introduction and setup",
  "Core concepts and fundamentals",
  "Hands-on project walkthrough",
  "Best practices and optimization",
  "Final review and next steps",
];
export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { data, isPending } = useSession();
  const user = data?.user;
  const course = courses.find((item) => String(item.id) === String(params.id));
  useEffect(() => {
    if (!isPending && !user) {
      router.replace(`/auth/signin?callbackUrl=/courses/${params.id}`);
    }
  }, [isPending, user, router, params.id]);

  if (isPending || !user) {
    return <Loader />;
  }
  return (
    <section className="bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-base-content"
          >
            <FaArrowLeft />
            Back to Courses
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-base-content/40">
              Course Details
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-base-content sm:text-5xl">
              {course.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-base-content/65">
              {course.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-xl bg-purple-50 px-3 py-1 text-sm font-medium text-purple-800">
                {course.level}
              </span>
              <span className="rounded-xl bg-black/5 px-3 py-1 text-sm font-medium text-base-content">
                {course.category}
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-base-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content/40">
                  Instructor
                </p>
                <p className="mt-3 text-lg font-semibold text-base-content">
                  {course.instructor}
                </p>
              </div>
              <div className="rounded-3xl border border-base-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content/40">
                  Rating
                </p>
                <p className="mt-3 text-lg font-semibold text-purple-800">
                  {course.rating}
                </p>
              </div>
              <div className="rounded-3xl border border-base-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content/40">
                  Duration
                </p>
                <p className="mt-3 text-lg font-semibold text-base-content">
                  {course.duration}
                </p>
              </div>
              <div className="rounded-3xl border border-base-200 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-base-content/40">
                  Category
                </p>
                <p className="mt-3 text-lg font-semibold text-base-content">
                  {course.category}
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-base-200 bg-white shadow-sm">
              <div className="relative h-60 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-base-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-base-content">
                    Course Curriculum
                  </h2>
                </div>
              </div>

              <ul className="mt-6 flex flex-col gap-1 justify-center">
                {curriculum.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-base-200 bg-gray-100 p-2"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-800 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="text-sm font-semibold">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
