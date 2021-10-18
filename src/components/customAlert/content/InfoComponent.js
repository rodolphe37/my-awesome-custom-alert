const InfoComponent = ({
  customStyleColor,
  disabledDisplayInfo,
  infoMessage,
  withButton,
  buttonText,
}) => {
  return (
    <div
      style={{
        background: customStyleColor
          ? customStyleColor
          : "linear-gradient(to bottom left, #69b1ea 40%, #00bcd4 100%)",
      }}
      id="info-box"
    >
      <div onClick={disabledDisplayInfo} className="dot">
        x
      </div>
      <div className="face4">
        <div className="emoji emoji--wow">
          <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__eyes"></div>
            <div className="emoji__mouth"></div>
          </div>
        </div>
      </div>
      <div className="shadow scale"></div>
      <div className={withButton ? "message" : "message messageWithoutButton"}>
        <h1 className="alert-text">Info!</h1>
        <p className="alert-parag">{infoMessage}</p>
      </div>
      {withButton ? (
        <button onClick={disabledDisplayInfo} className="button-box">
          <h1 className="blue-text">{buttonText ? buttonText : `continue`}</h1>
        </button>
      ) : null}
    </div>
  );
};

export default InfoComponent;
