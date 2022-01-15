import React from "react";
import "./App.css";
import firebase from "./firebase";

function App() {
  const [inmuebles, setInmuebles] = React.useState([]);

  React.useEffect(() => {
    const fectData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Inmuebles").get();
      setInmuebles(data.map((doc) => doc.data()));
    };
    fectData();
  }, []);
  return (
    <ul>
      {" "}
      {inmuebles.map((inmueble) => (
        <li key={inmueble.Estatus}>{inmueble.Estatus}</li>
      ))}{" "}
    </ul>
  );
}

export default App;
