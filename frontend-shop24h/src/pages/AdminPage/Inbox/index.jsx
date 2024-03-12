import Header from "../../../components/AdminPage/Header";
import { Box, useTheme, Button, Typography } from "@mui/material";
import { tokens } from '../../../theme';
import { useContext } from "react";
import { ChatContext } from "../../../context/ChatContext";
import UserChat from "../../../components/AdminPage/Inbox/UserChat";

const Inbox = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const { userChats, isUserChatsLoading, userChatsError } = useContext(ChatContext);

  return (
    <Box m="20px">
      <Header title="INBOX" subtitle="Managing List Chat Member" />

      {/* List Chat */}
      <Box>
        {
          userChats?.length < 1 ?
            null
            :
            <div className="flex gap-4 items-start">
              <div className="grow-0 messages-box gap-3 pr-3">
                {isUserChatsLoading && <p>Loading chats...</p>}
                {userChats?.map((chat, index) => {
                  return (
                    <div key={index}>
                      <UserChat chat={chat} user={storageUser?.user} />
                    </div>
                  )
                })}

              </div>
              <div>ChatBox</div>
            </div>
        }
      </Box>
    </Box>
  );
};

export default Inbox;