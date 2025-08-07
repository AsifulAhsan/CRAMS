function Card({title, subtitle, description}) {
  return (
    <div className="p-4">
      <div className=" bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-35 w-60">
        <p>{title}</p>
        <p className="text-2xl font-medium">{subtitle}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
