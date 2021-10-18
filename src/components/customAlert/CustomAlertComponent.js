import { useState, useEffect, Fragment } from "react";
import "./customAlertStyle.css";
import SuccessComponent from "./content/SuccessComponent";
import ErrorComponent from "./content/ErrorComponent";
import WarningComponent from "./content/WarningComponent";
import InfoComponent from "./content/InfoComponent";

// YOU HAVE 4 POSSIBILITIES - SUCCESS, ERROR, INFO & WARNING ALERT -
// AND THEN YOU CAN MAKE APPEAR OR NOT THE BUTTON
// (IF THE BUTTON IS APPEAR, YOU CAN CUSTOMIZE THE BUTTON TEXT),
// AND CUSTOMIZE THE MODAL BACKGROUND COLOR FOR EACH TYPE OF ALERT
const CustomAlertComponent = ({
  success, // boolean value - for appear or not the success window
  successMessage, // string - message success
  error, //boolean value - for appear or not the error window
  errorMessage, // string - message error
  warning, // boolean value - for appear or not the warning window
  warningMessage, // string - message warning
  info, // boolean value - for appear or not the info window
  customStyleColor, // HEX, rgba, hsl, gradient, etc... - Background value for modal
  infoMessage, // string - message info
  withButton, // boolean - value for appear or desappear the button window
  buttonText, // string - button content
}) => {
  const [displayAlertSuccess, setDisplayAlertSuccess] = useState(false); //boolean value for open or close success window
  const [displayAlertError, setDisplayAlertError] = useState(false); //boolean value for open or close error window
  const [displayAlertWarning, setDisplayAlertWarning] = useState(false); //boolean value for open or close warning window
  const [displayAlertInfo, setDisplayAlertInfo] = useState(false); //boolean value for open or close info window

  const ValueTimeOut = 4000;

  useEffect(() => {
    if (success) {
      setDisplayAlertSuccess(true);
      setDisplayAlertError(false);
      setDisplayAlertWarning(false);
      setDisplayAlertInfo(false);
      if (!withButton) {
        setTimeout(() => {
          setDisplayAlertSuccess(false);
        }, ValueTimeOut);
      }
    }
    if (error) {
      setDisplayAlertError(true);
      setDisplayAlertSuccess(false);
      setDisplayAlertWarning(false);
      setDisplayAlertInfo(false);
      if (!withButton) {
        setTimeout(() => {
          setDisplayAlertError(false);
        }, ValueTimeOut);
      }
    }
    if (warning) {
      setDisplayAlertWarning(true);
      setDisplayAlertSuccess(false);
      setDisplayAlertError(false);
      setDisplayAlertInfo(false);
      if (!withButton) {
        setTimeout(() => {
          setDisplayAlertWarning(false);
        }, ValueTimeOut);
      }
    }
    if (info) {
      setDisplayAlertInfo(true);
      setDisplayAlertWarning(false);
      setDisplayAlertSuccess(false);
      setDisplayAlertError(false);
      if (!withButton) {
        setTimeout(() => {
          setDisplayAlertInfo(false);
        }, ValueTimeOut);
      }
    }
    return () => {
      setDisplayAlertSuccess(false);
      setDisplayAlertError(false);
      setDisplayAlertWarning(false);
      setDisplayAlertError(false);
    };
  }, [
    setDisplayAlertSuccess,
    setDisplayAlertError,
    setDisplayAlertWarning,
    setDisplayAlertInfo,
    warning,
    success,
    error,
    info,
    withButton,
  ]);

  // Close alert
  const disabledDisplaySuccess = () => {
    setDisplayAlertSuccess(false);
  };

  const disabledDisplayError = () => {
    setDisplayAlertError(false);
  };
  const disabledDisplayWarning = () => {
    setDisplayAlertWarning(false);
  };
  const disabledDisplayInfo = () => {
    setDisplayAlertInfo(false);
  };

  return (
    <Fragment>
      {displayAlertSuccess ||
      displayAlertError ||
      displayAlertWarning ||
      displayAlertInfo ? (
        <Fragment>
          <div className="alert-overlay"></div>
          <div className="alert-box-content ">
            <div id="alert-container">
              {displayAlertSuccess ? (
                <SuccessComponent
                  disabledDisplaySuccess={disabledDisplaySuccess}
                  customStyleColor={customStyleColor}
                  successMessage={successMessage}
                  withButton={withButton}
                  buttonText={buttonText}
                />
              ) : null}
              {displayAlertError ? (
                <ErrorComponent
                  disabledDisplayError={disabledDisplayError}
                  customStyleColor={customStyleColor}
                  withButton={withButton}
                  buttonText={buttonText}
                  errorMessage={errorMessage}
                />
              ) : null}
              {displayAlertWarning ? (
                <WarningComponent
                  disabledDisplayWarning={disabledDisplayWarning}
                  customStyleColor={customStyleColor}
                  warningMessage={warningMessage}
                  withButton={withButton}
                  buttonText={buttonText}
                />
              ) : null}
              {displayAlertInfo ? (
                <InfoComponent
                  disabledDisplayInfo={disabledDisplayInfo}
                  customStyleColor={customStyleColor}
                  infoMessage={infoMessage}
                  withButton={withButton}
                  buttonText={buttonText}
                />
              ) : null}
            </div>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default CustomAlertComponent;
