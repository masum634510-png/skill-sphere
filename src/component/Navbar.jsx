"use client";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    const handleLogout = async () => {
        await signOut();
        toast.success("Logged out successfully!");
        router.push("/");
    };
    const links = (
        <>
            <li className="hover:text-orange-600 font-medium">
                <Link href={'/'}>Home</Link>
            </li>
            <li className="hover:text-orange-600 font-medium">
                <Link href={'/courses'}>Courses</Link>
            </li>
            <li className="hover:text-orange-600 font-medium">
                <Link href={'/myProfile'}>My Profile</Link>
            </li>
        </>
    )
    return (
        <div className="navbar bg-base-100 px-4 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/2.png"
                        alt="SkillSphere Logo"
                        width={40}
                        height={40}
                        priority
                    />
                    <h3 className="text-xl font-bold text-orange-500">Skill<span className="text-xl font-bold text-black">Sphere</span> </h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {isPending ? (
                    <span className="loading loading-spinner loading-sm text-orange-500"></span>
                ) : session ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="avatar cursor-pointer">
                            <div className="w-9 rounded-full ring ring-orange-400 ring-offset-1">
                                <img src={session.user.image || "https://i.pravatar.cc/40"} alt={session.user.name} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-48 p-2 shadow mt-2">
                            <li className="text-sm px-3 py-1 text-gray-500 font-medium">{session.user.name}</li>
                            <li><Link href="/myProfile">My Profile</Link></li>
                            <li><button onClick={handleLogout} className="text-red-500">Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link href="/login" className="font-medium hover:text-orange-600">Login</Link>
                        <Link href="/register" className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
