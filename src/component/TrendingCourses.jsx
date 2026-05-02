const trending = [
    {
        title: "Next.js 15 Complete Guide",
        category: "Development",
        instructor: "John Doe",
        badge: "🔥 Trending",
        badgeColor: "bg-red-100 text-red-500",
        students: 3200,
        price: "Free",
    },
    {
        title: "Figma UI Design Masterclass",
        category: "Design",
        instructor: "Sarah Ahmed",
        badge: "🆕 New",
        badgeColor: "bg-blue-100 text-blue-500",
        students: 1800,
        price: "Free",
    },
    {
        title: "Python for Data Science",
        category: "Data Science",
        instructor: "Emily Chen",
        badge: "🔥 Trending",
        badgeColor: "bg-red-100 text-red-500",
        students: 4100,
        price: "Free",
    },
    {
        title: "Social Media Marketing 2025",
        category: "Marketing",
        instructor: "Rahim Uddin",
        badge: "🆕 New",
        badgeColor: "bg-blue-100 text-blue-500",
        students: 950,
        price: "Free",
    },
]

const TrendingCourses = () => {
    return (
        <div className="py-14">
            <div className="text-center mb-9">
                <h2 className="text-3xl font-bold mb-2">🚀 Trending & New Releases</h2>
                <p className="text-gray-500">Stay ahead with the latest and most popular courses</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trending.map((course, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${course.badgeColor}`}>
                                {course.badge}
                            </span>
                            <span className="text-xs bg-orange-100 text-orange-500 px-2 py-1 rounded-full">
                                {course.category}
                            </span>
                        </div>
                        <h3 className="text-base font-semibold leading-snug">{course.title}</h3>
                        <p className="text-sm text-gray-500">👨‍🏫 {course.instructor}</p>
                        <div className="flex justify-between items-center mt-auto text-sm text-gray-400">
                            <span>👥 {course.students.toLocaleString()} students</span>
                            <span className="text-green-500 font-semibold">{course.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingCourses