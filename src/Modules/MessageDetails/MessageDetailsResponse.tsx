import {
  AttachFile,
  CloseOutlined,
  FileUploadTwoTone,
  SendOutlined,
} from "@mui/icons-material";
import { Avatar, Button, Grid, IconButton, TextField } from "@mui/material";
import { StyledMessageCmpnyName } from "Modules/Messages/Message/msg.style";

import SVG from "react-inlinesvg";

import {
  StyledMessageAttachment,
  StyledMessageAttachmentList,
  StyledMessageDetailsReplyWrapper,
  StyledMessageDetailsResponseWrapper,
} from "./msgdetails.style";

type Props = {};

const MessageDetailsResponse = (props: Props) => {
  return (
    <StyledMessageDetailsResponseWrapper>
      <Grid container>
        <Grid item xs={12} marginBottom={4}>
          <Grid container>
            <Grid item xs={8}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar
                    sx={{ width: 24, height: 24 }}
                    variant="rounded"
                    src="/images/users/1.png"
                  />
                </Grid>
                <Grid item xs={10}>
                  <StyledMessageCmpnyName
                    style={{
                      margin: "0 0 0 12px",
                    }}
                  >
                    John
                  </StyledMessageCmpnyName>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} marginBottom={4}>
          <StyledMessageDetailsReplyWrapper>
            <TextField
              id="msg-reply"
              label=""
              multiline
              fullWidth
              rows={1}
              maxRows={6}
            />
            <Button variant="outlined">
              <SendOutlined />
            </Button>
          </StyledMessageDetailsReplyWrapper>
        </Grid>
        <Grid item xs={12} marginBottom={4}>
          <Button
            variant="text"
            component="label"
            startIcon={<AttachFile />}
            size="large"
          >
            Attach Files
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <StyledMessageAttachmentList>
            <li>
              <StyledMessageAttachment>
                <SVG src="/images/icons/pdf.svg" />
                <p>Passport - Front Side</p>
                <IconButton>
                  <CloseOutlined color="error" />
                </IconButton>
              </StyledMessageAttachment>
            </li>
            <li>
              <StyledMessageAttachment>
                <SVG src="/images/icons/placeholder-img.svg" />
                <p>Passport - US Visa.jpeg</p>
                <IconButton>
                  <CloseOutlined color="error" />
                </IconButton>
              </StyledMessageAttachment>
            </li>
          </StyledMessageAttachmentList>
        </Grid>
      </Grid>
    </StyledMessageDetailsResponseWrapper>
  );
};

export default MessageDetailsResponse;
