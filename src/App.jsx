import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div id="app">
      <h1>Student Information</h1>

      <div id="items">
        <Student
          name="AVIRAL MISHRA"
          course="Computer Science"
          marks="95"
        />

        <Student
          name="CHANDAN"
          course="Information Technology"
          marks="90"
        />

        <Student
          name="AVINASH KUMAR"
          course="Electronics"
          marks="70"
        />
      </div>
    </div>
  );
}

export default App;