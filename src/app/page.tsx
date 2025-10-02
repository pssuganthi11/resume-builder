// "use client";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="w-full">
//       {/* Navbar */}
//       <header className="bg-white shadow-sm fixed top-0 w-full z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-16 h-16 rounded-full">
//               <Image
//                 src="/logo.png"
//                 alt="student"
//                 width={500}
//                 height={600}
//                 className="relative z-10 rounded-lg"
//               />
//             </div>
//             <div className="flex flex-col">
//               <span className="font-bold text-lg leading-tight">COMPANY</span>{" "}
//               <span className="text-sm text-gray-500">business tagline</span>
//             </div>
//           </div>

//           {/* Links */}
//           <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
//             <a href="#" className="hover:text-pink-600">
//               Home
//             </a>
//             <a href="#" className="hover:text-pink-600">
//               About Us
//             </a>
//             <a href="#" className="hover:text-pink-600">
//               Our Services
//             </a>
//             <a href="#" className="hover:text-pink-600">
//               Pricing
//             </a>
//             <a href="#" className="hover:text-pink-600">
//               FAQ
//             </a>
//           </nav>

//           {/* CTA */}
//           <button className="bg-[#fa1239] hover:bg-pink-700 text-white px-5 py-2 rounded-full font-medium text-sm">
//             Get A Quote
//           </button>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-[#ffc3cd] to-[#ffe3e7] pt-32 pb-20">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
//           {/* Left Content */}
//           <div className="flex-1">
//             {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//               Your Resume{" "}
//               <span className="text-pink-600 inline-flex items-center gap-2">
//                 <Image
//                   src="/deserve.png"
//                   alt="deserve"
//                   width={120}
//                   height={60}
//                 />
//                 Let’s
//               </span>
//               Make It Happen
//             </h1> */}
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//               Your Resume
//               <br />
//               <span className="inline-flex items-center gap-2">
//                 <Image
//                   src="/deserve.png"
//                   alt="deserve"
//                   width={900}
//                   height={900}
//                   className="h-[1.2em] w-auto object-contain align-middle"
//                 />
//                 Let’s
//               </span>
//               <br />
//               Make It Happen
//             </h1>

//             <p className="text-gray-600 mb-8">
//               If Your Resume Isn’t Getting Responses, It’s Time For An Upgrade.
//               Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land
//               More Interviews. Our Resumes Are Designed To Get Your Foot In The
//               Door And Place Your Name At The Top Of The Shortlist.
//             </p>
//             <div className="flex gap-4">
//               <button className="bg-[#fa1239] hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium">
//                 RESUME PACKAGES
//               </button>
//               <button className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-full font-medium">
//                 CONTACT US
//               </button>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="flex-1 relative flex justify-center items-center">
//             {/* Background Circle */}
//             {/* <div className="absolute -top 10 -left 10 w-[450px] h-[450px] rounded-full border-[40px] bg-gradient-to-r from-[#ffc3cd] to-[#ffe3e7] "></div> */}
//             <div className="absolute top-30 left-15 w-[480px] h-[450px] rounded-full p-[50px] bg-gradient-to-r from-[#ffd0d8] to-[#fecfd7]">
//               <div className="w-full h-full rounded-full bg-[#fedfe4]"></div>
//             </div>
//             {/* Main Image */}
//             <Image
//               src="/girl2.png"
//               alt="student"
//               width={400}
//               height={500}
//               className="relative z-10 rounded-lg"
//             />

//             {/* Top Left Badge */}
//             {/* <div className="absolute top-6 left-[-30px] bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2 z-20">
//               <span className="text-2xl font-bold text-green-600">4.9</span>
//               <span className="text-sm">
//                 ⭐ <br /> Instructor Rating
//               </span>
//             </div> */}

//             {/* Bottom Right Badge */}
//             {/* <div className="absolute bottom-6 right-[-30px] bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2 z-20">
//               <span className="text-secondary text-2xl">🎓</span>
//               <span className="text-sm">
//                 260+ <br /> Online Resume Created
//               </span>
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* What You Get */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           {/* Section Label */}
//           <span className="px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
//             What You Get
//           </span>

//           {/* Title */}
//           <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-12">
//             You’re Not Just Another Applicant And Your Resume Shouldn’t Look
//             Like One
//           </h2>

//           {/* Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {/* Card 1 */}
//             <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <Image
//                   src="/card1.png"
//                   alt="Resume Icon"
//                   width={120}
//                   height={120}
//                   className="object-contain"
//                 />
//               </div>
//               <h3 className="font-semibold text-lg mb-2">
//                 A Resume That Passes ATS Filters
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Get a professionally written, keyword-optimized resume that
//                 lands in recruiter inboxes—not rejection piles.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <Image
//                   src="/card2.png"
//                   alt="Cover Letter Icon"
//                   width={120}
//                   height={120}
//                   className="object-contain"
//                 />
//               </div>
//               <h3 className="font-semibold text-lg mb-2">
//                 A Cover Letter That Gets Read
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Stand out with a cover letter that speaks directly to the role
//                 and reflects your strengths.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <Image
//                   src="/card3.png"
//                   alt="LinkedIn Icon"
//                   width={120}
//                   height={120}
//                   className="object-contain"
//                 />
//               </div>
//               <h3 className="font-semibold text-lg mb-2">
//                 A LinkedIn Profile That Works For You
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Attract the right eyes, start conversations, and show up in
//                 recruiter searches.
//               </p>
//             </div>

//             {/* Card 4 */}
//             <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300">
//               <div className="flex justify-center mb-6">
//                 <Image
//                   src="/card4.png"
//                   alt="Interview Icon"
//                   width={120}
//                   height={120}
//                   className="object-contain"
//                 />
//               </div>
//               <h3 className="font-semibold text-lg mb-2">
//                 Interview Confidence
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Interview preparation with real HR professionals so you speak
//                 clearly, confidently, and convincingly.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Navbar */}
      <header className="bg-white shadow-sm fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="student"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">COMPANY</span>
              <span className="text-sm text-gray-500">business tagline</span>
            </div>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-pink-600">Home</a>
            <a href="#" className="hover:text-pink-600">About Us</a>
            <a href="#" className="hover:text-pink-600">Our Services</a>
            <a href="#" className="hover:text-pink-600">Pricing</a>
            <a href="#" className="hover:text-pink-600">FAQ</a>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#fa1239] hover:bg-pink-700 text-white px-5 py-2 rounded-full font-medium text-sm">
              Get A Quote
            </button>
            {/* Hamburger */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col p-4 gap-4 text-sm font-medium">
              <a href="#" className="hover:text-pink-600">Home</a>
              <a href="#" className="hover:text-pink-600">About Us</a>
              <a href="#" className="hover:text-pink-600">Our Services</a>
              <a href="#" className="hover:text-pink-600">Pricing</a>
              <a href="#" className="hover:text-pink-600">FAQ</a>
              <button className="bg-[#fa1239] hover:bg-pink-700 text-white px-5 py-2 rounded-full font-medium text-sm">
                Get A Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#ffc3cd] to-[#ffe3e7] pt-32 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Your Resume
              <br />
              <span className="whitespace-nowrap">
                <Image
                  src="/deserve.png"
                  alt="deserve"
                  width={900}
                  height={900}
                  className="inline-block h-[1.8em] md:h-[2.2em] w-auto object-contain align-baseline"
                />
                <span className="ml-2">Let’s</span>
              </span>
              <br />
              Make It Happen
            </h1>

            <p className="text-gray-600 mb-8 text-sm md:text-base">
              If Your Resume Isn’t Getting Responses, It’s Time For An Upgrade.
              Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land
              More Interviews. Our Resumes Are Designed To Get Your Foot In The
              Door And Place Your Name At The Top Of The Shortlist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#fa1239] hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium">
                RESUME PACKAGES
              </button>
              <button className="border border-pink-600 text-pink-600 hover:bg-pink-50 px-6 py-3 rounded-full font-medium">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative flex justify-center items-center">
            {/* Background Circle */}
            <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full p-[40px] bg-gradient-to-r from-[#ffd0d8] to-[#fecfd7]">
              <div className="w-full h-full rounded-full bg-[#fedfe4]"></div>
            </div>
            {/* Main Image */}
            <Image
              src="/girl2.png"
              alt="student"
              width={280}
              height={400}
              className="relative z-10 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="px-4 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
            What You Get
          </span>

          <h2 className="text-xl md:text-3xl font-bold mt-4 mb-12">
            You’re Not Just Another Applicant And Your Resume Shouldn’t Look
            Like One
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-center mb-6">
                  <Image
                    src={`/card${num}.png`}
                    alt={`Card ${num}`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {num === 1
                    ? "A Resume That Passes ATS Filters"
                    : num === 2
                    ? "A Cover Letter That Gets Read"
                    : num === 3
                    ? "A LinkedIn Profile That Works For You"
                    : "Interview Confidence"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {num === 1 &&
                    "Get a professionally written, keyword-optimized resume that lands in recruiter inboxes—not rejection piles."}
                  {num === 2 &&
                    "Stand out with a cover letter that speaks directly to the role and reflects your strengths."}
                  {num === 3 &&
                    "Attract the right eyes, start conversations, and show up in recruiter searches."}
                  {num === 4 &&
                    "Interview preparation with real HR professionals so you speak clearly, confidently, and convincingly."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
