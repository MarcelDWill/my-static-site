"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SideNav from "@/app/components/SideNav";

export default function AboutPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthorized");
    if (storedAuth === "true") {
      setIsAuthorized(true);
    } else {
      setTimeout(() => {
        router.push("/hidden"); // ✅ Delay to prevent immediate redirect
      }, 500);
    }
  }, [router]);

  if (!isAuthorized) {
    return null; // Prevents flash of unprotected content
  }

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <SideNav />
      <h1 className="text-4xl font-bold">👤 About Me</h1>
      <p className="text-lg">This is the hidden &quot;About Me&quot; page.</p>
    </div>
  );
}
