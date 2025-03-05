import Image from "next/image";

export default function PortfolioPage() {
  return(
    <div className="relative w-screen h-screen flex flex-col items-center justify-center">
             {/* <Image 
                src="/portbg1.png"
                alt="Background"
                fill
                quality={100}
                className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all duration-500 dark:opacity-70"
              />*/}
              
      <h1 className="px-6 py-2 text-2xl font-bold text-white bg-gray-700 bg-opacity-60 rounded-lg shadow-md transition-all duration-300 transform ">Portfolio</h1>
      <main>
        <Image
          src="/coming-soon.png"
          alt="Coming Soon"
          width={500}
          height={500}
          priority
        />
      </main>
    </div>); 
}

