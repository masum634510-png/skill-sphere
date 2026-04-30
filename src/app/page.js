import Banner from "@/component/Banner";
import PopularCourses from "@/component/PopularCourses";
import Image from "next/image";


export default function Home() {
  return (
   <div className="w-11/12 mx-auto py-4">
     <Banner></Banner>
     <PopularCourses></PopularCourses>
   </div>
  );
}
