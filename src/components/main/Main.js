import React from 'react';
import Header from '../common/Header';
import ProfileIcon from '../common/ProfileIcon';
import QuizBox from '../main/QuizBox';

const Main = ({ quizzes, onSelectQuiz, onOpenProfile }) => {
  return (
    <div className="main-page">
      <Header title="Gaming Quiz App" image="/path/to/header-image.jpg" />
      <ProfileIcon src="/path/to/profile-icon.jpg" onClick={onOpenProfile} />
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <QuizBox
            key={quiz.id}
            themeName={quiz.themeName}
            description={quiz.description}
            onSelect={() => onSelectQuiz(quiz.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;