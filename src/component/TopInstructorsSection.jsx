const instructors = [
    {
        name: "John Doe",
        expertise: "Full Stack Developer",
        courses: 12,
        students: 4500,
        rating: 4.9,
        avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
        name: "Sarah Ahmed",
        expertise: "UI/UX Designer",
        courses: 8,
        students: 3200,
        rating: 4.8,
        avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
        name: "Rahim Uddin",
        expertise: "Digital Marketer",
        courses: 6,
        students: 2800,
        rating: 4.7,
        avatar: "https://i.pravatar.cc/150?img=53",
    },
    {
        name: "Emily Chen",
        expertise: "Data Scientist",
        courses: 10,
        students: 5100,
        rating: 4.9,
        avatar: "https://i.pravatar.cc/150?img=32",
    },
]

const TopInstructors = () => {
    return (
        <div className="py-14">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">🏆 Top Instructors</h2>
                <p className="text-gray-500">Learn from the best minds in the industry</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {instructors.map((ins, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border border-orange-100 shadow-sm hover:shadow-md transition">
                        <img
                            src={ins.avatar}
                            alt={ins.name}
                            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-orange-200"
                        />
                        <h3 className="text-lg font-semibold">{ins.name}</h3>
                        <p className="text-orange-500 text-sm mb-3">{ins.expertise}</p>
                        <div className="flex justify-center gap-4 text-sm text-gray-500">
                            <span>📚 {ins.courses} Courses</span>
                            <span>⭐ {ins.rating}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">{ins.students.toLocaleString()} students</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopInstructors