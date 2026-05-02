import { CiStar } from "react-icons/ci";
import { FaChalkboardTeacher, FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import Link from "next/link";

const PopularCourses = async () => {
  const res = await fetch("http://localhost:3000/data.json",{cache:"no-store"})
  const data = await res.json()
  const topCourse = data.sort((a, b) => b.rating - a.rating).slice(0, 3)
  

  return (
    <div className="pt-15 pb-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">🔥 Popular Courses</h2>
        <p className="text-gray-500">Our highest rated courses loved by thousands of students</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          topCourse.map((course) => <div key={course.id} className="pb-5 flex flex-col rounded-xl overflow-hidden shadow-md">
            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="px-4 space-y-2 flex flex-col flex-1">
              <span className="bg-orange-100 badge mt-5 badge-sm text-orange-500 w-fit rounded-full ">{course.category}</span>
              <h2 className="text-xl font-bold ">{course.title}</h2>
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
                <div>
                  <span className="badge badge-sm bg-pink-500 text-white">
                  {course.level}
                </span>
                </div>
              </div>
              <Link href={`/courses/${course.id}`} className="btn btn-sm w-full text-white bg-orange-400 mt-4 mb-3 text-[14px]">
                     View Details
              </Link>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default PopularCourses;