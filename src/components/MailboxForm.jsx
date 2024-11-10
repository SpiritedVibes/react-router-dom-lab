import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
  _id: 0,
  boxSize: '',
  boxholder: '',
};

const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addBox(formData)
    setFormData(initialState)
    navigate('/mailboxes')
  }

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="_id">Id:</label>
        <input
          type="number"
          id="_id"
          name="_id"
          value={formData._id}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Box Size:</label>
        <input
          type="text"
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        />
        <label htmlFor="boxholder">Box Holder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default MailboxForm
