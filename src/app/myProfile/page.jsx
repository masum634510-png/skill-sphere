"use client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MyProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    if (isPending) {
        return (
            <div className="text-center py-20">
                <span className="loading loading-spinner text-orange-500"></span>
            </div>
        );
    }

    if (!session) {
        router.push("/login");
        return null;
    }

    const user = session.user;

    return (
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="card w-full max-w-md border border-gray-200 bg-gray-100 shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] p-8">

                <div className="flex flex-col items-center gap-3 mb-6">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-orange-400 ring-offset-2">
                            <img
                                src={user.image || "https://i.pravatar.cc/100"}
                                alt={user.name}
                            />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold">{user.name}</h1>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500 text-sm">Name</span>
                        <span className="font-medium text-sm">{user.name}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500 text-sm">Email</span>
                        <span className="font-medium text-sm">{user.email}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-500 text-sm">Joined</span>
                        <span className="font-medium text-sm">
                            {new Date(user.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                </div>
                <Link
                    href="/update-profile"
                    className="btn bg-orange-500 hover:bg-orange-600 text-white w-full"
                >
                    Update Profile
                </Link>
            </div>
        </div>
    );
};

export default MyProfilePage;