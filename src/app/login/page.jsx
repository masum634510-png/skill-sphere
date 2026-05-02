"use client";
import { useState } from "react";
import Link from "next/link";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setLoading(true);
        const { data, error } = await signIn.email({
            email,
            password,
        });
        setLoading(false);

        if (error) {
            toast.error(error.message || "Login failed!");
        } else {
            toast.success("Login successful!");
            router.push("/");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-10">
            <div className="card w-full max-w-md border border-gray-200 bg-gray-100 shadow-[0_0_20px_5px_rgba(0,0,0,0.1)] p-8">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                <form onSubmit={onSubmit} className="flex flex-col gap-4">
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

                    {/* Password */}
                    <div className="form-control">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="btn bg-orange-500 hover:bg-orange-600 text-white w-full mt-2"
                        disabled={loading}
                    >
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : "Login"}
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
                    Don't have an account?{" "}
                    <Link href="/register" className="text-orange-500 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;