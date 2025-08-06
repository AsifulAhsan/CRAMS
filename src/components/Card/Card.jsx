import { Star } from 'lucide-react';

function Card() {
  return (
    <div className="bg-white bg-opacity-80 border border-gray-200 rounded-lg shadow-md p-6 max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-3">
        <Star size={20} className="text-blue-500" />
        <h3 className="text-lg font-semibold text-gray-800">3.5</h3>
      </div>
      <p className="mt-3 text-gray-600">need more </p>
    </div>
  );
}

export default Card;