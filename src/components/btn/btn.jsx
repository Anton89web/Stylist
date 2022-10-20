import './btn.sass'

const Btn = ({text, mt, ml})=> {
  return (
    <button className="btn" style={{marginTop: mt || '80px', marginLeft: ml || 'auto'} }>
      {text || "ПОДРОБНЕЕ"}
    </button>
  )
}

export default Btn