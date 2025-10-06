interface CardProps {
  value: string;
  label: string;
  className?: string;
}

function Card({ value, label, className }: CardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white p-6 rounded-3xl border-1 border-primary-medium/25 w-full h-45 ${className || ''}`}
    >
      <h2 className="text-6xl font-bold mb-2 text-primary-medium">{value}</h2>
      <p className="text-black text-sm font-bold">{label}</p>
    </div>
  );
}

export default Card;
