import React, { useState, useEffect } from 'react';
import './App.css';

const questions = [
  {
    id: 1,
    question: '1. What is React?',
    options: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system', 'A text editor'],
    answer: 'A JavaScript library for building user interfaces'
  },
  {
    id: 2,
    question: '2. What does JSX stand for?',
    options: ['JavaScript XML', 'JavaScript Extension', 'Java XML', 'Java Standard XML'],
    answer: 'JavaScript XML'
  },
  {
    id: 3,
    question: '3. What function is used to render a React component?',
    options: ['render()', 'create()', 'build()', 'load()'],
    answer: 'render()'
  },
  {
    id: 4,
    question: '4. Which hook is used to add state to a functional component?',
    options: ['useState()', 'setState()', 'useEffect()', 'useContext()'],
    answer: 'useState()'
  },
  {
    id: 5,
    question: '5. What lifecycle method is used for performing side effects in React?',
    options: ['componentDidMount()', 'componentDidUpdate()', 'componentWillUnmount()', 'render()'],
    answer: 'componentDidMount()'
  },
  {
    id: 6,
    question: '6. What is the purpose of props in React?',
    options: ['To pass data from parent to child components', 'To style components', 'To manage component state', 'To define routes in the application'],
    answer: 'To pass data from parent to child components'
  },
  {
    id: 7,
    question: '7. What is the virtual DOM in React?',
    options: ['A lightweight copy of the actual DOM', 'An alternative way to write HTML', 'A built-in React component', 'A data storage system'],
    answer: 'A lightweight copy of the actual DOM'
  },
  {
    id: 8,
    question: '8. Which method is used to handle events in React?',
    options: ['onClick', 'onEvent', 'handleEvent', 'eventHandler'],
    answer: 'onClick'
  },
  {
    id: 9,
    question: '9. What does the useEffect hook do in React?',
    options: ['Performs side effects in functional components', 'Renders a component', 'Manages component state', 'Handles HTTP requests'],
    answer: 'Performs side effects in functional components'
  },
  {
    id: 10,
    question: '10. What is the purpose of the key prop in React?',
    options: ['To uniquely identify elements in an array', 'To style components', 'To manage component state', 'To handle routing in the application'],
    answer: 'To uniquely identify elements in an array'
  },

  {
    id: 11,
    question: '11. What is the purpose of the useContext hook in React?',
    options: ['To manage component state', 'To handle HTTP requests', 'To share data between components without having to pass props through every level of the component tree', 'To define routes in the application'],
    answer: 'To share data between components without having to pass props through every level of the component tree'
  },
  {
    id: 12,
    question: '12. What is the role of the componentDidMount lifecycle method in React?',
    options: ['To perform side effects after the component has rendered', 'To update the component state', 'To handle events', 'To remove the component from the DOM'],
    answer: 'To perform side effects after the component has rendered'
  },
  {
    id: 13,
    question: '13. What is a React fragment?',
    options: ['A piece of code that performs a specific task', 'A container for grouping elements without adding extra nodes to the DOM', 'A special type of component', 'A built-in React method'],
    answer: 'A container for grouping elements without adding extra nodes to the DOM'
  },
  {
    id: 14,
    question: '14. How do you conditionally render components in React?',
    options: ['By using the if-else statement', 'By using the switch statement', 'By using the ternary operator', 'By using the for loop'],
    answer: 'By using the ternary operator'
  },
  {
    id: 15,
    question: '15. What is the purpose of the useCallback hook in React?',
    options: ['To perform data fetching', 'To manage component state', 'To memoize functions for better performance', 'To define routes in the application'],
    answer: 'To memoize functions for better performance'
  },
  {
    id: 16,
    question: '16. What is the role of the useRef hook in React?',
    options: ['To manage component state', 'To store a mutable value in a variable that persists through component re-renders', 'To handle HTTP requests', 'To define routes in the application'],
    answer: 'To store a mutable value in a variable that persists through component re-renders'
  },
  {
    id: 17,
    question: '17. What is the purpose of the useMemo hook in React?',
    options: ['To memoize functions for better performance', 'To manage component state', 'To perform data fetching', 'To handle HTTP requests'],
    answer: 'To memoize functions for better performance'
  },
  {
    id: 18,
    question: '18. What is the role of the componentWillUnmount lifecycle method in React?',
    options: ['To perform cleanup before the component is removed from the DOM', 'To update the component state', 'To handle events', 'To remove the component from the DOM'],
    answer: 'To perform cleanup before the component is removed from the DOM'
  },
  {
    id: 19,
    question: '19. What is the purpose of the useHistory hook in React Router?',
    options: ['To perform data fetching', 'To manage component state', 'To define routes in the application', 'To access the browser history and navigate between pages'],
    answer: 'To access the browser history and navigate between pages'
  },
  {
    id: 20,
    question: '20. How do you define routes in a React application?',
    options: ['By using the Route component from React Router', 'By using the link tag in HTML', 'By using the import statement', 'By using the render method in React components'],
    answer: 'By using the Route component from React Router'
  }
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [currentOptions, setCurrentOptions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    if (!submitted && answeredQuestions.length < questions.length) {
      const unansweredQuestions = questions.filter(question => !answeredQuestions.includes(question.id));
      const randomQuestion = unansweredQuestions[Math.floor(Math.random() * unansweredQuestions.length)];
      setCurrentQuestion(randomQuestion || {});
      setCurrentOptions(randomQuestion ? randomQuestion.options : []);
    }
  }, [answeredQuestions, submitted]);

  const handleAnswer = (selectedOption) => {
    if (!submitted) {
      if (selectedOption === currentQuestion.answer) {
        setScore(score + 1);
      }
      setAnsweredQuestions([...answeredQuestions, currentQuestion.id]);
    }
  };

  const handleSubmit = () => {
    if (answeredQuestions.length === 20) {
      setSubmitted(true);
    }
  };

  const handleBackButtonClick = () => {
    window.location.reload();
  };

  return (
    <div className="quiz-container">
      <div className="completion-message">
        {!submitted && answeredQuestions.length === questions.length ? "ทำข้อสอบครบแล้ว" : ""}
      </div>
      <div className="input-box">
        {!submitted && answeredQuestions.length === questions.length ? (
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        ) : null}
      </div>

      <div className="submit-button">
        {!submitted && answeredQuestions.length === questions.length ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : null}
      </div>

      {!submitted && answeredQuestions.length !== questions.length ? (
        <>
          <h2 className="question">{currentQuestion.question}</h2>
          <ul className="options">
            {currentOptions.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
            ))}
          </ul>
          <p className="score">Score: {score}</p>
          {answeredQuestions.length === 20 && (
            <div className="submit-button">
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </>
      ) : null}

      {/* แสดงผลเมื่อ submitted เป็น true */}
      {submitted && (
        <div className="result-table">
          <h2>Borad Score</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{score}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleBackButtonClick}>ทำใหม่</button>
      </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

