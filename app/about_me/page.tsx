
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
        <a>Software Engineer | Full-Stack Developer | Problem Solver<br/>
<br/>

<p>Hi, I’m Marcel Williams — a Software Engineer in Training with full-stack experience and a strong drive to build scalable, real-world web applications.</p>
  
  <p>I’m currently enrolled in the Chegg Skills (Thinkful) Software Engineering program, where I’ve been sharpening my skills in full-stack JavaScript development, with a particular focus on the PERN stack (PostgreSQL, Express, React, Node.js). With a solid background in technical roles and systems analysis, I bring both practical problem-solving skills and a collaborative mindset to every project.</p>
  
  <p>Before transitioning into tech, I spent over a decade in field service and systems management roles at AT&T and TXU Electric Delivery, where I honed skills in technical troubleshooting, data analysis, and communication. These roles have shaped my ability to approach engineering tasks with a user-first, reliability-focused mindset.</p>

  <br/><br/>
💡 What I bring to the table:
<ol className="pr-5 text-left">
    <li>✅ Full-stack development with JavaScript, React, Node.js, and PostgreSQL</li>
    <li>✅ Strong backend API design with Express and SQL using Knex.js</li>
    <li>✅ Responsive, component-based front-end UIs built with Tailwind CSS and Zustand</li>
    <li>✅ Former tech lead experience, troubleshooting fiber networks and optimizing systems</li>
    <li>✅ Continuous learner with hands-on training in agile development and test-driven coding</li>
  </ol><br/>

 Recent Projects:
<ol>
<li>🔹 <strong>PERN Stack Store</strong> – Full-stack e-commerce platform with user auth, API, and responsive design using Tailwind CSS</li>
    <li>🔹 <strong>Study Tool App</strong> – Flashcard study application with spaced repetition using React, Node.js, and PostgreSQL</li>
    <li>🔹 <strong>Library App</strong> – A book search and review platform developed with vanilla JS and Node.js</li>
</ol><br/><br/>
I’m excited about opportunities in software engineering, where I can contribute my skills and grow alongside talented professionals. Let’s connect and chat about tech, development, and career growth!

</a>
</div>
      </div>
    );
}
