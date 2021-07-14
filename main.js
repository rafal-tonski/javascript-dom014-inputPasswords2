// Projekt 5 - Zadanie dla Ciebie
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
let placeForMessages = document.querySelector("div.message");

const passwords = ["onE", "TWO"];
const messages = ["example1", "example2"];

const showMessage = (e) => {
  placeForMessages.textContent = "";

  passwords.map((password, index) => {
    if (e.target.value.toLowerCase() === password.toLowerCase()) {
      placeForMessages.textContent = messages[index];
      e.target.value = "";
    }
  });
};

input.addEventListener("input", showMessage);
input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});
input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});
