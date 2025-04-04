const Numbers = ({personsFiltered, deleteNum}) => {

    return (
      <ul>
      {personsFiltered.map(person => <li key={person.id}>{person.name}: {person.number}<button onClick={() => deleteNum(person.id)}>delete</button></li>)}
      </ul>)
  }

  export default Numbers