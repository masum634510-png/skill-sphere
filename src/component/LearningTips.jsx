const tips = [
    {
        icon: "🎯",
        title: "Set Clear Goals",
        desc: "Define what you want to learn before starting a course. Clear goals keep you focused and motivated throughout your journey."
    },
    {
        icon: "⏰",
        title: "Study Consistently",
        desc: "Study 30–60 minutes daily instead of cramming. Regular practice builds lasting skills faster than long irregular sessions."
    },
    {
        icon: "📝",
        title: "Take Smart Notes",
        desc: "Write key concepts in your own words. Summarizing helps you understand and remember the material much better."
    },
    {
        icon: "🔄",
        title: "Practice What You Learn",
        desc: "Apply every concept with hands-on projects. Real practice is what turns theory into actual skill."
    },
    {
        icon: "🧘",
        title: "Take Breaks",
        desc: "Use the Pomodoro technique — 25 min study, 5 min break. Your brain retains more when it gets time to rest."
    },
    {
        icon: "👥",
        title: "Learn With Others",
        desc: "Join communities, discuss topics, and help peers. Teaching others is one of the best ways to solidify your knowledge."
    },
]

const LearningTips = () => {
    return (
        <div className="py-14">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">📌 Learning Tips</h2>
                <p className="text-gray-500">Simple strategies to help you learn faster and smarter</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip, i) => (
                    <div key={i} className="p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
                        <div className="text-4xl mb-4">{tip.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{tip.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LearningTips