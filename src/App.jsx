import './App.css'
import AddForm from './components/AddForm'
import ListComponent from './components/ListComponent'

function App() {


  return (
    <div style={{ display: "flex", justifyContent: "start", alignItems: "flex-start", height: "80svh", flexDirection: "column", width: "80vw" }}>
      <h1 style={{width: "100%", textAlign: "center"}}>XHR Mastery Assignment</h1>
      <div style={{ display: "flex", gap: 20, flex: 1, width: "100%", height: "60svh" }}>
        <div style={{ flex: 1, border: "1px solid lightgray", borderRadius: 10, height: "100%" }}>
          <AddForm />
        </div>
        <div style={{ flex: 2, border: "1px solid lightgray", borderRadius: 10, height: "100%", display: "flex", flexDirection: "column", padding: "5px" }}>
          <ListComponent />
        </div>
      </div>
    </div>
  )
}

export default App
