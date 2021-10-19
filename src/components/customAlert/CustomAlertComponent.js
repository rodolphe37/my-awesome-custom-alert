import { useState, useEffect, Fragment } from "react";
import "./customAlertStyle.css";
import SuccessComponent from "./content/SuccessComponent";
import ErrorComponent from "./content/ErrorComponent";
import WarningComponent from "./content/WarningComponent";
import InfoComponent from "./content/InfoComponent";

// YOU HAVE 4 POSSIBILITIES - SUCCESS, ERROR, INFO & WARNING ALERT -
// YOU CAN CHOOSE IF YOU WANT OVERLAY EFFECT OR NOT
// YOU CAN CHANGE THE MODAL ALERT DIMENSIONS (LITTLE, MEDIUM), IF YOU DON'T WRITE ANY PROPS THE DEFAULT DIMENSION IS NORMAL
// YOU CAN CUSTOMIZE THE MODAL BACKGROUND COLOR FOR EACH TYPE OF ALERT
// YOU CAN CHANGE THE TITLE TEXT & COLOR
// YOU CAN CHANGE THE MESSAGE TEXT COLOR ASWELL
// YOU CAN MAKE APPEAR OR NOT THE BUTTON (IF THE BUTTON IS APPEAR, YOU CAN CUSTOMIZE THE BUTTON TEXT, COLOR TEXT BUTTON & BACKGROUND COLOR BUTTON. IF THE BUTTON DO NOT APPEAR, YOU CAN CHANGE THE TIME OF AUTOMATIC CLOSING )
const CustomAlertComponent = ({
  success, // BOOLEAN - for appear or not the success window
  successMessage, // STRING - message success
  error, //BOOLEAN - for appear or not the error window
  errorMessage, // STRING - message error
  warning, // BOOLEAN - for appear or not the warning window
  warningMessage, // STRING - message warning
  info, // BOOLEAN - for appear or not the info window
  infoMessage, // STRING - message info
  // GLOBAL MODAL STYLES PROPS
  overlay, // BOOLEAN - if you want overlay effect or not
  little, // predefined values - the default size of the alert is divided by 2
  medium, // predefined values - the default size of the alert is divided by 1/3
  autoClose, // NUMBER - time in ms for auto closes alert when you don't have button
  customStyleColor, // HEX, rgba, hsl, gradient, etc... - Background color value for modal
  titleText, // STRING - title for each alert
  colorTitle, // HEX, rgba, hsl, gradient, etc... - color value for title text
  messageColor, // HEX, rgba, hsl, gradient, etc... - color value for message text
  withButton, // BOOLEAN - value for appear or desappear the button window
  buttonText, // STRING - button content
  colorTextButton, // HEX, rgba, hsl, gradient, etc... - color value for button text
  buttonBackground, // HEX, rgba, hsl, gradient, etc... - Background color value for button
}) => {
  const [displayAlertSuccess, setDisplayAlertSuccess] = useState(false); //boolean value for open or close success window
  const [displayAlertError, setDisplayAlertError] = useState(false); //boolean value for open or close error window
  const [displayAlertWarning, setDisplayAlertWarning] = useState(false); //boolean value for open or close warning window
  const [displayAlertInfo, setDisplayAlertInfo] = useState(false); //boolean value for open or close info window

  const ValueTimeOut = autoClose ? autoClose : 4000;

  useEffect(() => {
    switch (success || error || warning || info) {
      case success:
        setDisplayAlertSuccess(true);
        setDisplayAlertError(false);
        setDisplayAlertWarning(false);
        setDisplayAlertInfo(false);
        if (!withButton) {
          setTimeout(() => {
            setDisplayAlertSuccess(false);
          }, ValueTimeOut);
        }
        break;
      case error:
        setDisplayAlertError(true);
        setDisplayAlertSuccess(false);
        setDisplayAlertWarning(false);
        setDisplayAlertInfo(false);
        if (!withButton) {
          setTimeout(() => {
            setDisplayAlertError(false);
          }, ValueTimeOut);
        }
        break;
      case warning:
        setDisplayAlertWarning(true);
        setDisplayAlertSuccess(false);
        setDisplayAlertError(false);
        setDisplayAlertInfo(false);
        if (!withButton) {
          setTimeout(() => {
            setDisplayAlertWarning(false);
          }, ValueTimeOut);
        }
        break;
      case info:
        setDisplayAlertInfo(true);
        setDisplayAlertWarning(false);
        setDisplayAlertSuccess(false);
        setDisplayAlertError(false);
        if (!withButton) {
          setTimeout(() => {
            setDisplayAlertInfo(false);
          }, ValueTimeOut);
        }
        break;

      default:
        break;
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
    ValueTimeOut,
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
          {overlay ? <div className="alert-overlay" /> : null}

          <div className="alert-box-content ">
            <div id="alert-container">
              {displayAlertSuccess ? (
                <SuccessComponent
                  disabledDisplaySuccess={disabledDisplaySuccess}
                  customStyleColor={customStyleColor}
                  little={little}
                  medium={medium}
                  titleText={titleText}
                  colorTitle={colorTitle}
                  messageColor={messageColor}
                  successMessage={successMessage}
                  withButton={withButton}
                  buttonText={buttonText}
                  colorTextButton={colorTextButton}
                  buttonBackground={buttonBackground}
                />
              ) : null}
              {displayAlertError ? (
                <ErrorComponent
                  disabledDisplayError={disabledDisplayError}
                  customStyleColor={customStyleColor}
                  little={little}
                  medium={medium}
                  titleText={titleText}
                  colorTitle={colorTitle}
                  messageColor={messageColor}
                  withButton={withButton}
                  buttonText={buttonText}
                  colorTextButton={colorTextButton}
                  buttonBackground={buttonBackground}
                  errorMessage={errorMessage}
                />
              ) : null}
              {displayAlertWarning ? (
                <WarningComponent
                  disabledDisplayWarning={disabledDisplayWarning}
                  customStyleColor={customStyleColor}
                  little={little}
                  medium={medium}
                  titleText={titleText}
                  colorTitle={colorTitle}
                  messageColor={messageColor}
                  warningMessage={warningMessage}
                  withButton={withButton}
                  buttonText={buttonText}
                  colorTextButton={colorTextButton}
                  buttonBackground={buttonBackground}
                />
              ) : null}
              {displayAlertInfo ? (
                <InfoComponent
                  disabledDisplayInfo={disabledDisplayInfo}
                  customStyleColor={customStyleColor}
                  little={little}
                  medium={medium}
                  titleText={titleText}
                  colorTitle={colorTitle}
                  messageColor={messageColor}
                  infoMessage={infoMessage}
                  withButton={withButton}
                  buttonText={buttonText}
                  colorTextButton={colorTextButton}
                  buttonBackground={buttonBackground}
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
