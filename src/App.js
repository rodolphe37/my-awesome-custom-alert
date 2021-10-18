import { useState } from "react";
import "./App.css";
import CustomAlertComponent from "./components/customAlert/CustomAlertComponent";
import OfflineMessage from "./components/bonus/offlineMessage/OfflineMessage";
import AppPicture from "./assets/componentPicture.svg";
import FloatingButton from "./components/githubFloatingButton/FloatingButton";

function App() {
  // THIS IS FOR THE DEMO of My Awesome Custom Alert
  // States for displaying success, info, warning, error & withButton option
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [displayInfo, setDisplayInfo] = useState(false);
  const [displayWarning, setDisplayWarning] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [withButtonOption, setWithButtonOption] = useState(true);

  // THIS IS FOR THE DEMO of My Awesome Custom Alert
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
      // if you don't want overlay effect remove this line below
      overlay
      // If you dont want button, remove this line below - if you want a button just type withButton and that's all.
      withButton={withButtonOption ? true : false}
      buttonText="Great, its cool!"
    />
  );
  // Component with Custom alert info
  const InfoAlert = () => (
    <CustomAlertComponent
      info
      infoMessage="info! be read carefully."
      // if you don't want overlay effect remove this line below
      overlay
      // If you dont want button, remove this line below - if you want a button just type withButton and that's all.
      withButton={withButtonOption ? true : false}
    />
  );
  // Component with Custom alert warning
  const WarningAlert = () => (
    <CustomAlertComponent
      warning
      warningMessage="Be careful what you ask for, you might end up with this!"
      // if you don't want overlay effect remove this line below
      overlay
      // If you dont want button, remove this line below - if you want a button just type withButton and that's all.
      withButton={withButtonOption ? true : false}
    />
  );
  // Component with Custom alert Error
  const ErrorAlert = () => (
    <CustomAlertComponent
      error
      errorMessage="oh no, something went wrong."
      // if you don't want overlay effect remove this line below
      overlay
      // If you dont want button, remove this line below - if you want a button just type withButton and that's all.
      withButton={withButtonOption ? true : false}
      buttonText="No worry, try again!"
    />
  );
  // THIS IS FOR THE DEMO of Another simple alert component
  // This 3 variables are for the bonus only
  const demoOfflineMessage =
    "You are offline or there is a connection problem!";
  const demoOnlineMessage = "You are now back online!";
  const demoInfoAndPrimaryMessage =
    "You are back online, but you should check your connection!";

  return (
    <div className="App">
      {/*All 4 choices with boolean conditions to display & css effect */}
      {displaySuccess && (
        <div className="slide-in-top">
          <SuccessAlert />
        </div>
      )}
      {displayInfo && (
        <div className="slide-in-top">
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
      <div className="bonus-section">
        <h2>Bonus - another simple reusable alert component</h2>
        <OfflineMessage type="danger" content={`${demoOfflineMessage}`} />
        <OfflineMessage type="warning" content={`${demoOfflineMessage}`} />
        <OfflineMessage type="success" content={`${demoOnlineMessage}`} />
        <OfflineMessage type="info" content={`${demoInfoAndPrimaryMessage}`} />
        <OfflineMessage
          type="primary"
          content={`${demoInfoAndPrimaryMessage}`}
        />
      </div>
      <sub>Copyright - 2021 - rodolphe Augusto</sub>
      <div className="appLogo">
        <h1>⭐My Awesome Custom Alert⭐</h1>
        <img src={AppPicture} alt="app logo" width="400" />
      </div>
      <div className="withoutButton Message">
        {/*Real life usercase to OfflineMessageComponent here; lol */}
        {!withButtonOption ? (
          <OfflineMessage
            type="warning"
            content={
              "When you do not display a button in the alert window, the modal closes automatically after 4 seconds."
            }
          />
        ) : null}
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
        <FloatingButton />
      </div>
    </div>
  );
}

export default App;
