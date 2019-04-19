import React from 'react'
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
       {props.parts.map(x => <p key={x.id}>{x.name} {x.exercises}</p>)}
   </div>
        // <div>
   // <p>{props.part.name} {props.part.exercises}</p>
   // </div>
    )
}

const Content = (props) => {
    return (

    <div>
    <Part parts={props.parts}/>
    
    </div>

    // <div>
    //<Part part={props.parts[0]}/>
    //<Part part={props.parts[1]}/>
    //<Part part={props.parts[2]}/>
    //</div>
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

const Course = (props) => {
    console.log(props)
    return (
//sdasda
        <div>
            
      <Header course={props.course.name} />
      <Content parts={props.course.parts}/>
      <Total parts = {props.course.parts} />
    </div>

    )
}

export default Course