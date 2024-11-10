// src/components/MailboxDetails.jsx

const MailboxDetails = (props) => {


const { mailboxId } = useParams()
const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);

if (!selectedBox) {
  return <p>Mailbox not found</p>;
}

return (
    <>
      <h2>Mailbox Details</h2>
      <dl>
        <dt>Boxsize:</dt>
        <dd></dd>
        <dt>Boxholder:</dt>
        <dd>{selectedBox.boxholder}</dd>
      </dl>
    </>
  )
}


  export default MailboxDetails