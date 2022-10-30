import "./service.sass"


const Service = ({ title, fnc, arg}) => {
  return (
    <div>
      <div className="service" onClick={()=> fnc(arg)}>
        <div className="service__title_wrapper">
          <h5 className="service__title">{title}
          </h5>
        </div>
        <div className="service__subtitle_wrapper">
          <span className="service__subtitle">ПОДРОБНЕЕ</span>
          <img src="media/icons/arrow.svg" alt="" className="service__title_arrow"/>
        </div>
      </div>
    </div>
  );
};

export default Service;