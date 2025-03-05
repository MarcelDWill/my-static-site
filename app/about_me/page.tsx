
export default function AboutMe() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center px-6"
         style={{ paddingTop: "150px" }}>
          {/*<Image 
            src="/techbg1.png"
            alt="Background"
            fill
            quality={100}
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all duration-500 dark:opacity-70"
          />*/}
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center p-6 rounded-lg bg-gray-700/50 dark:bg-gray-800/50 shadow-lg">
        
        <h1 className="text-4xl font-bold">👤 About Me</h1>
        {/*<p className="text-lg">This is the &quot;About Me&quot; page.</p>*/}
        <a>Aspiring Software Engineer | Full-Stack Developer | Problem Solver<br/>
<br/>

<p>Hi, I’m Marcel Williams, a passionate and driven Software Engineer in Training with hands-on experience in full-stack web development. </p>
<p>Currently, I’m sharpening my skills at Chegg Skills (Thinkful), where I build and deploy web applications using JavaScript, React, Node.js, and PostgreSQL. </p>
<p>I thrive on solving complex problems, writing clean code, and continuously learning to stay ahead in the ever-evolving tech landscape.</p>
<br/><br/>
💡 What I bring to the table:
<ol className="pr-5 text-left">
  <li>✅ Full-stack development experience with modern web technologies</li>
  <li>✅ Strong problem-solving mindset, backed by real-world project development</li>
  <li>✅ Ability to collaborate, troubleshoot, and implement best coding practices</li>
  <li>✅ Background in technical roles at AT&T and TXU Electric Delivery, equipping me with analytical thinking and hands-on technical expertise</li>
</ol><br/>

 Recent Projects:
<ol>
  <li>🔹 Library Application – A book search & review platform using JavaScript ES6 and Node.js</li>
  <li>🔹 Study Tool Application – A full-stack flashcard study app built with React, Express, and PostgreSQL</li>
  <li>🔹 Responsive Web Application – A sleek, mobile-friendly website developed with HTML, CSS, and Flexbox</li>
</ol><br/><br/>
I’m excited about opportunities in software engineering, where I can contribute my skills and grow alongside talented professionals. Let’s connect and chat about tech, development, and career growth!

</a>
</div>
      </div>
    );
}
