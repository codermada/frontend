type CardProps = {
  title: string;
  image: string;
  description: string;
};

const Card = ({ title, image, description }: CardProps) => {
  return (
    <div className="w-72 rounded-2xl border-4 border-yellow-400 bg-gradient-to-b from-yellow-100 to-yellow-300 p-4 shadow-2xl transition-transform hover:scale-105">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="rounded-full bg-yellow-500 px-3 py-1 text-xs font-bold text-white">
          ⭐ Rare
        </span>
      </div>

      <div className="rounded-xl border-2 border-yellow-500 bg-white p-4">
        <img
          src={image}
          alt="Profile"
          className="mx-auto h-40 w-40 rounded-full border-4 border-yellow-400 object-cover"
        />
      </div>

      <p className="mt-4 text-center text-sm text-gray-700 italic">
        {description}
      </p>

      <div className="mt-4 rounded-lg bg-white/70 p-3">
        <div className="flex justify-between">
          <span className="font-semibold">⚡ Coding</span>
          <span>95</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">🧠 Problem Solving</span>
          <span>90</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">🚀 Creativity</span>
          <span>88</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
