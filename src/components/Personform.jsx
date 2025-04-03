const Personform = ({addNewName, newName, newNumber, handleNameChange, handleNumberChange}) => (

<form onSubmit={addNewName}>
        <div>
          <h3>Add a new:</h3>
          name: <input value={newName} onChange={handleNameChange}/>
          <div>number: <input value={newNumber} onChange={(handleNumberChange)}/></div>
          <button type="submit">add</button>
        </div>
          
      </form>
)

export default Personform