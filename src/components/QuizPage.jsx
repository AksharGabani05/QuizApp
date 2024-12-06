import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizDetails } from '../services/quizService';

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (id) {
      getQuizDetails(parseInt(id)).then(setQuiz);
    }
  }, [id]);

  const handleAnswer = (answerIndex) => {
    setUserAnswers([...userAnswers, answerIndex]);
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/score', { state: { quiz, userAnswers: [...userAnswers, answerIndex] } });
    }
  };

  if (!quiz) return <div className="flex items-center justify-center h-screen text-lg">Loading...</div>;

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
        
        <h1 className="text-4xl font-bold text-sky-800 text-center mb-6">{quiz.title}</h1>

        
        <div className="relative w-full bg-gray-200 rounded-full h-4 mb-6">
          <div
            className="absolute bg-sky-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

       
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </h2>
          <p className="text-lg text-gray-700">{question.text}</p>
        </div>

       
        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 text-left bg-gray-100 rounded-lg shadow-md hover:bg-sky-100 focus:bg-sky-200 transition duration-300"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
