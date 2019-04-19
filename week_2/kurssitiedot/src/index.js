import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'


const App = () => {
    const courses = [
      {
        name: 'Half Stack -sovelluskehitys',
        id: 1,
        parts: [
          {
            name: 'Reactin perusteet',
            exercises: 10,
            id: 1
          },
          {
            name: 'Tiedonvälitys propseilla',
            exercises: 7,
            id: 2
          },
          {
            name: 'Komponenttien tila',
            exercises: 14,
            id: 3
          }
        ]
      },
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewaret',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  

  return (
//  {courses.map(i => {
//      return <div key={name}>{<Course course={courses[i]}/>}</div>
//  })}
  //   <div>
  //     <Course course={courses[0]}/>
  //     <Course course={courses[1]}/>
  // </div>
  <div>
 {/* courses.map(x => <div>{courses}</div>) */}
   {courses.map(x => <p key={x.id}><Course course={x}/></p>)}
  </div>
    //  miten tämän saa suoritettua mielivaltaisella määrällä kursseja???
  )
}


ReactDOM.render(<App />, document.getElementById('root'))