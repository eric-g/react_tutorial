const Hello = (props) => {
  console.log(props)
  return (
    <div>Hello {props.name}</div>
  )
}

const Footer = (props) => {
  return (
    <div>All content egaus {props.date}</div>
  )
}

const App = () => {
  const now = new Date()
  const name = "Eric!"
  return (
    <>
      <p>Hello world, it is {now.toDateString()}</p>
      <Hello name={name} />
      <Footer date={now.getFullYear()} />
    </>
  )
}

export default App