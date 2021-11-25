import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, Button } from "react-native";

// Component
import AlertModal from "./Components/alert";
import PromptModal from "./Components/prompt";

export default function App() {
  const [alertToggle, setAlertToggle] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [promptToggle, setPromptToggle] = useState(false);
  const [promptMessage, setPromptMessage] = useState("");
  const [promptValue, setPromptValue] = useState(null);

  const Alert = (message) => {
    setAlertMessage(message);
    setAlertToggle(true);
  };

  const Prompt = (message) => {
    setPromptMessage(message);
    setPromptToggle(true);
    return promptValue;
  };

  const showPrompt = () => {
    const result = Prompt("Enter your real age");

    Alert(result);
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <Text>Test Alert</Text>
      <Button onPress={() => Alert("Have a nice day")} title="Alert" />

      <Text>Test Prompt</Text>
      <Button onPress={() => showPrompt()} title="Prompt" />

      {alertToggle && (
        <AlertModal message={alertMessage} alertToggle={setAlertToggle} />
      )}
      {promptToggle && (
        <PromptModal
          message={promptMessage}
          promptToggle={setPromptToggle}
          promptValue={setPromptValue}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
