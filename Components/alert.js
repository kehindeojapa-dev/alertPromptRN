import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";

const Alert = ({ message, alertToggle }) => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <Modal transparent visible={modalOpen} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Message from MonkeyMusicGroup</Text>
          <Text style={styles.modalMessage}>{message}</Text>
          <View style={styles.modalButton}>
            <Button
              onPress={() => {
                setModalOpen(false);
                alertToggle(false);
              }}
              title="OK"
              color="black"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Alert;

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
  modalButton: {
    alignItems: "flex-end",
  },
});
