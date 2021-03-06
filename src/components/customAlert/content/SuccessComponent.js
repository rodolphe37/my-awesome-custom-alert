const SuccessComponent = ({
  disabledDisplaySuccess,
  messageColor,
  successMessage,
  colorTitle,
  titleText,
  withButton,
  buttonText,
  colorTextButton,
  buttonBackground,
  customStyleColor,
  little,
  medium,
  alertImg,
}) => {
  return (
    <div
      style={{
        background: customStyleColor
          ? customStyleColor
          : "linear-gradient(to bottom right, #b0db7d 40%, #99dbb4 100%)",
        transform: little ? "scale(0.5)" : medium ? "scale(0.75)" : "none",
      }}
      id="success-box"
    >
      <div onClick={disabledDisplaySuccess} className="dot">
        x
      </div>
      <div className="face">
        {alertImg ? (
          <img
            src={alertImg}
            style={{
              width: "12em",
              height: "12em",
              transform: "translate(-7em, -5rem) scale(0.5) !important",
            }}
            alt="alert-img"
            className="emoji successCustomPicture"
          />
        ) : (
          <div className="emoji emoji--yay">
            <div className="emoji__face">
              <div className="emoji__eyebrows" />
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
          {titleText ? titleText : `Success!`}
        </h1>
        <p
          className="alert-parag"
          style={{ color: messageColor ? messageColor : "#5e5e5e" }}
        >
          {successMessage}
        </p>
      </div>
      {withButton ? (
        <button
          onClick={disabledDisplaySuccess}
          style={{
            background: buttonBackground ? buttonBackground : "#fcfcfc",
          }}
          className="button-box"
        >
          <h1
            className="text"
            style={{ color: colorTextButton ? colorTextButton : "#4ec07d" }}
          >
            {buttonText ? buttonText : `continue`}
          </h1>
        </button>
      ) : null}
    </div>
  );
};

export default SuccessComponent;
