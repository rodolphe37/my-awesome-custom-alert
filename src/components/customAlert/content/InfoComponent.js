const InfoComponent = ({
  customStyleColor,
  disabledDisplayInfo,
  titleText,
  colorTitle,
  infoMessage,
  messageColor,
  withButton,
  buttonText,
  colorTextButton,
  buttonBackground,
  little,
  medium,
  alertImg,
}) => {
  return (
    <div
      style={{
        background: customStyleColor
          ? customStyleColor
          : "linear-gradient(to bottom left, #69b1ea 40%, #00bcd4 100%)",
        transform: little ? "scale(0.5)" : medium ? "scale(0.75)" : "none",
      }}
      id="info-box"
    >
      <div onClick={disabledDisplayInfo} className="dot">
        x
      </div>
      <div className="face4">
        {alertImg ? (
          <img
            src={alertImg}
            alt="alert-img"
            style={{
              width: "5em",
              height: "5em",
              transform: "translate(-8.5em, 0px)",
              animation: "bounce 1s ease-in infinite",
            }}
            className="emoji emoji--wow"
          />
        ) : (
          <div className="emoji emoji--wow">
            <div className="emoji__face">
              <div className="emoji__eyebrows" />
              <div className="emoji__eyes" />
              <div className="emoji__mouth" />
            </div>
          </div>
        )}
      </div>
      {!alertImg ? <div className="shadow scale" /> : null}
      <div className={withButton ? "message" : "message messageWithoutButton"}>
        <h1
          className="alert-text"
          style={{ color: colorTitle ? colorTitle : "#fcfcfc" }}
        >
          {titleText ? titleText : `Info!`}
        </h1>
        <p
          className="alert-parag"
          style={{ color: messageColor ? messageColor : "#5e5e5e" }}
        >
          {infoMessage}
        </p>
      </div>
      {withButton ? (
        <button
          onClick={disabledDisplayInfo}
          style={{
            background: buttonBackground ? buttonBackground : "#fcfcfc",
          }}
          className="button-box"
        >
          <h1
            className="text"
            style={{ color: colorTextButton ? colorTextButton : "#2196f3" }}
          >
            {buttonText ? buttonText : `continue`}
          </h1>
        </button>
      ) : null}
    </div>
  );
};

export default InfoComponent;
