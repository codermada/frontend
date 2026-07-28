type CardProps = {
  title: string;
  image?: string;
  description: string;
};

// const Card = ({
//   title = "toloandr",
//   image = "/toloandr.png",
//   description = "A weird dude xD",
// }: CardProps) => {
//   return (
//     <div className="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
//       <img
//         src={image}
//         alt={title}
//         className="h-48 w-full object-cover"
//       />

//       <div className="p-4">
//         <h2 className="mb-2 text-xl font-semibold text-gray-900">
//           {title}
//         </h2>

//         <p className="text-sm text-gray-600">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// const Card = ({
//   title = "toloandr",
//   image = "/toloandr.png",
//   description = "A weird dude xD",
// }: CardProps) => {
//   return (
//     <div className="w-72 rounded-2xl border-4 border-yellow-400 bg-gradient-to-b from-yellow-100 via-yellow-50 to-white p-3 shadow-2xl transition-transform duration-200 hover:scale-105">
//       {/* Title */}
//       <div className="mb-3 flex items-center justify-between rounded-lg bg-yellow-300 px-3 py-2 shadow">
//         <h2 className="text-lg font-bold tracking-wide text-gray-900">
//           {title}
//         </h2>
//         <span className="text-xl">⭐</span>
//       </div>

//       {/* Image */}
//       <div className="overflow-hidden rounded-lg border-2 border-yellow-500 bg-white">
//         <img
//           src={image}
//           alt={title}
//           className="h-52 w-full object-cover"
//         />
//       </div>

//       {/* Description */}
//       <div className="mt-3 rounded-lg bg-white/80 p-3 text-center shadow-inner">
//         <p className="text-sm italic text-gray-700">{description}</p>
//       </div>

//       {/* Footer */}
//       <div className="mt-3 flex justify-between text-xs font-semibold text-gray-600">
//         <span>Lv. 99</span>
//         <span>❤️ 999 HP</span>
//       </div>
//     </div>
//   );
// };

const Card = ({
  title = "User",
  image = "/avatar.svg",
  description = "Anonymous user",
}: CardProps) => {
  return (
    <div className="w-72 rounded-2xl border-2 border-violet-500 bg-gradient-to-b from-gray-900 via-gray-950 to-black p-3 shadow-2xl shadow-violet-900/40 transition-transform duration-200 hover:-translate-y-1 hover:shadow-violet-500/30">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between rounded-lg border border-violet-500/50 bg-violet-900/40 px-3 py-2">
        <h2 className="text-lg font-bold tracking-wide text-white">
          {title}
        </h2>
        <span className="text-yellow-400">★</span>
      </div>

      {/* Image */}
      <div className="overflow-hidden rounded-lg border-2 border-violet-400 bg-black">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="mt-3 rounded-lg border border-gray-700 bg-gray-900/80 p-3">
        <p className="text-sm italic text-gray-300">{description}</p>
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between text-xs font-semibold text-gray-400">
        <span>LV. 99</span>
        <span className="text-red-400">❤ 999 HP</span>
      </div>
    </div>
  );
};

export default Card;
