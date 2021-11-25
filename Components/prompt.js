import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const Prompt = ({ message, promptToggle, promptValue }) => {
  // State for the inputed value
  const [value, setValue] = useState(null);
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <Modal transparent visible={modalOpen} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Question from MonkeyMusicGroup</Text>
          <Text style={styles.modalMessage}>{message}</Text>
          <TextInput
            style={styles.modalInput}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity
              onPress={() => {
                promptValue(value);
                setModalOpen(false);
                promptToggle(false);
              }}
              style={{
                backgroundColor: "black",
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginLeft: "50%",
              }}
            >
              <Text style={{ color: "#fff" }}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                promptValue(null);
                setModalOpen(false);
                promptToggle(false);
              }}
              style={{
                backgroundColor: "orangered",
                padding: 10,
                marginLeft: 10,
              }}
            >
              <Text>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Prompt;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContainer: {
    // flex: 1,
    width: "90%",
    backgroundColor: "orange",
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingBottom: 10,
  },
  modalHeader: {
    fontSize: 15,
    paddingTop: 5,
    color: "orangered",
  },
  modalMessage: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
  },
  modalInput: {
    height: 40,
    borderWidth: 2,
    borderColor: "#555",
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 20,
  },
  modalButtons: {
    flexDirection: "row",
    marginTop: 10,
  },
});
