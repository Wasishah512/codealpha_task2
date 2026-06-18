import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

import { quotes } from "../data/quotes";

export default function QuotesScreen() {
  const [quote, setQuote] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalQuote, setModalQuote] = useState(null);

  // Random quote generator
  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  // Modal quote
  const openModalWithQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setModalQuote(random);
    setModalVisible(true);
  };

  useEffect(() => {
    console.log("Quotes loaded:", quotes);
    getRandomQuote(); // on app open
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Inspiration</Text>

      {/* Main Quote */}
      {quote && (
        <View style={styles.card}>
          <Text style={styles.text}>"{quote.text}"</Text>
          <Text style={styles.author}>— {quote.author}</Text>
        </View>
      )}

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={openModalWithQuote}>
        <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            {modalQuote && (
              <>
                <Text style={styles.modalText}>"{modalQuote.text}"</Text>
                <Text style={styles.modalAuthor}>— {modalQuote.author}</Text>
              </>
            )}

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#222",
  },

  card: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 18,
    elevation: 4,
    width: "100%",
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#222",
    lineHeight: 30,
  },

  author: {
    marginTop: 15,
    textAlign: "right",
    fontSize: 16,
    color: "#666",
  },

  button: {
    marginTop: 30,
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalCard: {
    width: "85%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
  },

  modalText: {
    fontSize: 22,
    textAlign: "center",
    color: "#222",
  },

  modalAuthor: {
    marginTop: 15,
    fontSize: 16,
    color: "#555",
  },

  closeBtn: {
    marginTop: 20,
    backgroundColor: "#4F46E5",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
});
