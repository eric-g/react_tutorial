const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <p key={part[1]}>{part[0]} {part[1]}</p>
      ))}
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises.reduce((x,y) => (x+y))}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
   <>
      <Header course={course} />
      <Content parts={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </>
  )
}

export default App