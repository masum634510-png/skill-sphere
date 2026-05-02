"use client";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdateProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

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

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;

        setLoading(true);
        try {
            await fetch("/api/auth/update-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, image }),
            });
            toast.success("Profile updated successfully!");
            router.push("/myProfile");
        } catch (err) {
            toast.error("Update failed!");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="card w-full max-w-md border border-gray-200 bg-gray-100 shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] p-8">
                <h1 className="text-2xl font-bold text-center mb-6">Update Profile</h1>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input
                            name="name"
                            type="text"
                            defaultValue={session.user.name}
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Image URL</span></label>
                        <input
                            name="image"
                            type="text"
                            defaultValue={session.user.image || ""}
                            placeholder="https://example.com/photo.jpg"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn bg-orange-500 hover:bg-orange-600 text-white w-full mt-2"
                        disabled={loading}
                    >
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : "Update Information"}
                    </button>

                    {/* Back */}
                    <button
                        type="button"
                        onClick={() => router.push("/myProfile")}
                        className="btn btn-outline w-full"
                    >
                        Back to Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;