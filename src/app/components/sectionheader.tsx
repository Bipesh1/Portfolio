export default function SectionHeader({ emoji, title }:{
    emoji: any;
    title: string;
}) {
    return (
      <div className="flex items-center mb-8">
        <span className="text-3xl mr-4">{emoji}</span>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <div className="hidden md:block flex-grow ml-6 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
      </div>
    );
  }