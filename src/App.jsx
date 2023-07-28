import './App.scss'
import React from 'react';

const questions = [

  {
    title: 'Html - деген эмне ?',
    variants: ['приложение', 'веб-разметка', 'программалоо тили'],
    correct: 1,
  },
  {
    title: 'Css-деген эмне?',
    variants: [
      'htmlдин бири',
      ' функция',
      'Веб-стилили.',
    ],
    correct: 2,
  },
  {
    title: 'React деген эмне?',
    variants: [
      'Библиотека JavaScript.',
      'Тег',
      'Хук',
    ],
    correct: 3,
  },
  {
    title: 'JavaScript деген эмне?',
    variants: [
      'Бул сайт',
      'программалоо тили',
      'Бул дагы веб-разметка',
    ],
    correct: 4,
  },
  {
    title: 'Git деген эмне?',
    variants: [
      'приложение',
      'github бири',
      'Версияны башкаруу системасы.',
    ],
    correct: 5,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href="/"> 
      <button>Попробовать снова</button>
      </a>
      
    </div>
  );
}

function Game({step, q, Onlick}) {
  const p= Math.round( (step / questions.length) *100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${p}%` }} className="progress__inner"></div>
      </div>
      <h1>{q.title}</h1>
      <ul>
       {q.variants.map((text, index)=>(
        <li onClick={()=>{Onlick(index) }} key={text}>{text }</li>
         ))}
      </ul>
    </>
  );
}

function App() {

  const [step, setstep] = React.useState(0)
  const [correct, setcorrect] = React.useState(0)
  const q = questions[step]
 const Onlick=(index)=>{
  setstep(step + 1)
  if(index==q.correct){
    setcorrect(correct +1)
  }
 }
  return (
    <div className="App">
      {
        step !=  questions.length ?(<Game step={step} q={q} Onlick={Onlick}/>) :( <Result correct={correct}/>)
      }
    
    </div>
  );
}

export default App;
