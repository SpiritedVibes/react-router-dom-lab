
const MailboxList = (props) => {
    return (
      <>
        <h2>Mailboxes</h2>
        <ul>
          {props.mailboxes.map((currentMailbox) => (
            <li key={currentMailbox.name}>
                <Link to={`/mailboxes/${currentMailbox._id}`}>
                {currentMailbox.name}
                </Link>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default MailboxList;
  