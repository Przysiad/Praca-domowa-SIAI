function checkIfNumber(val) {
  try {
    if (isNaN(val)) {
      throw new Error("Nie jest liczbą");
    } else {
      console.log("To jest liczba");
    }
  } catch (e) {
    console.log("Błąd:", e.message);
  } finally {
    console.log("Sprawdzana wartość:", val);
  }
}

checkIfNumber("tekst");
checkIfNumber(42);
