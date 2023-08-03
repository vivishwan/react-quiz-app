import React, { useState } from 'react';

export default function App() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  //useState
  //question number useState
  const [currentQues, setCurrentQues] = useState(0);

  //show score useState
  const [showScore, setShowScore] = useState(false);

  //actual score value useState
  const [score, setScore] = useState(0);

  //prev score values useState
  const [prevScore, setPrevScore] = useState(0);

  //handle the reset quiz button
  const handleResetQuiz = () => {
    setPrevScore(score);
    setScore(0);
    setShowScore(false);
    setCurrentQues(0);
  };

  //handle answer button click
  //argument is the isCorrect from object, we need it to calculate score
  const handleAnswerButton = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQues + 1;
    if (nextQuestion < questions.length) {
      setCurrentQues(nextQuestion);
    } else {
      // alert(`${currentQues}`);
      setShowScore(true);
    }

    //check the current question
    console.log(currentQues);
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          {`You scored ${score} out of ${questions.length}`}
          <button
            onClick={() => {
              handleResetQuiz();
            }}
          >
            Reset Quiz
          </button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>{`Question ${currentQues + 1}`}</span>/{questions.length}
            </div>
            <div className='question-text'>
              {questions[currentQues].questionText}
            </div>
            <span>Previous score was: {prevScore}</span>
          </div>
          <div className='answer-section'>
            {questions[currentQues].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButton(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
