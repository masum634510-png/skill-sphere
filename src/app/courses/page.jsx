"use client";
import { useState, useEffect } from "react";
import { FaChalkboardTeacher, FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import Link from "next/link";

const AllCoursesPage = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://skill-sphere-gamma.vercel.app/data.json",{cache:"no-store"})
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filteredCourses = data.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-15 pb-10 w-11/12 mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">🔥 All Courses</h2>
        <p className="text-gray-500">Our highest rated courses loved by thousands of students</p>
        <div className="flex items-center max-w-md mx-auto mt-4 border border-gray-300 rounded-full px-4 py-2 shadow-sm bg-white">
          <input
            type="text"
            placeholder="Search by title, instructor or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-sm"
          />
        </div>
      </div>

      {filteredCourses.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">
          No courses found for<span className="text-orange-400">{searchQuery}</span>"
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.map((course) => (
            <div key={course.id} className="pb-5 flex flex-col rounded-xl overflow-hidden shadow-md">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="px-4 space-y-2 flex flex-col flex-1">
                <span className="bg-orange-100 badge mt-5 badge-sm text-orange-500 w-fit rounded-full">
                  {course.category}
                </span>
                <h2 className="text-xl font-bold">{course.title}</h2>
                <div className="flex gap-2 items-center">
                  <FaChalkboardTeacher color="blue" size={20} />
                  <p className="text-[16px] text-gray-500">{course.instructor}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FiClock />
                  <p className="text-[16px] text-gray-500">{course.duration}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-2 items-center">
                    <FaStar color="orange" />
                    <p>{course.rating}</p>
                  </div>
                  <span className="badge badge-sm bg-pink-500 text-white">{course.level}</span>
                </div>
                <Link href={`/courses/${course.id}`} className="btn btn-sm w-full text-white bg-orange-400 mt-4 mb-3 text-[14px]">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCoursesPage;