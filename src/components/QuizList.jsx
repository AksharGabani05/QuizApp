import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuizzes } from '../services/quizService';
import QuizCard from './QuizCard';

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getQuizzes().then(setQuizzes);
  }, []);

  const handleQuizSelect = (id) => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div >
      <div 
        className="bg-cover bg-center h-64 flex items-center justify-center mb-8"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/db/34/d4/db34d40b271fb59477621550bf73ea0b.jpg')"
        }}
      >
        <div className="bg-white bg-opacity-60 w-full h-full flex items-center justify-center">
          <h1 className="text-6xl font-bold text-sky-900  px-4">
            Available Quizzes
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} onSelect={handleQuizSelect} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizList;