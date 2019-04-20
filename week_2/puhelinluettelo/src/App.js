import React, { useState } from 'react'




// const Filter = () => {
// return (<div>
//  </div> )
// }

// const NameForm = () => {
  
// }

// const NumberForm = () => {
  
// }

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [restriction, setRestriction] = useState('')

const personsToShow = () => {
  return persons.filter(person => person.name.toLowerCase().includes(restriction.toLowerCase()))

}



  const rows = () => {
console.log(personsToShow())
return ( <div>
{personsToShow().
map(person => <div key={person.name}>{person.name} {person.number}</div>)}
</div>
)
}

const addPerson = (event) => {

  event.preventDefault()
const personObject = {
  name: newName,
  number: newNumber
}

if (persons.map(x => x.name).includes(newName)) {
  
  setNewName('')
  alert(`${newName} on jo luettelossa`)
} else {

setPersons(persons.concat(personObject))
setNewName('')
setNewNumber('')
}
}

const handleNameChange = (event) => {
  setNewName(event.target.value)
}
const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}

const handleRestrictionChange = (event) => {
  setRestriction(event.target.value)
}

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      {/* <Filter f/> */}
      <form>
        <div>rajaa näytettäviä: <input onChange = {handleRestrictionChange}/></div>
        
</form> 
      <h3>Lisää uusi</h3>
      <form onSubmit = {addPerson}>
        <div>nimi: <input value={newName} onChange={handleNameChange}/></div>
        <div>numero: <input value={newNumber} onChange={handleNumberChange}/> </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h3>Numerot</h3>
      
      <div>{rows()}</div>
      
    </div>
  )

}

export default App