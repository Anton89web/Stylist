import './btn.sass'

const Btn = ({scroll ,text, mt, ml})=> {

  return (
    <button className="btn" style={{marginTop: mt || '80px', marginLeft: ml || 'auto'}}
            onClick={scroll?  ()=> scroll() : ()=>false}>
      {text || "ПОДРОБНЕЕ"}
    </button>
  )
}

export default Btn