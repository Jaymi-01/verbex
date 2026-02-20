"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eye, EyeSlash, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginValues) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    console.log(data);
    toast.success("Signed in successfully!", {
      description: "Welcome back to Verbex AI.",
    });
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.info("Password reset link sent!", {
      description: "If an account exists for that email, you'll receive a reset link shortly.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sm:mx-auto sm:w-full sm:max-w-md"
    >
      <div className="bg-card/50 backdrop-blur-sm py-8 px-4 shadow-2xl border border-border sm:rounded-2xl sm:px-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold font-display text-foreground">Welcome back</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:text-primary/80 transition-colors">
              Sign up for free
            </Link>
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@company.com"
              {...register("email")}
              className={errors.email ? "border-destructive focus:ring-destructive" : ""}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-foreground">
                Password
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password")}
                className={errors.password ? "border-destructive focus:ring-destructive pr-10" : "pr-10"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-destructive">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-border rounded bg-background"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
              Remember me
            </label>
          </div>

          <Button type="submit" className="w-full h-11" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Signing in...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Sign In <ArrowRight size={18} />
              </span>
            )}
          </Button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              Google
            </Button>
            <Button variant="outline" className="w-full">
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
