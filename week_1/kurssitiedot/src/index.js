import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)

    return (
    <div>
    <h1>{props.course}</h1>
    </div>
    )
}

const Part = (props) => {
    return (
    <div>
    <p>{props.part.name} {props.part.exercises}</p>
    </div>
    )
}

const Content = (props) => {
    return (
    <div>
    <Part part={props.parts[0]}/>
    <Part part={props.parts[1]}/>
    <Part part={props.parts[2]}/>
    </div>
    )
}

const Total = (props) => {
    return (
    <div>
    <p>yhteensä {props.parts.map( x => x.exercises)
        .reduce((partial_sum, a) => partial_sum + a)} tehtävää</p>
    </div>
    )
}


const App = () => {
    const course = {
      name: 'Half Stack -sovelluskehitys',
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        }
      ]
    }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
  
}


// const App = () => {
//   const course = 'Half Stack -sovelluskehitys'
//   const part1 = 'Reactin perusteet'
//   const exercises1 = 10
//   const part2 = 'Tiedonvälitys propseilla'
//   const exercises2 = 7
//   const part3 = 'Komponenttien tila'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>yhteensä {exercises1 + exercises2 + exercises3} tehtävää</p>
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'))