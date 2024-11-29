import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScoreSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { quiz, userAnswers } = location.state;

  const score = quiz.questions.reduce((acc, question, index) => {
    return acc + (question.correctAnswer === userAnswers[index] ? 1 : 0);
  }, 0);

  const percentage = (score / quiz.questions.length) * 100;

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Score Hero Section */}
      <div className="text-center bg-gradient-to-r from-blue-400 to-sky-500 text-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Quiz Results</h1>
        <p className="text-2xl font-semibold">
          Your Score: <span className="text-yellow-300">{score}</span> /{' '}
          {quiz.questions.length}
        </p>
        <p className="text-xl mt-2">
          Accuracy: <span className="font-bold">{percentage.toFixed(2)}%</span>
        </p>
      </div>

      {/* Question Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Question Breakdown</h2>
        <div className="space-y-6">
          {quiz.questions.map((question, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-sm ${
                question.correctAnswer === userAnswers[index]
                  ? 'bg-green-50 border-l-4 border-green-400'
                  : 'bg-red-50 border-l-4 border-red-400'
              }`}
            >
              <p className="font-bold mb-2">{`Q${index + 1}: ${question.text}`}</p>
              <p className="text-gray-700">
                <span className="font-semibold">Correct Answer:</span>{' '}
                <span className="text-green-600">
                  {question.options[question.correctAnswer]}
                </span>
              </p>
              <p>
                <span className="font-semibold">Your Answer:</span>{' '}
                <span
                  className={
                    question.correctAnswer === userAnswers[index]
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {question.options[userAnswers[index]] || 'No Answer'}
                </span>
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-8 w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Back to Quiz List
        </button>
      </div>
    </div>
  );
};

export default ScoreSummary;
