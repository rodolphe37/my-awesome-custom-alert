const SuccessComponent = ({
  disabledDisplaySuccess,
  successMessage,
  withButton,
  buttonText,
  customStyleColor,
}) => {
  return (
    <div
      style={{
        background: customStyleColor
          ? customStyleColor
          : "linear-gradient(to bottom right, #b0db7d 40%, #99dbb4 100%)",
      }}
      id="success-box"
    >
      <div onClick={disabledDisplaySuccess} className="dot">
        x
      </div>
      <div className="face">
        <div className="emoji emoji--yay">
          <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__mouth"></div>
          </div>
        </div>
      </div>
      <div className="shadow scale"></div>
      <div className={withButton ? "message" : "message messageWithoutButton"}>
        <h1 className="alert-text">Success!</h1>
        <p className="alert-parag">{successMessage}</p>
      </div>
      {withButton ? (
        <button onClick={disabledDisplaySuccess} className="button-box">
          <h1 className="green-text">{buttonText ? buttonText : `continue`}</h1>
        </button>
      ) : null}
    </div>
  );
};

export default SuccessComponent;
