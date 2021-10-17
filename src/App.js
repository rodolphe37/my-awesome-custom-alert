import { useState } from "react";
import "./App.css";
import CustomAlertComponent from "./components/customAlert/CustomAlertComponent";
import AppPicture from "./assets/componentPicture.svg";

function App() {
  // States for displaying success, info, warning, error & withButton option
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayWarning, setDisplayWarning] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [withButtonOption, setWithButtonOption] = useState(true);

  // THIS IS FOR THE DEMO
  // with button or without button demo alert
  const handleClickWithButton = () => {
    setWithButtonOption((withButtonOption) => !withButtonOption);
  };

  // This function display the success alert
  const handleClickSuccess = () => {
    setDisplaySuccess(true);
    setDisplayInfo(false);
    setDisplayWarning(false);
    setDisplayError(false);
  };
  // This function display the Info alert
  const handleClickInfo = () => {
    setDisplayInfo(true);
    setDisplaySuccess(false);
    setDisplayWarning(false);
    setDisplayError(false);
  };
  // This function display the warning alert
  const handleClickWarning = () => {
    setDisplayWarning(true);
    setDisplaySuccess(false);
    setDisplayInfo(false);
    setDisplayError(false);
  };
  // This function display the error alert
  const handleClickError = () => {
    setDisplayError(true);
    setDisplaySuccess(false);
    setDisplayInfo(false);
    setDisplayWarning(false);
  };

  // Component with Custom alert success
  const SuccessAlert = () => (
    <CustomAlertComponent
      success
      successMessage="yay, everything is working."
      // If you dont want button, remove this line below - if you want a button just type withButton and that's all.
      withButton={withButtonOption ? true : false}
    />
  );
  // Component with Custom alert info
  const InfoAlert = () => (
    <CustomAlertComponent
      info
      infoMessage="info! be read carefully."
      // If you dont want button, remove this line below - if you want a button just type withButton and that's all.
      withButton={withButtonOption ? true : false}
    />
  );
  // Component with Custom alert warning
  const WarningAlert = () => (
    <CustomAlertComponent
      warning
      warningMessage="Be careful what you ask for, you might end up with this!"
      // If you dont want button, remove this line below - if you want a button just type withButton and that's all.
      withButton={withButtonOption ? true : false}
    />
  );
  // Component with Custom alert Error
  const ErrorAlert = () => (
    <CustomAlertComponent
      error
      errorMessage="oh no, something went wrong."
      // If you dont want button, remove this line below - if you want a button just type withButton and that's all.
      withButton={withButtonOption ? true : false}
    />
  );
  return (
    <div className="App">
      {/*All 4 choices with boolean conditions to display & css effect */}
      {displaySuccess && (
        <div className="slide-in-top">
          <SuccessAlert />
        </div>
      )}
      {displayInfo && (
        <div className="swing-in-top-fwd">
          <InfoAlert />
        </div>
      )}
      {displayWarning && (
        <div className="bounce-in-top">
          <WarningAlert />
        </div>
      )}
      {displayError && (
        <div className="bounce-in-top">
          <ErrorAlert />
        </div>
      )}
      <sub>Copyright - 2021 - rodolphe Augusto</sub>
      <div className="appLogo">
        <h1>⭐My Awesome Custom Alert⭐</h1>
        <img src={AppPicture} alt="app logo" width="400" />
      </div>
      <div className="withoutButton Message">
        {!withButtonOption
          ? `When you do not display a button in the alert window, the modal closes automatically after 4 seconds.`
          : null}
      </div>
      <div className="App-footer">
        {/*Button section - For Demo only */}
        <button className="button-boxApp" onClick={handleClickSuccess}>
          Success Alert
        </button>
        <button className="button-boxApp" onClick={handleClickInfo}>
          Info Alert
        </button>
        <button className="button-boxApp" onClick={handleClickWarning}>
          Warning Alert
        </button>
        <button className="button-boxApp" onClick={handleClickError}>
          Error Alert
        </button>
        <button className="button-boxApp" onClick={handleClickWithButton}>
          {!withButtonOption ? `alert with button?` : `alert without button?`}
        </button>
      </div>
    </div>
  );
}

export default App;
