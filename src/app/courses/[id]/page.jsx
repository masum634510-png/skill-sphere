import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import Image from "next/image"
import { FaClock, FaStar, FaUserAlt } from "react-icons/fa"
import { TbTargetArrow } from "react-icons/tb"
const CourseDetails = async ({ params }) => {
    const { id } = await params
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if (!session) redirect("/login")
    const res = await fetch("https://skill-sphere-gamma.vercel.app/data.json",{cache:"no-store"})
    const data = await res.json()

    const course = data.find((c) => c.id === parseInt(id))

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">

            <Image
                src={course.image}
                alt={course.title}
                width={900}
                height={400}
                className="w-full h-72 object-cover rounded-xl"
            />

            <div className="mt-6 space-y-3">
                <span className="bg-orange-100 text-orange-500 text-sm px-3 py-1 rounded-full">
                    {course.category}
                </span>
                <h1 className="text-3xl font-bold">{course.title}</h1>
                <p className="text-gray-500">{course.description}</p>

                <div className="flex gap-6 text-gray-600">
                    <div className="flex gap-2 items-center">
                        <FaUserAlt color="blue" />
                        <p>{course.instructor}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaClock color="Violet" />
                        <p>{course.duration}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaStar color="orange" />
                        <p>{course.rating}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <TbTargetArrow color="red" />
                        <p>{course.level}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseDetails