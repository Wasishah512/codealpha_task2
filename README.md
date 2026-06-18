# Flashcard Quiz App — CodeAlpha Task 1

A clean, fully functional flashcard quiz app built with **Expo + React Native**.

## Features
- Flip animation on each flashcard (question → answer)
- Navigate with Previous / Next buttons
- Mark answers as Correct or Incorrect
- Add new flashcards via a form
- Edit or delete existing cards
- Stats screen: accuracy, correct/incorrect counts, "Needs Review" list
- Bottom tab navigation: Cards, Stats, Edit

## Project Structure
```
FlashcardApp/
├── App.js                        # Root: navigation setup
├── app.json                      # Expo config
├── package.json
├── babel.config.js
├── context/
│   └── FlashcardContext.js       # Global state (cards + session stats)
└── screens/
    ├── HomeScreen.js             # Card list + Start Quiz button
    ├── QuizScreen.js             # Flip card quiz with correct/wrong buttons
    ├── StatsScreen.js            # Session results + needs-review list
    ├── EditScreen.js             # Edit/delete cards with modal
    └── AddCardScreen.js          # Add new flashcard form
```

## Setup & Run

### 1. Install dependencies
```bash
npm install
```

### 2. Start the dev server
```bash
npx expo start
```

### 3. Run on device
- **iOS**: Press `i` or scan QR code with the Expo Go app
- **Android**: Press `a` or scan QR code with the Expo Go app

## Tech Stack
- **Expo SDK 51**
- **React Native**
- **React Navigation** (Bottom Tabs + Native Stack)
- **React Context API** for state management
- **@expo/vector-icons** (Ionicons)
- **Animated API** for card flip animation

## Customization
- Change the deck name and initial cards in `context/FlashcardContext.js`
- Change the purple color theme (`#7C3AED`) in each screen's `StyleSheet`
- Add Firebase/AsyncStorage in `FlashcardContext.js` to persist data across sessions
