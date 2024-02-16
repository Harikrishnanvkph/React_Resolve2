function GridCard(props) {
  const bg = {
    backgroundImage: `url(${props.imagePath})`,
  };
  return (
    <>
      <div className="row g-0">
        <div className={props.divclassName1} style={bg}></div>
        <div className={props.divclassName2}>
          <h2>{props.h2}</h2>
          <p className="lead mb-0">{props.p}</p>
        </div>
      </div>
    </>
  );
}

export default GridCard;
