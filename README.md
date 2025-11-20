# notes-app
A simple browser-based Notes App built with HTML, CSS and JavaScript. Supports creating, editing and deleting notes with auto-save using localStorage so your notes stay even after page reload.
Here you go 👇

---

## ✨ Features

- Create unlimited notes
- Edit notes directly (contenteditable)
- Delete notes with one click
- Notes are auto-saved to `localStorage`
- Notes remain even after refreshing or reopening the browser
- Simple and clean UI

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **localStorage** for saving notes

---

## 📂 Project Structure

```text
.
├── index.html       # Main HTML file
├── style.css        # Styles for the notes app
├── script.js        # JavaScript logic (create, delete, save notes)
└── images/          # Icons (note icon, edit icon, delete icon)
````

---

## 🚀 How to Run

1. Download or clone this repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Open `index.html` in your browser (Chrome, Edge, etc.).
3. Click on **"Create Notes"** to add a new note.
4. Type your text inside the note.
5. Click the **delete icon** to remove a note.
6. Refresh the page — your notes will still be there ✅

---

## 💡 How It Works (localStorage)

* Whenever you create, edit or delete a note, the app updates `localStorage`:

  ```js
  localStorage.setItem("notes", notesContainer.innerHTML);
  ```
* When the page loads, it reads the saved notes:

  ```js
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
  ```

This way, your notes are stored in the browser and are not lost on refresh.

---

## 📌 Future Improvements (Ideas)

* Add dark / light theme toggle
* Add search/filter for notes
* Add timestamps (created / updated time)
* Allow exporting notes as a text or PDF file
* Add different colors for different notes

---

## ⭐ Support

If you like this project, please give it a **star ⭐ on GitHub**.
Suggestions and improvements are always welcome!

