import { AttachFileOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";

import {
  StyledMessageAttachment,
  StyledMessageAvatar,
  StyledMessageBody,
  StyledMessageCmpnyName,
  StyledMessageCmpnyWrapper,
  StyledMessageDesc,
  StyledMessageStatus,
  StyledMessageSubject,
  StyledMessageTag,
  StyledMessageUnreadTag,
  StyledMessageWrapper,
} from "./msg.style";

import SVG from "react-inlinesvg";

type MessageType = {
  id: number;
  unread: boolean;
  title: string;
  avatar: string;
  subject: string;
  tag: string;
  status: string;
  statusTime: string;
  desc: string;
};

type Props = {
  data: any;
};

const Message = ({ data }: Props) => {
  return (
    <StyledMessageWrapper className={data.unread ? "unread" : ""}>
      <Grid container>
        <Grid item>
          {data.unread && <StyledMessageUnreadTag />}
          <StyledMessageAvatar src={data.avatar} alt={data.title} />
        </Grid>
        <Grid item xs={10}>
          <StyledMessageCmpnyWrapper>
            <Grid container>
              <Grid item xs={8}>
                <StyledMessageBody>
                  <StyledMessageCmpnyName>{data.title}</StyledMessageCmpnyName>
                  <StyledMessageTag> {data.tag}</StyledMessageTag>
                  <StyledMessageSubject>
                    Subject: <span>{data.subject}</span>{" "}
                  </StyledMessageSubject>
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
                  <StyledMessageDesc>{data.desc}</StyledMessageDesc>
                </StyledMessageBody>
              </Grid>
              <Grid item xs={4} alignItems="flex-end">
                <StyledMessageAttachment>
                  <p>
                    <span>
                      <SVG src="/images/icons/attachment.svg" />
                    </span>
                    {data.timeStamp}
                  </p>
                </StyledMessageAttachment>
              </Grid>
            </Grid>
          </StyledMessageCmpnyWrapper>
        </Grid>
      </Grid>
    </StyledMessageWrapper>
  );
};

export default Message;
