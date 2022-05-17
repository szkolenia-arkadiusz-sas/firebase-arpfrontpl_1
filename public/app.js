// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';
import { getFirestore, deleteDoc, updateDoc, getDoc, getDocs, setDoc, doc, where, query, collection } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyACXwhrYpUv6BG7jjbMff67R3Ti4V3wdvw",
  authDomain: "fir-application-6d29a.firebaseapp.com",
  projectId: "fir-application-6d29a",
  storageBucket: "fir-application-6d29a.appspot.com",
  messagingSenderId: "41470028575",
  appId: "1:41470028575:web:1750c7e473a10e3cedde2a",
  measurementId: "G-YJNX62F21F"
};

// ---------------- ODCZYT 1 ELEMENTU

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Połączenie z bazą danych
const db = getFirestore(app);

// Nazwa kolekcji
const booksCollection = 'books';

/*
// Odniesienie do dokumentu w bazie
const docRef = doc(db, booksCollection, '1');
// Odczytanie dokumentu (snapshot)
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    // Odczytanie zawartosci
    console.log(docSnap.data());
} else {
    console.log('Book does not exist!');
}

// ---------------- ZAPIS

// Stworzenie odniesienia do dokumentu w bazie danych
const bookRef = doc(db, booksCollection, '2');

// Utworzenie obiektu książki, który stanie się dokumentem
const book = { 
    czy_do_wypozyczenia: false,
    ile_dostepnych: 0,
    ile_wypozyczonych: 7,
    title: "Harry Potter" 
};

// Zapis dokumentu z książką
setDoc(bookRef, book);
*/

// ---------------- AKTUALIZOWANIE DOKUMENTU
// Pobranie referencji do dokumentu, który chcemy zaktualizować
const bookForUpdateRef = doc(db, booksCollection, '1');

// Stworzenie obiektu do aktualizacji
const bookForUpdate = { 
    ile_dostepnych: 2,
    ile_wypozyczonych: 2,
    title: "Krzyzacy" 
};

// Wykonanie faktycznej aktualizacji
await updateDoc(bookForUpdateRef, bookForUpdate);


// ---------------- USUWANIE DOKUMENTÓW
await deleteDoc(doc(db, booksCollection, '2'));


// ---------------- ODCZYT WIELU ELEMENTÓW
// Odsienie do całej kolekcji
const q = query(collection(db, booksCollection), where('ile_dostepnych', '>=', 0));
// Pobranie wszystkich elementów z kolekcji
const querySnap = await getDocs(q);

// Przejście przez wszystkie pobrane wartości
querySnap.forEach((doc) => {
    // Wyświetlanie ID i danych dokumentu
    // console.log(doc.id + ' ' + doc.data());
    console.log(doc.data());
});


// CRUD -> Create Read Update Delete