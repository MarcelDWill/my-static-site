"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SideNav from "@/app/components/SideNav";
import Image from "next/image";

// ✅ Reusable Hero Card Component
type HeroProps = {
  name: string;
  description: string;
  image: string;
  symbols: string;
};

function HeroCard({ name, description, image, symbols }: HeroProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
      <Image src={image} alt={name} width={200} height={200} className="mx-auto rounded-lg" />
      <h2 className="text-xl font-bold text-white mt-3">{name}</h2>
      <p className="text-gray-300">{description}</p>
      <p className="text-2xl mt-2">{symbols}</p>
    </div>
  );
}

export default function Heroes() {
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
    return null; // Don't render content until auth check is complete
  }

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
      <Image 
              src="/hiddenbg.png" // ✅ Removed /public/ since Next.js automatically serves from public/
              alt="Background"
              fill
              quality={100}
              className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all duration-500 dark:opacity-70"
            />
      <SideNav /> {/* ✅ SideNav for Navigation */}
      <h1 className="text-4xl font-bold text-white dark:text-blue-300 drop-shadow-lg">💪🏿 Heroes</h1>
      <p className="text-lg font-bold text-gray-900 dark:text-white-100 text-center">
        Celebrating history with legendary figures of African descent.
      </p>
    {/* ✅ Hero Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-6">
        {/* 🔥 Historical Heroes */}
        <HeroCard
          name="Malcolm X"
          description="El Hajj Malik Shabazz."
          image="/x1.jpg"
          symbols="✊🏿"
        />
      </div>
    </div>
  );
}


