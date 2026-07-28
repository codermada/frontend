import Card from "./components/Card";

type CardProps = {
  title: string;
  image?: string;
  description: string;
};

function App() {
  const cards: CardProps[] = [
    {
      title: "Alice Johnson",
      description: "Frontend developer who enjoys React, coffee, and hiking.",
    },
    {
      title: "Michael Chen",
      description: "UI/UX designer with a passion for clean interfaces.",
    },
    {
      title: "Sophia Martinez",
      description: "Photographer and traveler exploring new places every month.",
    },
    {
      title: "James Wilson",
      description: "Backend engineer specializing in Node.js and cloud services.",
    },
    {
      title: "Emma Brown",
      description: "Digital artist creating illustrations and concept art.",
    },
    {
      title: "David Kim",
      description: "Fitness enthusiast and part-time software developer.",
    },
    {
      title: "toloandr",
      image: "/toloandr.png",
      description: "Amateur artist"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-950 p-8">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
