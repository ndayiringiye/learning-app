import { BookOpen, Star, Users, Clock } from 'lucide-react';

const badgeColorMap = {
  BESTSELLER: 'bg-yellow-400 text-black',
  HOT: 'bg-red-500 text-white',
  TRENDING: 'bg-green-500 text-white',
  NEW: 'bg-blue-500 text-white',
  POPULAR: 'bg-purple-500 text-white',
  PREMIUM: 'bg-gray-800 text-white',
};

const CourseCard = ({ course }) => {
  const badgeStyle = badgeColorMap[course.badge] || 'bg-gray-700 text-white';

  return (
    <div className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative w-full h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <BookOpen className="text-white" size={48} />
        </div>
        <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${badgeStyle}`}>
          {course.badge}
        </span>
        <span className="absolute top-3 right-3 bg-white/90 text-gray-900 font-bold text-sm px-3 py-1 rounded-full backdrop-blur-md">
          ${course.price}
        </span>

        {/* Level */}
        <span className="absolute bottom-3 left-3 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
          {course.level}
        </span>
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {course.description}
        </p>

        <p className="text-sm font-medium text-purple-600">by {course.instructor}</p>
        <div className="flex justify-between text-xs text-gray-500 pt-2">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-400" size={14} fill="currentColor" />
            <span>{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
        </div>

        <button className="w-full mt-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
