import './btn.sass'

const Btn = ({text, mt})=> {
  return (
    <button className="btn" style={{marginTop: mt || '80px'} }>
      {text || "ПОДРОБНЕЕ"}
    </button>
  )
}

export default Btn