import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    const links = (
        <>
            <li className="hover:text-orange-600">
                <Link href={'/'}>Home</Link>
            </li>
            <li className="hover:text-orange-600">
                <Link href={'/courses'}>Courses</Link>
            </li>
            <li className="hover:text-orange-600">
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
                    <h3 className="text-xl font-bold text-orange-500">SkillSphere</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <p className="font-medium hover:text-orange-600">Login</p>
                <a className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white">Register</a>
            </div>
        </div>
    );
};

export default Navbar;
