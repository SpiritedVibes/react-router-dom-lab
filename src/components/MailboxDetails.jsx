// MailboxDetails.js
import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === parseInt(mailboxId, 10) // Convert mailboxId to an integer
  );

  if (!selectedBox) {
    return <p>Mailbox not found</p>;
  }

  return (
    <>
      <h2>Mailbox Details</h2>
      <dl>
        <dt>Box Size:</dt>
        <dd>{selectedBox.boxSize}</dd>
        <dt>Box Holder:</dt>
        <dd>{selectedBox.boxholder}</dd>
      </dl>
    </>
  );
};

export default MailboxDetails;
