"use client";
import { useState } from "react";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        setLoading(true);
        const { data, error } = await signUp.email({
            name,
            email,
            password,
            image,
        });
        setLoading(false);

        if (error) {
            toast.error(error.message || "Registration failed!");
        } else {
            toast.success("Registration successful!");
            router.push("/login");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="card w-full max-w-md border border-gray-200 bg-gray-100  shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] p-8">
                <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <div className="form-control">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Image URL</span></label>
                        <input
                            name="image"
                            type="text"
                            placeholder="https://example.com/photo.jpg"
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Min 8 chars, 1 uppercase, 1 number"
                            className="input input-bordered w-full"
                            required
                            minLength={8}
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn bg-orange-500 hover:bg-orange-600 text-white w-full mt-2"
                        disabled={loading}
                    >
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : "Register"}
                    </button>

                    {/* Google Login */}
                    <button
                        type="button"
                        onClick={() => signIn.social({ provider: "google", callbackURL: "/" })}
                        className="btn btn-outline w-full"
                    >
                        <img src="https://www.google.com/favicon.ico" className="w-4 h-4" />
                        Continue with Google
                    </button>
                </form>

                <p className="text-center text-sm mt-4 text-gray-500">
                    Already have an account?{" "}
                    <Link href="/login" className="text-orange-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;