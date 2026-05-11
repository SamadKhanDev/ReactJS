import React from "react";
import Counter from "./usestateExample/Counter";
import InputField from "./usestateExample/InputField";
import BackgroundChanger from "./usestateExample/BackgroundChanger";
import ToggleText from "./usestateExample/ToggleText";
import ToDo from "./usestateExample/ToDo";
import CounterTwo from "./useeffectExample/CounterTwo";
import CountChange from "./useeffectExample/CountChange";
import ApiFetch from "./useeffectExample/ApiFetch";
import LiveInput from "./useeffectExample/LiveInput";
import ChangeBackgroundColor from "./useeffectExample/ChangeBackgroundColor";
import HistoryTrack from "./useRefExample/HistoryTrack";
import FocusButton from "./useRefExample/FocusButton";
import PasswordToggle from "./useRefExample/PasswordToggle";
import ClearInputField from "./useRefExample/ClearInputField";
import CopyText from "./useRefExample/CopyText";

function App() {
  return (
    <>
      <Counter />
      <InputField />
      <BackgroundChanger />
      <ToggleText />
      <ToDo/>
      <CounterTwo/>
      <CountChange/>
      <ApiFetch/>
      <LiveInput/>
      <ChangeBackgroundColor/>
      <HistoryTrack/>
      <FocusButton/>
      <PasswordToggle/>
      <ClearInputField/>
      <CopyText/>
    </>
  )
}

export default App;
