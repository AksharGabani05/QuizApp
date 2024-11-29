import React from 'react';

const QuizCard = ({ quiz, onSelect }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out hover:shadow-2xl">
      <img
        src={quiz.image}
        alt={quiz.title}
        className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{quiz.title}</h2>
        <p className="text-md text-gray-700 mb-5 leading-relaxed">{quiz.description}</p>
        <button
          onClick={() => onSelect(quiz.id)}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
