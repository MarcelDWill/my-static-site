"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Calendar, DollarSign, Layers, PenTool } from "lucide-react";

const projectTypes = [
  "General Inquiry",
  "Artist/Musician Launchpad",
  "Author/Fiction Experience",
  "Custom Interactive Tool (Generator/App)",
  "Full-Stack Personal Brand",
];

const techRequirements = [
  "Custom Audio Player",
  "Interactive Options",
  "E-commerce / Merch Integration",
  "Newsletter/Fan-Capture System",
];

const investmentOptions = [
  "$750 - $1,000 (Standard Launch)",
  "$1,000 - $2,500 (Interactive Suite)",
  "$2,500+ (Full Creative Partnership)",
];

export default function ContactPage() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0], // Default to General Inquiry
    creativeHook: "",
    techStack: [] as string[],
    investment: "",
    deadline: "",
    message: "", // General message/additional notes
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleTechStack = (tech: string) => {
    setFormData((prev) => {
      if (prev.techStack.includes(tech)) {
        return { ...prev, techStack: prev.techStack.filter((t) => t !== tech) };
      }
      return { ...prev, techStack: [...prev.techStack, tech] };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Construct the formatted message for the backend
    const formattedMessage = `
--- INQUIRY DETAILS ---
Project Type: ${formData.projectType}
Creative Hook: ${formData.creativeHook || "N/A"}
Investment: ${formData.investment || "N/A"}
Deadline: ${formData.deadline || "N/A"}
Technical Requirements: ${formData.techStack.length > 0 ? formData.techStack.join(", ") : "None specified"}

--- ADDITIONAL NOTES ---
${formData.message}
    `.trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formattedMessage, // Send the constructed detailed message
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to send inquiry.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isGeneralInquiry = formData.projectType === "General Inquiry";

  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass relative w-full max-w-2xl rounded-[2rem] p-6 md:p-10 overflow-hidden text-white"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Let’s Build Your <span className="text-gradient">Digital Ecosystem</span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            I’m currently accepting <strong>2 projects</strong> for {currentMonth}. Tell me about your vision, and let’s see if we’re a technical match.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Contact Info Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 ml-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 ml-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* 1. Project Type */}
            <div>
              <label className="block text-sm font-semibold mb-2 ml-1 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                Project Type
              </label>
              <div className="relative">
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none appearance-none transition-all cursor-pointer text-black dark:text-white"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="text-black bg-white">
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  ▼
                </div>
              </div>
            </div>

            {/* Conditional Fields: Hide strict questions if just General Inquiry */}
            {!isGeneralInquiry && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6"
              >
                {/* 2. The Creative Hook */}
                <div>
                  <label className="block text-sm font-semibold mb-2 ml-1 flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-purple-400" />
                    The Creative "Hook"
                  </label>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 ml-1">
                    In one sentence, what is the 'vibe' of your work? (e.g., Gritty Outlaw Country, Sleek RnB, Mystery Fiction)
                  </p>
                  <input
                    type="text"
                    required={!isGeneralInquiry}
                    className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                    placeholder="Describe the vibe..."
                    value={formData.creativeHook}
                    onChange={(e) => setFormData({ ...formData, creativeHook: e.target.value })}
                  />
                </div>

                {/* Technical Requirements */}
                <div>
                  <label className="block text-sm font-semibold mb-3 ml-1">Technical Requirements</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {techRequirements.map((tech) => (
                      <label
                        key={tech}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.techStack.includes(tech)
                            ? "bg-blue-500/10 border-blue-500"
                            : "bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.techStack.includes(tech)}
                          onChange={() => toggleTechStack(tech)}
                          className="hidden"
                        />
                         <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                              formData.techStack.includes(tech) ? "bg-blue-500 border-blue-500" : "border-gray-400"
                         }`}>
                             {formData.techStack.includes(tech) && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                         </div>
                        <span className="text-sm">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* The Investment */}
                <div>
                  <label className="block text-sm font-semibold mb-3 ml-1 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    The Investment
                  </label>
                  <div className="space-y-2">
                    {investmentOptions.map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.investment === option
                            ? "bg-green-500/10 border-green-500"
                            : "bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                      >
                         <input
                          type="radio"
                          name="investment"
                          value={option}
                          checked={formData.investment === option}
                          onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                          className="hidden"
                        />
                         <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                              formData.investment === option ? "border-green-500" : "border-gray-400"
                         }`}>
                             {formData.investment === option && <div className="w-2.5 h-2.5 rounded-full bg-green-500" />}
                         </div>
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Deadline */}
                <div>
                   <label className="block text-sm font-semibold mb-2 ml-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-400" />
                    Deadline
                  </label>
                   <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 ml-1">
                    When is your album/book release date?
                  </p>
                  <input
                    type="date"
                    required
                    className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-orange-500 outline-none transition-all text-gray-900 dark:text-white"
                     value={formData.deadline}
                     onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  />
                </div>
              </motion.div>
            )}

            {/* Additional Notes / General Message */}
            <div>
              <label className="block text-sm font-semibold mb-2 ml-1">
                {isGeneralInquiry ? "How can I help you?" : "Anything else I should know?"}
              </label>
              <textarea
                rows={4}
                required={isGeneralInquiry}
                className="w-full p-3 rounded-xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-black dark:text-white placeholder-gray-600 dark:placeholder-gray-400"
                placeholder={isGeneralInquiry ? "Tell me about your project or question..." : "Any other details..."}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-center text-red-500 text-sm bg-red-500/10 p-2 rounded-lg border border-red-500/20">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:shadow-blue-500/25 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Inquiry"}
              {!isSubmitting && <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Inquiry Received!</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm">
              Thanks for reaching out. I'll review your vision and get back to you shortly to discuss next steps.
            </p>
            <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-blue-500 hover:underline"
            >
                Send another message
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
