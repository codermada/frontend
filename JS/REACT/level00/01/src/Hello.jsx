function Hello(props) {
  return (
    <>
      {props.text}
    </>
  )
}

export default Hello

export const Hello2 = (props) => {
  return (
    <>
      {props.children}
    </>
  )
}