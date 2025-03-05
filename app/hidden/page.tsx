"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SideNav from "@/app/components/SideNav";

export default function HiddenPage() {
  const [inputKey, setInputKey] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [attempts, setAttempts] = useState(2);
  const router = useRouter();

  // ✅ Fetch secret key from environment (use fallback to prevent undefined issue)
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || "fallbackKey";

  // ✅ Check if user is already authorized (persistent login)
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthorized");
    if (storedAuth === "true") {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleSubmit = () => {
    if (inputKey.trim() === SECRET_KEY.trim()) {
      localStorage.setItem("isAuthorized", "true"); // ✅ Store authentication persistently
      setIsAuthorized(true);
      window.location.reload(); // ✅ Force reload to apply the stored state
    } else {
      if (attempts > 1) {
        setAttempts((prev) => prev - 1);
        alert(`⚠️ Incorrect! You have ${attempts - 1} attempt(s) left.`);
      } else {
        alert("❌ Incorrect! Redirecting...");
        router.push("/"); // Redirect after second failure
      }
    }
  };

  if (!isAuthorized) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/70">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            🔑 Enter Secret Key
          </h2>
          <input
            type="password"
            className="border rounded p-2 w-full text-black"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            placeholder="Enter key"
          />
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <Image 
        src="/hiddenbg.png"
        alt="Background"
        fill
        quality={100}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all duration-500 dark:opacity-70"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 dark:bg-black/60 -z-5 transition-all duration-500" />
      <SideNav />
      <div className="relative text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Welcome to the Hidden Page!
        </h1>
        <p className="text-lg text-white">You entered the correct key.</p>
      </div>
    </div>
  );
}
