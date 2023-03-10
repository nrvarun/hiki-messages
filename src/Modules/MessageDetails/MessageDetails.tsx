import { Grid } from "@mui/material";

import MessageDetailsHeader from "./MessageDetailsHeader";
import MessageDetailsResponse from "./MessageDetailsResponse";
import MesssageDetailsBody from "./MesssageDetailsBody";
import { StyledMsgDetailsWrapper } from "./msgdetails.style";

type Props = {};

const MessageDetails = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StyledMsgDetailsWrapper>
          <MessageDetailsHeader />
          <MesssageDetailsBody />
          <MessageDetailsResponse />
        </StyledMsgDetailsWrapper>
      </Grid>
    </Grid>
  );
};

export default MessageDetails;
