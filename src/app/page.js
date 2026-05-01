import Banner from "@/component/Banner";
import LearningTips from "@/component/LearningTips";
import PopularCourses from "@/component/PopularCourses";
import TopInstructors from "@/component/TopInstructorsSection";
import TrendingCourses from "@/component/TrendingCourses";
import Image from "next/image";


export default function Home() {
  return (
   <div className="w-11/12 mx-auto py-4">
     <Banner></Banner>
     <PopularCourses></PopularCourses>
     <LearningTips></LearningTips>
     <TopInstructors></TopInstructors>
     <TrendingCourses></TrendingCourses>
   </div>
  );
}
