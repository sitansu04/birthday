// import React, { useState, useEffect, useRef } from "react";
// import {
//   Heart,
//   Music,
//   Camera,
//   Mail,
//   ArrowLeft,
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
// } from "lucide-react";
// import ourSong from "./assets/music.mp3";
// const BirthdaySurprise = () => {
//   const [currentPage, setCurrentPage] = useState("landing");
//   const [musicPlaying, setMusicPlaying] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const audioRef = useRef(null);

//   const wifeName = "Wify ❤️";

//   // Background music effect
//   useEffect(() => {
//     if (musicPlaying && audioRef.current) {
//       audioRef.current
//         .play()
//         .catch((e) => console.log("Audio play failed:", e));
//     } else if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   }, [musicPlaying]);

//   // Background music effect
//   useEffect(() => {
//     if (audioRef.current) {
//       // Set volume here (0.2 = 20%, 1.0 = 100%)
//       audioRef.current.volume = 0.5;
//       if (audioRef.current.currentTime === 0) {
//         audioRef.current.currentTime = 25;
//       }
//     }

//     if (musicPlaying && audioRef.current) {
//       audioRef.current
//         .play()
//         .catch((e) => console.log("Audio play failed:", e));
//     } else if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   }, [musicPlaying]);

//   // Confetti effect
//   useEffect(() => {
//     if (currentPage === "final") {
//       setShowConfetti(true);
//       const timer = setTimeout(() => setShowConfetti(false), 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [currentPage]);

//   // Floating Balloons Background Component
//   const FloatingBalloons = () => (
//     <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//       {[...Array(15)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute balloon"
//           style={{
//             left: `${Math.random() * 100}%`,
//             bottom: "-10%",
//             fontSize: `${Math.random() * 30 + 40}px`,
//             animation: `floatUp ${Math.random() * 10 + 15}s linear infinite`,
//             animationDelay: `${Math.random() * 10}s`,
//             opacity: 0.6,
//           }}
//         >
//           {["💝", "🎈", "❤️", "🌟", "🎉"][Math.floor(Math.random() * 5)]}
//         </div>
//       ))}
//     </div>
//   );

//   // Landing Page
//   const LandingPage = () => (
//     <div
//       className="min-h-screen flex items-center justify-center p-8 relative"
//       style={{
//         background:
//           "linear-gradient(135deg, #F6E9F9 0%, #FDEBF3 25%, #ffa8a8ff 50%, #fc7171ff 75%, #fc4d4dff 100%)",
//       }}
//     >
//       <FloatingBalloons />
//       <div className="bg-white rounded-[32px] shadow-2xl p-12 max-w-3xl w-full text-center relative z-10">
//         <h1
//           className="text-5xl font-bold mb-4"
//           style={{ color: "#6B3E8E", fontFamily: "system-ui" }}
//         >
//           HAPPY BIRTHDAY {wifeName.toUpperCase()}
//         </h1>
//         <p className="text-lg opacity-70 mb-8">
//           Click the cake for your surprise
//         </p>

//         <div
//           className="cursor-pointer inline-block transition-transform duration-300 hover:scale-110"
//           onClick={() => {
//             setCurrentPage("hub");
//             setMusicPlaying(true);
//           }}
//         >
//           <div className="relative">
//             {/* Birthday Cake */}
//             <svg
//               width="240"
//               height="240"
//               viewBox="0 0 240 240"
//               className="mx-auto"
//             >
//               {/* Candles */}
//               <rect
//                 x="50"
//                 y="30"
//                 width="12"
//                 height="35"
//                 fill="#FFA726"
//                 rx="2"
//               />
//               <rect
//                 x="90"
//                 y="30"
//                 width="12"
//                 height="35"
//                 fill="#f53131ff"
//                 rx="2"
//               />
//               <rect
//                 x="130"
//                 y="30"
//                 width="12"
//                 height="35"
//                 fill="#42A5F5"
//                 rx="2"
//               />
//               <rect
//                 x="170"
//                 y="30"
//                 width="12"
//                 height="35"
//                 fill="#EF5350"
//                 rx="2"
//               />

//               {/* Flames */}
//               <ellipse cx="56" cy="25" rx="6" ry="10" fill="#FFD54F" />
//               <ellipse cx="96" cy="25" rx="6" ry="10" fill="#FFD54F" />
//               <ellipse cx="136" cy="25" rx="6" ry="10" fill="#FFD54F" />
//               <ellipse cx="176" cy="25" rx="6" ry="10" fill="#FFD54F" />

//               {/* Frosting */}
//               <path
//                 d="M 30 70 Q 40 60, 50 70 T 70 70 T 90 70 T 110 70 T 130 70 T 150 70 T 170 70 T 190 70 T 210 70 L 210 85 L 30 85 Z"
//                 fill="#F3E5F5"
//               />

//               {/* Cake Body */}
//               <rect
//                 x="30"
//                 y="85"
//                 width="180"
//                 height="90"
//                 fill="#ff4040ff"
//                 rx="4"
//               />

//               {/* Cake Base */}
//               <ellipse cx="120" cy="175" rx="95" ry="20" fill="#ac0000ff" />
//               <ellipse cx="120" cy="175" rx="90" ry="15" fill="#ba0000ff" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Gift Hub Page
//     // const GiftHubPage = () => (
//     //   <div className="min-h-screen flex items-center justify-center p-8 relative" style={{
//     //     background: 'linear-gradient(135deg, #F6E9F9 0%, #FDEBF3 25%, #ffa8a8ff 50%, #fc7171ff 75%, #fc4d4dff 100%)'
//     //   }}>
//     //     <FloatingBalloons />
//     //     <div className="rounded-[28px] p-12 max-w-5xl w-full relative z-10" style={{ background: '#fce3e3ff' }}>
//     //       <h2 className="text-4xl font-bold text-center mb-3" style={{ color: '#6B3E8E' }}>
//     //         💝 THESE ARE FOR YOU 💝
//     //       </h2>
//     //       <p className="text-center opacity-70 mb-12 text-lg">Click to open!</p>

//     //       <div className="flex justify-center gap-8 flex-wrap">
//     //         <GiftCard
//     //           icon={<Music size={64} />}
//     //           onClick={() => setCurrentPage('music')}
//     //         />
//     //         <GiftCard
//     //           icon={<Camera size={64} />}
//     //           onClick={() => setCurrentPage('photos')}
//     //         />
//     //         <GiftCard
//     //           icon={<Mail size={64} />}
//     //           onClick={() => setCurrentPage('letter')}
//     //         />
//     //       </div>
//     //     </div>
//     //   </div>
//     // );

//   const GiftHubPage = () => (
//     <div
//       className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(135deg, #F6E9F9 0%, #FDEBF3 25%, #ffa8a8ff 50%, #fc7171ff 75%, #fc4d4dff 100%)",
//       }}
//     >
//       <FloatingBalloons />

//       {/* Glass Container */}
//       <div
//         className="rounded-[40px] p-12 max-w-5xl w-full relative z-10 border border-white/30 shadow-2xl"
//         style={{
//           background: "rgba(255, 255, 255, 0.25)", // Semi-transparent white
//           backdropFilter: "blur(5px)", // The "frosting" effect
//           WebkitBackdropFilter: "blur(5px)", // Safari support
//         }}
//       >
//         <h2
//           className="text-4xl font-bold text-center mb-3 drop-shadow-sm"
//           style={{ color: "#900000ff" }}
//         >
//           💝 THESE ARE FOR YOU 💝
//         </h2>
//         <p className="text-center text-purple-900/60 mb-12 text-lg font-medium">
//           Click to open!
//         </p>

//         <div className="flex justify-center gap-8 flex-wrap">
//           <GiftCard
//             icon={<Music size={64} className="text-red-500" />}
//             onClick={() => setCurrentPage("music")}
//           />
//           <GiftCard
//             icon={<Camera size={64} className="text-blue-500" />}
//             onClick={() => setCurrentPage("photos")}
//           />
//           <GiftCard
//             icon={<Mail size={64} className="text-purple-600" />}
//             onClick={() => setCurrentPage("letter")}
//           />
//         </div>
//       </div>
//     </div>
//   );

// //    const GiftCard = ({ icon, onClick }) => (
// //       <div
// //         className="w-44 h-44 rounded-[20px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-2"
// //        style={{
// //             background: "rgba(171, 145, 145, 1)", // Semi-transparent white
// //             backdropFilter: "blur(0px)", // The "frosting" effect
// //             WebkitBackdropFilter: "blur(2px)", // Safari support
// //           }}
// //         onClick={onClick}
// //       >
// //         <div
// //           style={{ color: "#9d2d2dff" }}
// //           className="transition-transform duration-300 hover:rotate-12"
// //         >
// //           {icon}
// //         </div>
// //       </div>
// //     );

//   const GiftCard = ({ icon, onClick }) => (
//     <div
//       className="w-44 h-44 rounded-[28px] flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-4 border border-white/40"
//       style={{
//         background: "rgba(255, 255, 255, 0.15)",
//         backdropFilter: "blur(10px)",
//         WebkitBackdropFilter: "blur(10px)",
//       }}
//       onClick={onClick}
//     >
//       <div
//         style={{ color: "#9d2d2dff" }}
//         className="transition-transform duration-300 hover:rotate-12 filter drop-shadow-sm"
//       >
//         {icon}
//       </div>
//     </div>
//   );

//   // Music Page
//   const MusicPage = () => (
//     <div
//       className="min-h-screen flex items-center justify-center p-8 relative"
//       style={{
//         background: "linear-gradient(135deg, #F6E9F9 0%, #FDEBF3 100%)",
//       }}
//     >
//       <FloatingBalloons />
//       <button
//         onClick={() => setCurrentPage("hub")}
//         className="absolute top-8 left-8 p-3 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 z-20"
//       >
//         <ArrowLeft size={24} style={{ color: "#6B3E8E" }} />
//       </button>

//       <div className="flex items-center gap-12 max-w-5xl relative z-10">
//         {/* Balloon Illustration */}
//         <div>
//           <svg width="200" height="280" viewBox="0 0 200 280">
//             <ellipse
//               cx="70"
//               cy="80"
//               rx="45"
//               ry="55"
//               fill="#F8BBD0"
//               opacity="0.8"
//             />
//             <ellipse
//               cx="130"
//               cy="70"
//               rx="45"
//               ry="55"
//               fill="#F8BBD0"
//               opacity="0.9"
//             />
//             <ellipse cx="100" cy="100" rx="50" ry="60" fill="#F06292" />
//             <path d="M 100 160 L 100 240" stroke="#6B3E8E" strokeWidth="2" />
//             <path d="M 100 240 L 85 260 L 100 255 L 115 260 Z" fill="#6B3E8E" />
//           </svg>
//         </div>

//         {/* Music Card */}
//         <div
//           className="bg-white rounded-[24px] p-8 shadow-2xl"
//           style={{ width: "420px" }}
//         >
//           <div
//             className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden"
//             style={{ background: "#E1BEE7" }}
//           >
//             <div className="w-full h-full flex items-center justify-center text-6xl">
//               🎵
//             </div>
//           </div>

//           <h3
//             className="text-2xl font-bold text-center mb-2"
//             style={{ color: "#6B3E8E" }}
//           >
//             Our Song 💕
//           </h3>
//           <p className="text-center opacity-70 mb-6">
//             This song reminds me of you
//           </p>

//           <div className="space-y-4">
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => setMusicPlaying(!musicPlaying)}
//                 className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
//                 style={{ background: "#C89AD6" }}
//               >
//                 {musicPlaying ? (
//                   <Pause size={24} color="white" />
//                 ) : (
//                   <Play size={24} color="white" />
//                 )}
//               </button>
//             </div>

//             <div
//               className="w-full h-2 rounded-full overflow-hidden"
//               style={{ background: "#F3DDF2" }}
//             >
//               <div
//                 className="h-full transition-all duration-1000 rounded-full"
//                 style={{
//                   background: "#AB47BC",
//                   width: musicPlaying ? "100%" : "0%",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Photos Page
//   const PhotosPage = () => {
//     const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

//     const photos = [
//       {
//         id: 1,
//         caption: "First Date",
//         emoji: "🌹",
//         description: "The day we met and my heart knew",
//       },
//       {
//         id: 2,
//         caption: "Our Wedding",
//         emoji: "💍",
//         description: "The best day of my life",
//       },
//       {
//         id: 3,
//         caption: "Beach Trip",
//         emoji: "🏖️",
//         description: "Sun, sand, and endless laughter",
//       },
//       {
//         id: 4,
//         caption: "Mountain Hike",
//         emoji: "⛰️",
//         description: "Reaching new heights together",
//       },
//       {
//         id: 5,
//         caption: "Anniversary",
//         emoji: "🎂",
//         description: "Celebrating our love",
//       },
//       {
//         id: 6,
//         caption: "Lazy Sunday",
//         emoji: "☕",
//         description: "Perfect moments at home",
//       },
//       {
//         id: 7,
//         caption: "Date Night",
//         emoji: "🍷",
//         description: "Romance and candlelight",
//       },
//       {
//         id: 8,
//         caption: "Road Trip",
//         emoji: "🚗",
//         description: "Adventures on the open road",
//       },
//       {
//         id: 9,
//         caption: "Together Forever",
//         emoji: "❤️",
//         description: "You and me, always",
//       },
//     ];

//     const goToNext = () => {
//       setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
//     };

//     const goToPrev = () => {
//       setCurrentPhotoIndex(
//         (prev) => (prev - 1 + photos.length) % photos.length
//       );
//     };

//     const currentPhoto = photos[currentPhotoIndex];

//     return (
//       <div
//         className="min-h-screen p-8 relative flex items-center justify-center"
//         style={{
//           background: "linear-gradient(135deg, #F6E9F9 0%, #FDEBF3 100%)",
//         }}
//       >
//         <FloatingBalloons />
//         <button
//           onClick={() => setCurrentPage("hub")}
//           className="absolute top-8 left-8 p-3 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 relative z-20"
//         >
//           <ArrowLeft size={24} style={{ color: "#6B3E8E" }} />
//         </button>

//         <div className="max-w-6xl w-full relative z-10">
//           <h2
//             className="text-4xl font-bold text-center mb-12"
//             style={{ color: "#6B3E8E" }}
//           >
//             Our Beautiful Memories 📸
//           </h2>

//           {/* Photo Album Container */}
//           <div className="flex gap-8 items-center justify-center">
//             {/* Left Navigation Arrow */}
//             <button
//               onClick={goToPrev}
//               className="p-4 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
//               style={{ color: "#6B3E8E" }}
//             >
//               <ArrowLeft size={32} />
//             </button>

//             {/* Photo Album Book */}
//             <div className="relative">
//               {/* Album Cover/Spine */}
//               <div
//                 className="absolute -left-8 top-0 bottom-0 w-8 rounded-l-2xl"
//                 style={{
//                   background: "linear-gradient(to right, #8E24AA, #AB47BC)",
//                   boxShadow: "-4px 0 12px rgba(0,0,0,0.2)",
//                 }}
//               />

//               {/* Main Album Page */}
//               <div
//                 className="bg-white rounded-2xl shadow-2xl p-12 relative"
//                 style={{
//                   width: "700px",
//                   minHeight: "500px",
//                   backgroundImage:
//                     "linear-gradient(to bottom, #FFFFFF 0%, #FFF9FC 100%)",
//                 }}
//               >
//                 {/* Decorative Corner Elements */}
//                 <div
//                   className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 opacity-20"
//                   style={{ borderColor: "#AB47BC" }}
//                 />
//                 <div
//                   className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 opacity-20"
//                   style={{ borderColor: "#AB47BC" }}
//                 />
//                 <div
//                   className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 opacity-20"
//                   style={{ borderColor: "#AB47BC" }}
//                 />
//                 <div
//                   className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 opacity-20"
//                   style={{ borderColor: "#AB47BC" }}
//                 />

//                 {/* Photo Frame */}
//                 <div className="mb-6">
//                   <div
//                     className="mx-auto rounded-xl overflow-hidden relative"
//                     style={{
//                       width: "400px",
//                       height: "350px",
//                       background: "#E1BEE7",
//                       border: "8px solid white",
//                       boxShadow:
//                         "0 4px 12px rgba(0,0,0,0.1), inset 0 0 20px rgba(171, 71, 188, 0.1)",
//                     }}
//                   >
//                     {/* Photo Content */}
//                     <div className="w-full h-full flex items-center justify-center text-9xl">
//                       {currentPhoto.emoji}
//                     </div>

//                     {/* Photo Corners (vintage style) */}
//                     <div
//                       className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2"
//                       style={{ borderColor: "#AB47BC" }}
//                     />
//                     <div
//                       className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2"
//                       style={{ borderColor: "#AB47BC" }}
//                     />
//                     <div
//                       className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2"
//                       style={{ borderColor: "#AB47BC" }}
//                     />
//                     <div
//                       className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2"
//                       style={{ borderColor: "#AB47BC" }}
//                     />
//                   </div>
//                 </div>

//                 {/* Photo Caption */}
//                 <div className="text-center">
//                   <h3
//                     className="text-3xl font-bold mb-2"
//                     style={{
//                       color: "#6B3E8E",
//                       fontFamily: "Brush Script MT, cursive",
//                     }}
//                   >
//                     {currentPhoto.caption}
//                   </h3>
//                   <p className="text-lg opacity-70 italic">
//                     "{currentPhoto.description}"
//                   </p>
//                 </div>

//                 {/* Page Number */}
//                 <div
//                   className="absolute bottom-6 right-12 text-sm opacity-40"
//                   style={{ color: "#6B3E8E" }}
//                 >
//                   {currentPhotoIndex + 1} / {photos.length}
//                 </div>
//               </div>

//               {/* Page Edge Effect */}
//               <div
//                 className="absolute -right-2 top-4 bottom-4 w-2 rounded-r-xl opacity-30"
//                 style={{ background: "#AB47BC" }}
//               />
//             </div>

//             {/* Right Navigation Arrow */}
//             <button
//               onClick={goToNext}
//               className="p-4 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 transform rotate-180"
//               style={{ color: "#6B3E8E" }}
//             >
//               <ArrowLeft size={32} />
//             </button>
//           </div>

//           {/* Thumbnail Navigation */}
//           <div className="flex justify-center gap-3 mt-8">
//             {photos.map((photo, index) => (
//               <button
//                 key={photo.id}
//                 onClick={() => setCurrentPhotoIndex(index)}
//                 className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
//                   index === currentPhotoIndex ? "ring-4 ring-purple-400" : ""
//                 }`}
//                 style={{
//                   background:
//                     index === currentPhotoIndex ? "#AB47BC" : "#E1BEE7",
//                   boxShadow:
//                     index === currentPhotoIndex
//                       ? "0 4px 12px rgba(171, 71, 188, 0.4)"
//                       : "0 2px 6px rgba(0,0,0,0.1)",
//                 }}
//               >
//                 <span className="text-xl">{photo.emoji}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {selectedPhoto && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8"
//             onClick={() => setSelectedPhoto(null)}
//           >
//             <div
//               className="bg-white rounded-3xl p-8 max-w-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="text-9xl text-center mb-4">
//                 {selectedPhoto.emoji}
//               </div>
//               <h3
//                 className="text-3xl font-bold text-center"
//                 style={{ color: "#6B3E8E" }}
//               >
//                 {selectedPhoto.caption}
//               </h3>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   // Letter Page
//   const LetterPage = () => (
//     <div
//       className="min-h-screen p-8 flex items-center justify-center relative"
//       style={{
//         background: "linear-gradient(135deg, #F6E9F9 0%, #FDEBF3 100%)",
//       }}
//     >
//       <FloatingBalloons />
//       <button
//         onClick={() => setCurrentPage("hub")}
//         className="absolute top-8 left-8 p-3 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 z-20"
//       >
//         <ArrowLeft size={24} style={{ color: "#6B3E8E" }} />
//       </button>

//       <div className="flex gap-12 max-w-6xl items-center relative z-10">
//         {/* Stacked Photos */}
//         <div className="relative">
//           <div
//             className="w-48 h-56 rounded-2xl absolute -rotate-6 shadow-xl transition-transform duration-300 hover:scale-105 hover:-rotate-12"
//             style={{ background: "#E1BEE7", top: "20px", left: "-20px" }}
//           >
//             <div className="w-full h-full flex items-center justify-center text-5xl">
//               🌹
//             </div>
//           </div>
//           <div
//             className="w-48 h-56 rounded-2xl absolute rotate-3 shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-6"
//             style={{ background: "#F8BBD0", top: "40px", left: "0" }}
//           >
//             <div className="w-full h-full flex items-center justify-center text-5xl">
//               💕
//             </div>
//           </div>
//           <div
//             className="w-48 h-56 rounded-2xl relative rotate-6 shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-12"
//             style={{ background: "#F3DDF2", top: "60px", left: "20px" }}
//           >
//             <div className="w-full h-full flex items-center justify-center text-5xl">
//               ❤️
//             </div>
//           </div>
//         </div>

//         {/* Letter Card */}
//         <div
//           className="bg-white rounded-[24px] p-10 shadow-2xl max-h-[620px] overflow-y-auto"
//           style={{ width: "520px" }}
//         >
//           <h3
//             className="text-3xl font-bold mb-6 text-center"
//             style={{ color: "#6B3E8E" }}
//           >
//             Happy Birthday, My Love! 💌
//           </h3>

//           <div className="space-y-4 text-gray-700 leading-relaxed">
//             <p>
//               On this special day, I just want to remind you how deeply you mean
//               to me. You are not just my wife, but my best friend, my biggest
//               blessing, and the reason I smile every day.
//             </p>
//             <p>
//               I'm so grateful for every laugh, every adventure, every quiet
//               moment we share together. You make my world especially so much
//               better.
//             </p>
//             <p>
//               May this year bring you everything you've dreamed of and more.
//               Here's to many more birthdays, many more memories, and a lifetime
//               of love we're building together.
//             </p>
//             <p>
//               Happy birthday, my love—here's to many more beautiful years
//               together. I love you endlessly through it all.
//             </p>
//             <p
//               className="text-right italic mt-8 font-medium"
//               style={{ color: "#6B3E8E" }}
//             >
//               — Yours, Always ❤️
//             </p>
//           </div>

//           <button
//             onClick={() => setCurrentPage("final")}
//             className="w-full mt-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105"
//             style={{ background: "#AB47BC" }}
//           >
//             Continue to Final Surprise 🎁
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // Final Page
//   const FinalPage = () => (
//     <div
//       className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden"
//       style={{
//         background: "linear-gradient(135deg, #F6E9F9 0%, #FDEBF3 100%)",
//       }}
//     >
//       <FloatingBalloons />
//       {showConfetti && (
//         <div className="absolute inset-0 pointer-events-none z-10">
//           {[...Array(80)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: "-10%",
//                 fontSize: `${Math.random() * 30 + 20}px`,
//                 animation: `confetti ${Math.random() * 3 + 2}s linear forwards`,
//                 animationDelay: `${Math.random() * 2}s`,
//               }}
//             >
//               {
//                 ["🎉", "🎊", "💖", "✨", "🎈", "💕", "🌟", "💝"][
//                   Math.floor(Math.random() * 8)
//                 ]
//               }
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="text-center max-w-4xl relative z-10">
//         <div className="text-8xl mb-8">🎉</div>
//         <h1 className="text-5xl font-bold mb-6" style={{ color: "#6B3E8E" }}>
//           I am so lucky to celebrate life with you 💖
//         </h1>
//         <p className="text-2xl opacity-80 mb-12">
//           Thank you for being you. Here's to many more adventures together!
//         </p>

//         <button
//           onClick={() => {
//             setCurrentPage("landing");
//             setMusicPlaying(false);
//           }}
//           className="px-12 py-4 rounded-full font-bold text-white text-xl transition-all duration-300 hover:scale-110 shadow-lg"
//           style={{ background: "#AB47BC" }}
//         >
//           Replay the Surprise 🔄
//         </button>
//       </div>
//     </div>
//   );

//   // Music Toggle (Global)
//   const MusicToggle = () =>
//     currentPage !== "landing" && (
//       <button
//         onClick={() => setMusicPlaying(!musicPlaying)}
//         className="fixed top-6 right-6 p-4 bg-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 z-50"
//         title={musicPlaying ? "Mute Music" : "Play Music"}
//       >
//         {musicPlaying ? (
//           <Volume2 size={24} style={{ color: "#AB47BC" }} />
//         ) : (
//           <VolumeX size={24} style={{ color: "#999" }} />
//         )}
//       </button>
//     );

//   return (
//     <div className="relative">
//       {/* Background Music */}
//       <audio ref={audioRef} loop>
//         <source src={ourSong} type="audio/mpeg" />
//       </audio>

//       <MusicToggle />
//       {currentPage === "landing" && <LandingPage />}
//       {currentPage === "hub" && <GiftHubPage />}
//       {currentPage === "music" && <MusicPage />}
//       {currentPage === "photos" && <PhotosPage />}
//       {currentPage === "letter" && <LetterPage />}
//       {currentPage === "final" && <FinalPage />}

//       <style>{`
//         @keyframes confetti {
//           0% { transform: translateY(-10%) rotate(0deg); opacity: 1; }
//           100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
//         }

//         @keyframes floatUp {
//           0% {
//             transform: translateY(0) translateX(0) rotate(0deg);
//             opacity: 0.6;
//           }
//           50% {
//             opacity: 0.8;
//           }
//           100% {
//             transform: translateY(-110vh) translateX(${
//               Math.random() * 200 - 100
//             }px) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         .balloon {
//           filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BirthdaySurprise;

// ------------------------------------------------------------------------------------------------------------

import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  Music,
  Camera,
  Mail,
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

// Note: Ensure your music file is in the correct path
import ourSong from "./assets/music.mp3";

const BirthdaySurprise = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);

  const wifeName = "Wify ❤️";

  // Photos Data
  const photos = [
    {
      id: 1,
      caption: "First Date",
      emoji: "🌹",
      description: "The day my life changed forever.",
    },
    {
      id: 2,
      caption: "Our Wedding",
      emoji: "💍",
      description: "The best 'Yes' I ever said.",
    },
    {
      id: 3,
      caption: "Beach Trip",
      emoji: "🏖️",
      description: "Sun, sand, and your beautiful smile.",
    },
    {
      id: 4,
      caption: "Together Forever",
      emoji: "❤️",
      description: "Every second with you is a gift.",
    },
  ];

  // Audio Logic
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      if (audioRef.current.currentTime === 0) audioRef.current.currentTime = 25;
    }
    if (musicPlaying && audioRef.current) {
      audioRef.current
        .play()
        .catch((e) => console.log("Audio play failed:", e));
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [musicPlaying]);

  // Confetti Logic
  useEffect(() => {
    if (currentPage === "final") {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  // --- REUSABLE COMPONENTS ---

  const FloatingBalloons = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute balloon"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-10%",
            fontSize: `${Math.random() * 20 + 30}px`,
            animation: `floatUp ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.5,
          }}
        >
          {["💝", "🎈", "❤️", "🌟", "🎉"][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );

  const GlassCard = ({ children, className = "" }) => (
    <div
      className={`relative z-10 border border-white/40 shadow-2xl overflow-hidden transition-all duration-500 ${className}`}
      style={{
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
      {children}
    </div>
  );

  const GiftCard = ({ icon, title, onClick }) => (
    <div
      className="group relative w-36 h-48 md:w-48 md:h-60 rounded-[32px] flex flex-col items-center justify-center cursor-pointer transition-all duration-500 border border-white/40 shadow-lg 
               hover:scale-110 hover:-translate-y-2 hover:bg-white/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      onClick={onClick}
    >
      {/* Icon Zoom & Glow */}
      <div
        className="mb-4 transition-all duration-500 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]"
        style={{ color: "#9d2d2dff" }}
      >
        {icon}
      </div>

      {/* Title Fade & Lift */}
      <div
        className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500"
        style={{ color: "#9d2d2dff" }}
      >
        {title}
      </div>

      {/* Inner Glass Glow Overlay */}
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Expanding Border */}
      <div className="absolute inset-0 rounded-[32px] border-2 border-transparent group-hover:border-white/40 transition-all duration-500 pointer-events-none scale-95 group-hover:scale-100" />
    </div>
  );

  // --- PAGE COMPONENTS ---

  const LandingPage = () => (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F6E9F9 0%, #FDEBF3 25%, #ffa8a8ff 50%, #fc7171ff 75%, #fc4d4dff 100%)",
      }}
    >
      <FloatingBalloons />
      <GlassCard className="rounded-[40px] p-8 md:p-12 max-w-2xl w-full text-center mx-4">
        <h1
          className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md"
          style={{ color: "#6B3E8E" }}
        >
          HAPPY BIRTHDAY {wifeName.toUpperCase()}
        </h1>
        <p className="text-base md:text-lg opacity-70 mb-8 font-medium italic">
          Click the cake for your surprise
        </p>
        <div
          className="cursor-pointer inline-block transition-transform duration-300 hover:scale-110 active:scale-95"
          onClick={() => {
            setCurrentPage("hub");
            setMusicPlaying(true);
          }}
        >
          <svg
            width="200"
            height="200"
            viewBox="0 0 240 240"
            className="mx-auto drop-shadow-xl"
          >
            <rect x="50" y="30" width="12" height="35" fill="#FFA726" rx="2" />
            <rect
              x="90"
              y="30"
              width="12"
              height="35"
              fill="#f53131ff"
              rx="2"
            />
            <rect x="130" y="30" width="12" height="35" fill="#42A5F5" rx="2" />
            <rect x="170" y="30" width="12" height="35" fill="#EF5350" rx="2" />
            <ellipse cx="56" cy="25" rx="6" ry="10" fill="#FFD54F" />
            <ellipse cx="96" cy="25" rx="6" ry="10" fill="#FFD54F" />
            <ellipse cx="136" cy="25" rx="6" ry="10" fill="#FFD54F" />
            <ellipse cx="176" cy="25" rx="6" ry="10" fill="#FFD54F" />
            <path
              d="M 30 70 Q 40 60, 50 70 T 70 70 T 90 70 T 110 70 T 130 70 T 150 70 T 170 70 T 190 70 T 210 70 L 210 85 L 30 85 Z"
              fill="#F3E5F5"
            />
            <rect
              x="30"
              y="85"
              width="180"
              height="90"
              fill="#ff4040ff"
              rx="4"
            />
            <ellipse cx="120" cy="175" rx="95" ry="20" fill="#ac0000ff" />
            <ellipse cx="120" cy="175" rx="90" ry="15" fill="#ba0000ff" />
          </svg>
        </div>
      </GlassCard>
    </div>
  );

  const GiftHubPage = () => (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F6E9F9 0%, #ffa8a8ff 100%)",
      }}
    >
      <FloatingBalloons />
      <GlassCard className="rounded-[40px] p-8 md:p-12 max-w-5xl w-full mx-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 drop-shadow-md"
          style={{ color: "#900000ff" }}
        >
          💝 THESE ARE FOR YOU 💝
        </h2>
        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          <GiftCard
            icon={<Music size={52} />}
            title="Our Song"
            onClick={() => setCurrentPage("music")}
          />
          <GiftCard
            icon={<Camera size={52} />}
            title="Moments"
            onClick={() => setCurrentPage("photos")}
          />
          <GiftCard
            icon={<Mail size={52} />}
            title="A Letter"
            onClick={() => setCurrentPage("letter")}
          />
        </div>
      </GlassCard>
    </div>
  );

  const MusicPage = () => (
    <div
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FDEBF3 0%, #fc7171ff 100%)",
      }}
    >
      <FloatingBalloons />
      <button
        onClick={() => setCurrentPage("hub")}
        className="absolute top-6 left-6 p-3 bg-white/40 backdrop-blur-md rounded-full z-20 shadow-lg border border-white/50"
      >
        <ArrowLeft size={24} style={{ color: "#6B3E8E" }} />
      </button>
      <GlassCard className="rounded-[32px] p-8 w-full max-w-[400px] text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-2xl bg-white/30 flex items-center justify-center text-6xl shadow-inner border border-white/20 transition-transform duration-700 hover:rotate-6">
          🎵
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#6B3E8E" }}>
          Our Song 💕
        </h3>
        <p className="text-sm opacity-60 mb-8 italic">
          Playing from your heart...
        </p>
        <button
          onClick={() => setMusicPlaying(!musicPlaying)}
          className="w-20 h-20 rounded-full bg-white/40 flex items-center justify-center mx-auto mb-8 transition-all hover:scale-110 active:scale-90 border border-white/60 shadow-xl group"
        >
          {musicPlaying ? (
            <Pause size={40} className="group-hover:text-purple-600" />
          ) : (
            <Play size={40} className="ml-1 group-hover:text-purple-600" />
          )}
        </button>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-1000"
            style={{ width: musicPlaying ? "100%" : "0%" }}
          />
        </div>
      </GlassCard>
    </div>
  );

  const PhotosPage = () => {
    const goToNext = () =>
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    const goToPrev = () =>
      setCurrentPhotoIndex(
        (prev) => (prev - 1 + photos.length) % photos.length
      );
    const currentPhoto = photos[currentPhotoIndex];

    return (
      <div
        className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #F6E9F9 0%, #fc4d4dff 100%)",
        }}
      >
        <FloatingBalloons />
        <button
          onClick={() => setCurrentPage("hub")}
          className="absolute top-6 left-6 p-3 bg-white/40 backdrop-blur rounded-full z-20 border border-white/50"
        >
          <ArrowLeft size={24} />
        </button>
        <GlassCard className="rounded-[32px] p-6 md:p-10 w-full max-w-[600px] text-center">
          <div className="aspect-square w-full bg-white/20 rounded-2xl flex items-center justify-center text-8xl md:text-9xl mb-6 shadow-inner border border-white/30 transition-all duration-500 hover:scale-[1.02]">
            {currentPhoto.emoji}
          </div>
          <h3
            className="text-2xl md:text-3xl font-bold mb-2 italic"
            style={{ color: "#900000ff", fontFamily: "cursive" }}
          >
            {currentPhoto.caption}
          </h3>
          <p className="text-sm md:text-base opacity-70 mb-8">
            "{currentPhoto.description}"
          </p>
          <div className="flex justify-between items-center">
            <button
              onClick={goToPrev}
              className="p-4 bg-white/30 rounded-full hover:bg-white/50 transition-all active:scale-90 shadow-md"
            >
              <ArrowLeft size={24} />
            </button>
            <span className="text-sm font-bold opacity-50">
              {currentPhotoIndex + 1} / {photos.length}
            </span>
            <button
              onClick={goToNext}
              className="p-4 bg-white/30 rounded-full hover:bg-white/50 transition-all active:scale-90 shadow-md rotate-180"
            >
              <ArrowLeft size={24} />
            </button>
          </div>
        </GlassCard>
      </div>
    );
  };

  const LetterPage = () => (
    <div
      className="min-h-screen p-4 md:p-8 flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FDEBF3 0%, #ffa8a8ff 100%)",
      }}
    >
      <FloatingBalloons />
      <button
        onClick={() => setCurrentPage("hub")}
        className="absolute top-6 left-6 p-3 bg-white/40 backdrop-blur rounded-full z-20 shadow-md border border-white/50"
      >
        <ArrowLeft size={24} />
      </button>
      <GlassCard className="rounded-[24px] p-8 md:p-12 w-full max-w-[550px] max-h-[85vh] overflow-y-auto relative z-10 text-center">
        <h3
          className="text-2xl md:text-3xl font-bold mb-8"
          style={{ color: "#6B3E8E" }}
        >
          My Dearest, 💌
        </h3>
        <div className="space-y-6 text-sm md:text-lg text-gray-700 leading-relaxed italic text-left">
          <p>
            Every single day, I thank the stars that our paths crossed. You
            aren't just my partner; you are my home, my peace, and my greatest
            adventure.
          </p>
          <p>
            Watching you grow and navigate the world with such grace is the
            highlight of my life. You make everything—even the simplest
            moments—feel magical.
          </p>
          <p>
            On your birthday, my only wish is that you see yourself through my
            eyes: a breathtaking, kind, and brilliant soul who deserves the
            world.
          </p>
          <p
            className="text-right font-bold mt-10"
            style={{ color: "#6B3E8E" }}
          >
            — Forever Yours, Always ❤️
          </p>
        </div>
        <button
          onClick={() => setCurrentPage("final")}
          className="w-full mt-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          The Final Surprise 🎁
        </button>
      </GlassCard>
    </div>
  );

  const FinalPage = () => (
    <div
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden text-center"
      style={{
        background: "linear-gradient(135deg, #F6E9F9 0%, #FDEBF3 100%)",
      }}
    >
      <FloatingBalloons />
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-10%",
                fontSize: `50000px`,
                animation: `confetti ${Math.random() * 8 + 8}s linear forwards`,
              }}
            >
              {
                ["🎉", "🎊", "💖", "✨", "🎈", "💕", "🌟", "💝"][
                  Math.floor(Math.random() * 8)
                ]
              }
            </div>
          ))}
        </div>
      )}
      <GlassCard className="rounded-[40px] p-10 md:p-16 max-w-4xl mx-4">
        <div className="text-7xl md:text-9xl mb-8 animate-bounce">🎉</div>
        <h1
          className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md"
          style={{ color: "#6B3E8E" }}
        >
          You Are My Everything 💖
        </h1>
        <p className="text-lg md:text-2xl opacity-80 mb-12 italic">
          Here's to another beautiful year of us!
        </p>
        <button
          onClick={() => {
            setCurrentPage("landing");
            setMusicPlaying(false);
          }}
          className="px-12 py-4 rounded-full font-bold text-white text-xl bg-gradient-to-r from-purple-600 to-pink-600 shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          Start Over 🔄
        </button>
      </GlassCard>
    </div>
  );

  // --- RENDER ---

  return (
    <div className="relative font-sans text-slate-800 antialiased overflow-x-hidden">
      <audio ref={audioRef} loop>
        <source src={ourSong} type="audio/mpeg" />
      </audio>

      {/* Global Music Toggle */}
      {currentPage !== "landing" && (
        <button
          onClick={() => setMusicPlaying(!musicPlaying)}
          className="fixed top-6 right-6 p-4 bg-white/40 backdrop-blur rounded-full shadow-lg z-50 border border-white/50 transition-all hover:bg-white/60 active:scale-90"
        >
          {musicPlaying ? (
            <Volume2 size={24} className="text-purple-600" />
          ) : (
            <VolumeX size={24} className="text-gray-400" />
          )}
        </button>
      )}

      {/* Page Routing */}
      {currentPage === "landing" && <LandingPage />}
      {currentPage === "hub" && <GiftHubPage />}
      {currentPage === "music" && <MusicPage />}
      {currentPage === "photos" && <PhotosPage />}
      {currentPage === "letter" && <LetterPage />}
      {currentPage === "final" && <FinalPage />}

      <style>{`
        @keyframes confetti { 0% { transform: translateY(-10%) rotate(0deg); opacity: 1; } 100% { transform: translateY(110vh) rotate(720deg); opacity: 0; } }
        @keyframes floatUp { 0% { transform: translateY(0) rotate(0deg); opacity: 0; } 10% { opacity: 0.6; } 90% { opacity: 0.6; } 100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; } }
        .balloon { filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1)); }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); }
        ::-webkit-scrollbar-thumb { background: rgba(107, 62, 142, 0.3); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(107, 62, 142, 0.5); }
      `}</style>
    </div>
  );
};

export default BirthdaySurprise;
