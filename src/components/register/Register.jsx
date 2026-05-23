"use client";

import Link from "next/link";
import { FaGithub, FaGoogle, FaUser } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      return toast.warning("Passwords do not match");
    }

    console.log({
      name,
      photo,
      email,
      password,
    });

    // register logic here
  };

  const handleGoogleRegister = () => {
    console.log("Google Register");
  };

  const handleGithubRegister = () => {
    console.log("Github Register");
  };

  return (
    <div className="mt-17 my-8 min-h-screen flex items-center justify-center px-4 py-10 ">
      <div className="w-full max-w-md border border-gray-200 bg-white rounded-3xl p-8 shadow-2xl">
        
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4">
            <FaUser className="text-2xl" />
          </div>

          <h1 className="text-3xl font-bold">Create Account</h1>

          <p className="text-gray-500 mt-2 text-sm">
            Join us today and start your journey 🚀
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleRegister}>
          <FieldGroup className="space-y-5">

            {/* Name */}
            <Field>
              <FieldLabel htmlFor="name">
                Full Name
              </FieldLabel>

              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="pl-10"
                  required
                />
              </div>
            </Field>

            {/* Upload Photo */}
            <Field>
              <FieldLabel htmlFor="photo">
                Upload Photo
              </FieldLabel>

              <Input
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                required
              />

              <FieldDescription>
                Upload your profile picture.
              </FieldDescription>
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">
                Email Address
              </FieldLabel>

              <div className="relative">
                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="pl-10"
                  required
                />
              </div>
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password">
                Password
              </FieldLabel>

              <div className="relative">
                <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  className="pl-10"
                  required
                />
              </div>

              <FieldDescription>
                Password should be at least 6 characters.
              </FieldDescription>
            </Field>

            {/* Confirm Password */}
            <Field>
              <FieldLabel htmlFor="confirmPassword">
                Confirm Password
              </FieldLabel>

              <div className="relative">
                <MdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="********"
                  className="pl-10"
                  required
                />
              </div>
            </Field>

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                required
                className="mt-1"
              />

              <p className="text-gray-600">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-blue-500 hover:underline"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              className="w-full rounded-xl h-11 text-base cursor-pointer"
            >
              Create Account
            </Button>
          </FieldGroup>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-[1px] bg-gray-300 w-full"></div>

          <p className="text-sm text-gray-500">
            OR
          </p>

          <div className="h-[1px] bg-gray-300 w-full"></div>
        </div>

        {/* Social Register */}
        <div className="space-y-3">

          {/* Google */}
          <Button
            onClick={handleGoogleRegister}
            variant="outline"
            className="w-full h-11 rounded-xl flex items-center gap-2 cursor-poi"
          >
            <FaGoogle />
            Continue with Google
          </Button>

          {/* Github */}
          <Button
            onClick={handleGithubRegister}
            variant="outline"
            className="w-full h-11 rounded-xl flex items-center gap-2  cursor-poi"
          >
            <FaGithub />
            Continue with Github
          </Button>
        </div>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-600 mt-7">
          Already have an account?{" "}
          
          <Link
            href="/login"
            className="text-blue-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;