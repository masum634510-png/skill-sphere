import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className=" flex flex-col items-center justify-center text-center py-15 px-4">
            <h1 className="text-7xl font-bold text-orange-500">404</h1>
            <h2 className="text-3xl font-semibold mt-4 mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-8">
                Oops! The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="btn bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
                Back to Home
            </Link>
        </div>
    );
}