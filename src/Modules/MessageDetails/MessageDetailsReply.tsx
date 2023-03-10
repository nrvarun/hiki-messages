import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  StyledMessageCmpnyName,
  StyledMessageStatus,
  StyledMessageTag,
} from "Modules/Messages/Message/msg.style";
import {
  StyledMessageDetailsReplyContent,
  StyledMessageDetailsReplyItem,
  StyledMessageDetailsTime,
} from "./msgdetails.style";

type Props = {
  data: any;
};

const MessageDetailsReply = ({ data }: Props) => {
  return (
    <StyledMessageDetailsReplyItem>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={8}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar
                    sx={{ width: 24, height: 24 }}
                    variant="rounded"
                    src={data.avatar}
                  />
                </Grid>
                <Grid item xs={10}>
                  <StyledMessageCmpnyName
                    style={{
                      margin: "0 0 0 12px",
                    }}
                  >
                    {data.title}
                  </StyledMessageCmpnyName>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} textAlign="right">
              <StyledMessageDetailsTime>
                {data.timestamp}
              </StyledMessageDetailsTime>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} paddingLeft={6}>
          {data.status != null && (
            <StyledMessageStatus>
              Status:
              <StyledMessageTag
                color={
                  data.status?.toLowerCase() === "approved"
                    ? "#13A17E"
                    : "#F0B53D"
                }
                bgColor={
                  data.status?.toLowerCase() === "approved"
                    ? "rgba(19, 161, 126, 0.1)"
                    : "rgba(240, 181, 61, 0.1)"
                }
              >
                {data.status}
              </StyledMessageTag>
              ,<span>{data.statusTime}</span>
            </StyledMessageStatus>
          )}
          <StyledMessageDetailsReplyContent>
            <p>{data.reply}</p>
          </StyledMessageDetailsReplyContent>
        </Grid>
      </Grid>
    </StyledMessageDetailsReplyItem>
  );
};

export default MessageDetailsReply;
