

function Inputs ({ handleChange, name, type, placeholder}) {
  return (
  <input onChange={handleChange} name={name} type={type} placeholder={placeholder} />
  )
}

export default Inputs;
