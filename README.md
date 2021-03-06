[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/rodolphe37/my-awesome-custom-alert/blob/main/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/rodolphe37/my-awesome-custom-alert/graphs/commit-activity)
[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
[![GitHub issues](https://badgen.net/github/issues/rodolphe37/my-awesome-custom-alert/)](https://github.com/rodolphe37/my-awesome-custom-alert/issues)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/rodolphe37/my-awesome-custom-alert)
[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/Naereen/badges/)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/rodolphe37/my-awesome-custom-alert/main)
<img   src="https://badges.aleen42.com/src/react.svg" alt="drawing" height="20" width="65"/>

[![Website](https://i.imgur.com/xSu6S5v.png)](https://rodolphe-augusto.fr)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c8dbd5d8-81a2-4418-9806-2470cba4a5d9/deploy-status)](https://app.netlify.com/sites/infallible-haibt-1a6163/deploys)

# Documentation

---

## My Awesome Custom Alert v1.0.0

it's a reusable custom alert component!

#### :bookmark: We often need to implement modals or notification alerts to users... Why not do it simply and with a little fun?

#### 😉😃😄 - A single component with four alert possibilities & many other options:
> - success,
> - info,
> - warning
> - & error,
> - you can put a personal image or keep the default emojis for each alert.
> - you can choose if you want overlay effect or not
> - you can change the modal alert dimensions (little, medium), if you don't write any props the default dimension is normal
> - you can change default emoji with custom picture
> - you can customize the modal background color for each type of alert
> - you can change the title text & color
> - you can change the message text color aswell
> - you can make appear or not the button (if the button is appear, you can customize the button text, color text button & background color button. If the button do not appear, you can change the time of automatic closing)

---

>Desktop view

![alt text](demo/desktop-demo.gif "My AwesomeCustom Alert")

>Tablets view

![alt text](demo/tablet-demo.gif "My AwesomeCustom Alert")

mobile view

![alt text](demo/mobile-demo.gif "My AwesomeCustom Alert")

---

### :computer: Online sites


**You can test My Awesome Custom Alert demo** **[here](https://my-awesome-custom-alert.netlify.app/)**,


---
## Arguments and options!

### the Props availables!


```javascript
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
  colorTitle, // HEX, rgba, hsl, etc... - color value for title text
  messageColor, // HEX, rgba, hsl, gradient, etc... - color value for message text
  withButton, // BOOLEAN - value for appear or desappear the button window
  buttonText, // STRING - button content
  colorTextButton, // HEX, rgba, hsl, etc... - color value for button text
  buttonBackground, // HEX, rgba, hsl, gradient, etc... - Background color value for button
  alertImg, // IMAGE (svg, png, jpg...) - for replace all default emoji by your own pictures.

```
>:heavy_check_mark: Important!
When you do not display a button in the alert window, the modal closes automatically after 4 seconds.

---
## How to use this component?

>This component does not use any external library, only React.

### Step1 - Copy the component!

>First of all, you have to copy the customAlert folder (which is in the components folder)...
Then paste this folder and its content into the components folder of your application!

![alt text](demo/step1.png "My AwesomeCustom Alert")

OK, the interesting part begins!

### Step2 - Code implementation!

>:heavy_check_mark: All of this examples are the most simple form, of course you can use this component at your fetch/axios responses or more complexe usecases.

***Let's start with the Success option:***

```javascript
import { useState } from "react";
import CustomAlertComponent from "./components/customAlert/CustomAlertComponent";
import Me from "./assets/perso.png";

const ExampleComponent = () => {
   const [displaySuccess, setDisplaySuccess] = useState(false);

     // This function display the success alert
  const handleClickSuccess = () => {
    setDisplaySuccess(true);
    // Your code here
  };

   // Component with Custom alert success
  const SuccessAlert = () => (
    <CustomAlertComponent
      success
      successMessage="yay, everything is working."
      // If you want normal size alert modal remove this line below.
      medium
      // If you dont want custom picture, remove this line below. the default emoji will be chosed.
      alertImg={Me}
      // If you dont want custom background color, just remove this line below, the default color will be chosed.
      customStyleColor="#ef8f9e" // Background value for the modal (ex: HEX, rgba, hsl, gradient, etc...)
      // if you don't want overlay effect remove this line below
      overlay
      // If you dont want button, just remove this two lines below.
      withButton
      buttonText="Great, it's cool!"
    />
  );

  return (
    <div>
      {displaySuccess && (
        <div className="slide-in-top">
          <SuccessAlert />
        </div>
      )}
      <div className="button-container">
        <button className="button-boxApp" onClick={handleClickSuccess}>
          Success Alert
        </button>
      </div>
    </div>
  )
};

export default ExampleComponent;

```

**:heavy_check_mark: The Result**

![alt text](demo/success.gif "My AwesomeCustom Alert")

---

***Next, the Info option:***

```javascript
import { useState } from "react";
import CustomAlertComponent from "./components/customAlert/CustomAlertComponent";

const ExampleComponent = () => {
   const [displayInfo, setDisplayInfo] = useState(false);

     // This function display the Info alert
  const handleClickInfo = () => {
    setDisplayInfo(true);
  };

  // Component with Custom alert info
  const InfoAlert = () => (
    <CustomAlertComponent
      info
      infoMessage="info! be read carefully."
      little
      // If you dont want custom background color, just remove this line below, the default gradient color will be choosed.
      customStyleColor="rgba(255, 255,255, 0.7)" // Background value for the modal (ex: HEX, rgba, hsl, gradient, etc...)
      // if you don't want overlay effect remove this line below
      overlay
      // If you dont want button, remove this line below.
      withButton
      // If you dont write buttonText props, the default text is choosed.
    />
  );

  return (
    <div>
      {displayInfo && (
        <div className="slide-in-top">
          <InfoAlert />
        </div>
      )}
      <div className="button-container">
        <button className="button-boxApp" onClick={handleClickInfo}>
          Info Alert
        </button>
      </div>
    </div>
  )
};

export default ExampleComponent;

```

**:heavy_check_mark: The Result**

![alt text](demo/info.gif "My AwesomeCustom Alert")

---


***Another Option, the warning alert:***

```javascript
import { useState } from "react";
import CustomAlertComponent from "./components/customAlert/CustomAlertComponent";

const ExampleComponent = () => {
   const [displayWarning, setDisplayWarning] = useState(false);

     // This function display the warning alert
  const handleClickWarning = () => {
    setDisplayWarning(true);
  };

  // Component with Custom alert warning
  const WarningAlert = () => (
    <CustomAlertComponent
      warning
      warningMessage="Be careful what you ask for, you might end up with this!"
      // If you dont write messageColor props, the default color is chosed.
      messageColor="#fff"
      // If you dont want custom background color, just remove this line below, the default color will be chosed.
      customStyleColor="hsl(351, 75%, 75%)" // Background value for the modal (ex: HEX, rgba, hsl, gradient, etc...)
      // if you don't want overlay effect remove this line below
      overlay
      // If you dont want custom timeout, remove this line below (the default value is 4000ms).
      autoClose={5000}
    />
  );

  return (
    <div>
      {displayWarning && (
        <div className="bounce-in-top">
          <WarningAlert />
        </div>
      )}
      <div className="button-container">
        <button className="button-boxApp" onClick={handleClickWarning}>
          Warning Alert
        </button>
      </div>
    </div>
  )
};

export default ExampleComponent;

```

**:heavy_check_mark: The Result**

![alt text](demo/warning.gif "My AwesomeCustom Alert")

---

***And Then, finally the Error alert:***

```javascript
import { useState } from "react";
import CustomAlertComponent from "./components/customAlert/CustomAlertComponent";

const ExampleComponent = () => {
   const [displayError, setDisplayError] = useState(false);

     // This function display the Error alert
  const handleClickError = () => {
    setDisplayError(true);
  };

  // Component with Custom alert Error
  const ErrorAlert = () => (
    <CustomAlertComponent
      error
      // If you dont write title props, the default text is chosed.
      title="OUPS, Not working..."
      // If you dont write colorTitle props, the default color is chosed.
      colorTitle="#000"
      errorMessage="oh no, something went wrong."
      // If you dont want custom background color, just remove this line below, the default color will be chosed.
      customStyleColor="red" // Background value for the modal (ex: HEX, rgba, hsl, gradient, etc...)
      // if you don't want overlay effect remove this line below
      overlay
      // If you dont want button, just remove this two lines below.
      withButton
      buttonText="No worry, try again!"
    />
  );

  return (
    <div>
      {displayError && (
        <div className="bounce-in-top">
          <ErrorAlert />
        </div>
      )}
      <div className="button-container">
         <button className="button-boxApp" onClick={handleClickError}>
          Error Alert
        </button>
      </div>
    </div>
  )
};

export default ExampleComponent;

```

**:heavy_check_mark: The Result**

![alt text](demo/error.gif "My AwesomeCustom Alert")

---

## For more style customization!

>you can change more styles if you want...
>
>For that you must go to the ```customeAlertStyle.css```, all css styles for all usercase are here and commented!

### And... voilà! you have your awesome reusable custom alert component!

---

>## :heavy_exclamation_mark: Bonus - another simple reusable alert component
>
>![alt text](demo/simple-alert-bonus.png "My AwesomeCustom Alert Bonus")
>
>***The procedure and code implementation is similar to the other component!***
>
>Copy/paste the offlineMessage folder into your application...
>
>### Props & implementation examples!
>
>**You have two props:**
>
 > - type (string with five choices - danger - warning - success - info - primary)
 >
 > - content (string - content message to display)
>
>
>```javascript
>...
>import OfflineMessage from "./components/bonus/offlineMessage/OfflineMessage";
>...
>
>  const demoOfflineMessage = "You are offline or there is a connection problem!";
>  const demoOnlineMessage = "You are now back online!";
>  const demoInfoAndPrimaryMessage = "You are back online, but you should check your connection!";
>
><div className="bonus-section">
>  <h2>Bonus - another simple reusable alert component</h2>
>    <OfflineMessage type="danger" content={`${demoOfflineMessage}`} />
>    <OfflineMessage type="warning" content={`${demoOfflineMessage}`} />
>    <OfflineMessage type="success" content={`${demoOnlineMessage}`} />
>    <OfflineMessage type="info" content={`${demoInfoAndPrimaryMessage}`} />
>    <OfflineMessage type="primary" content={`${demoInfoAndPrimaryMessage}`} />
></div>
>...
>```

## :bust_in_silhouette: Author

- Thought, designed and developed with :purple_heart: by Rodolphe Augusto

---

## :large_blue_diamond: A few words from the author

Enjoy the World :smirk:

---

## :sparkling_heart: Support the project

I put almost everything open-source I can, and try to accommodate anyone who needs help using these projects. Obviously,
this takes time. You can use this service for free.

However, if you are using this project and are happy with it or just want to encourage me to keep creating: -

- Put a star and share the project :rocket:

Thank you! :heart:

---

## :scroll: License

MIT

---

## My other projects:

>### My Simple Tutorial Creator
>https://github.com/rodolphe37/my-simple-tutorial-creator

>### My Simple Task Manager
>https://github.com/rodolphe37/my-simple-tasks-manager-

>### My Simple Cam
>https://github.com/rodolphe37/my-simple-cam-dektop-app

>### App for decrypt greenPass europe QRcode
>https://github.com/rodolphe37/qrcode-decoder

>### Css animation with Create React App base.
>https://github.com/rodolphe37/halloween2021-bat-tuto-youtube-video

>### My GitHub "open Sources" project
>https://github.com/rodolphe37/pwa-react-project

>### cra-template-github-my-profile
>https://github.com/rodolphe37/cra-template-github-my-profile

>### My GitHub "open Sources" project
>https://github.com/rodolphe37/pwa-react-project

>### Geolocation starter app React-native
>https://github.com/rodolphe37/react-native_geolocation-tracker

>### Classic React Ultimate Messenger version repository (for open sources contributors)
>https://github.com/rodolphe37/rum-open-sources

>### React Ultimate Messenger template for React (create-react-app tools)
>https://github.com/rodolphe37/cra-react-ultimate-messenger

>### PWA React Ultimate Messenger template for React (create-react-app tools)
>https://github.com/rodolphe37/cra-pwa-react-ultimate-messenger

>### installation and initialization shell script for the PWA React Ultimate Messenger template
>https://github.com/rodolphe37/pwa-rum-install-pack

>### Upload-image-profil-component
>https://github.com/rodolphe37/Upload-image-profil-component

>### Jeux libres de droits "open Sources" - Memory Yoga Cards Game - Sort the Waste Game - Match 3 Yoga Game - Tetris Classic Game - Remake Earth Puzzle Game
>https://github.com/rodolphe37/install-games-repository

>### Administration template - React JS & react-admin
>https://github.com/rodolphe37/nfc-updates-front

>### Administration template Backend - Node & Express
>https://github.com/rodolphe37/nfc-updates-back

---


