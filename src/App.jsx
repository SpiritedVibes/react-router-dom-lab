import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import MailboxForm from "./components/MailboxForm"
import MailboxDetails from "./components/MailboxDetails"
import MailboxList from "./components/MailboxList"

const initialState = [
  {
    _id: 1,
    boxSize: 'Small',
    boxholder: 'Alex',
  },
  {
    _id: 2,
    boxSize: 'Medium',
    boxholder: 'Joe',
  }
]

const App = () => {
  
  const [mailboxes, setMailboxes] = useState(initialState)


  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newBoxData])
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} /> 
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  )
}

export default App
