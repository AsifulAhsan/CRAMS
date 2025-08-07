function Card({ title, subtitle, description}) {
  return (
    <div className="p-4">
      <div className="flex-col bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow-md px-6 p-4 items-center hover:shadow-lg transition-shadow duration-300 h-35 w-60">
        <h1 className="text-lg font-normal">{title}</h1>
        <div className="mt-4">
          <p className="text-2xl font-semibold mb-1">{subtitle}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
