const ErrorComponent = ({
  disabledDisplayError,
  withButton,
  colorTitle,
  titleText,
  errorMessage,
  messageColor,
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
          : "linear-gradient(to bottom left, #ef8d9c 40%, #ffc39e 100%)",
        transform: little ? "scale(0.5)" : medium ? "scale(0.75)" : "none",
      }}
      id="error-box"
    >
      <div onClick={disabledDisplayError} className="dot">
        x
      </div>

      <div className="face2">
        {alertImg ? (
          <img
            style={{
              width: "8rem",
              height: "8rem",
              transform: "scale(0.8)",
            }}
            src={alertImg}
            alt="alert-img"
            className="emoji emoji--angry"
          />
        ) : (
          <div className="emoji emoji--angry">
            <div className="emoji__face">
              <div className="emoji__eyebrows" />
              <div className="emoji__eyes" />
              <div className="emoji__mouth" />
            </div>
          </div>
        )}
      </div>
      <div className="shadow move" />
      <div className={withButton ? "message" : "message messageWithoutButton"}>
        <h1
          className="alert-text"
          style={{ color: colorTitle ? colorTitle : "#fcfcfc" }}
        >
          {titleText ? titleText : `Error!`}
        </h1>
        <p
          className="alert-parag"
          style={{ color: messageColor ? messageColor : "#5e5e5e" }}
        >
          {errorMessage}
        </p>
      </div>
      {withButton ? (
        <button
          onClick={disabledDisplayError}
          style={{
            background: buttonBackground ? buttonBackground : "#fcfcfc",
          }}
          className="button-box"
        >
          <h1
            className="text"
            style={{ color: colorTextButton ? colorTextButton : "#e96075" }}
          >
            {buttonText ? buttonText : `try again`}
          </h1>
        </button>
      ) : null}
    </div>
  );
};

export default ErrorComponent;
