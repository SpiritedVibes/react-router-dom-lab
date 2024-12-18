// MailboxList.js
import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailboxes</h2>
      <ul>
        {props.mailboxes.map((currentMailbox) => (
          <li key={currentMailbox._id}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>
              {currentMailbox.boxholder}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
