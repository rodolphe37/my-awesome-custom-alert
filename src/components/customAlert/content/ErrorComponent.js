const ErrorComponent = ({ disabledDisplayError, withButton, errorMessage }) => {
  return (
    <div id="error-box">
      <div onClick={disabledDisplayError} className="dot">
        x
      </div>

      <div className="face2">
        <div className="emoji emoji--angry">
          <div className="emoji__face">
            <div className="emoji__eyebrows"></div>
            <div className="emoji__eyes"></div>
            <div className="emoji__mouth"></div>
          </div>
        </div>
      </div>
      <div className="shadow move"></div>
      <div className={withButton ? "message" : "message messageWithoutButton"}>
        <h1 className="alert-text">Error!</h1>
        <p className="alert-parag">{errorMessage}</p>
      </div>
      {withButton ? (
        <button onClick={disabledDisplayError} className="button-box">
          <h1 className="red-text">try again</h1>
        </button>
      ) : null}
    </div>
  );
};

export default ErrorComponent;
