import { useFetchRecipientUser } from "../../../hooks/useFetchRecipient";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user)



  return (
    <div className="flex gap-3 user-card items-center p-2 justify-between">
      <div className="flex">
        <div className="mr-2">
          A
        </div>
        <div className="text-content">
          <div className="name">{recipientUser?.name}</div>
          <div className="text">Text Message</div>
        </div>
      </div>
    </div>
  );
};

export default UserChat;