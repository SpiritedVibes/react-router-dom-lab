import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  boxSize: "",
  boxholder: "",
};

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData); // Automatically assigns the ID in App's `addBox`
    setFormData(initialState);
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxSize">Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a size
          </option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <label htmlFor="boxholder">Box Holder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
