
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const slides = [
    {
        badge: "✨ New courses available",
        title: "Upgrade Your Skills Today",
        sub: "Master in-demand skills with expert-led courses.",
        bg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
        btn1: { text: "Explore Courses", href: "/courses" },
    },
    {
        badge: "🌟 Learn from the best",
        title: "Learn from Industry Experts",
        sub: "50+ top instructors with real-world experience.",
        bg: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&q=80",
        btn1: { text: "View Courses", href: "/courses" },
    },
    {
        badge: "🏅 Get certified",
        title: "Earn Skills, Earn Success",
        sub: "Get certified and land your dream job.",
        bg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
        btn1: { text: "Start Free", href: "/register" },
    },
];

export default function Banner() {
    return (
        <section>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                className="rounded-2xl overflow-hidden"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="relative min-h-[360px] flex items-center"
                            style={{
                                backgroundImage: `url(${slide.bg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-black/45" />
                            <div className="relative z-10 px-12 py-16 max-w-xl">
                                <span className="inline-block bg-white/20 border border-white/30 text-white text-xs px-4 py-1.5 rounded-full mb-5">
                                    {slide.badge}
                                </span>
                                <h1 className="text-4xl font-bold text-white leading-tight mb-4">
                                    {slide.title}
                                </h1>
                                <p className="text-white/85 text-base mb-8">{slide.sub}</p>
                                <Link
                                    href={slide.btn1.href}
                                    className="bg-white text-gray-900 font-semibold px-6 py-2.5 rounded-xl text-sm hover:scale-105 transition-transform"
                                >
                                    {slide.btn1.text}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
          
        </section>
    );
}