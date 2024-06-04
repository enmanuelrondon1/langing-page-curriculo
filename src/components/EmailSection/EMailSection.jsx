// "use client";
// import Link from "next/link";

// import { Github } from "../icons/Github";
// import { Linkedin } from "../icons/Linkedin";
// import { useState } from "react";

// export const EmailSection = () => {
//   const [emailSubmit, setEmailSubmit] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       email: e.target.email.value,
//       subject: e.target.subject.value,
//       message: e.target.message.value,
//     };
//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSONdata,
//     };
//     const response = await fetch(endpoint, options);
//     const result = await response.json();
//         console.log(result)

//     if (response.status === 200) {
//       console.log("Message sent.");
//       setEmailSubmit(true);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <h5 className="text-xl font-bold text-white my-2">
//           Let&apos;s Connect
//         </h5>
//         <p className="text-[#ADB7BE] mb-4 max-w-md text-justify ">
//           I&apos;m always looking for new opportunities to collaborate with
//           other talented individuals. If you have a project that you think I
//           would be a good fit for, or if you just want to say hi, please
//           don&apos;t hesitate to reach out.
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="https://github.com/enmanuelrondon1">
//             <Github />
//           </Link>
//           <Link href="linkedin.com">
//             <Linkedin />
//           </Link>
//         </div>
//       </div>

//         <div>
//           {emailSubmit ? (
//             <p className="text-green-50 text-sm mt-2">
//               Email sent successfully
//             </p>
//           ) : (
//             <form className="flex flex-col" onSubmit={handleSubmit}>
//               <div className="mb-6">
//                 <label
//                   htmlFor="email"
//                   className="text-white block mb-2 text-sm font-medium"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   id="email"
//                   required
//                   className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm sounded-lg block w-full p-2.5 "
//                   placeholder="enmanuel@gmail.com"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   htmlFor="subject"
//                   className="text-white block text-sm mb-2 font-medium"
//                 >
//                   Subject
//                 </label>
//                 <input
//                   name="subject"
//                   type="text"
//                   id="subject"
//                   required
//                   className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
//                   placeholder="Just saying hi"
//                 />
//               </div>
//               <div className="mb-6">
//                 <label
//                   htmlFor="message"
//                   className="text-white block text-sm mb-2 font-medium "
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
//                   placeholder="Let's talk about.."
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//               >
//                 Send Message
//               </button>
//               {
//                 emailSubmit &&(
//                   <p className="text-green-500 text-sm mt-2">
//                     Email sent successfully
//                   </p>
//                 )
//               }
//             </form>
//           )}
//         </div>
//     </section>
//   );
// };
