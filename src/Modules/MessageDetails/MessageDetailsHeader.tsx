import { Alert, Grid } from "@mui/material";
import {
  StyledMessageAvatar,
  StyledMessageBody,
  StyledMessageCmpnyName,
  StyledMessageSubject,
  StyledMessageTag,
  StyledMessageWrapper,
} from "Modules/Messages/Message/msg.style";

import { StyledFieldError } from "Styles/Global";
import { StyledMsgDetailsHeader } from "./msgdetails.style";

type Props = {};

const MessageDetailsHeader = (props: Props) => {
  return (
    <StyledMsgDetailsHeader>
      <StyledMessageWrapper>
        <Grid container>
          <Grid item>
            <StyledMessageAvatar src="/images/company/1.png" alt="gstin" />
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={10}>
                <StyledMessageBody>
                  <Grid container alignItems="center">
                    <StyledMessageCmpnyName
                      style={{
                        margin: "0 4px 0 0",
                      }}
                    >
                      GSTIN
                    </StyledMessageCmpnyName>
                    <StyledMessageTag bgColor="rgba(0, 82, 204, 0.1)">
                      Approval for Digital Signature
                    </StyledMessageTag>
                  </Grid>
                  <StyledMessageSubject>
                    Subject:{" "}
                    <span>
                      Requesting for approval for Approval to file the tax
                    </span>{" "}
                  </StyledMessageSubject>
                  <Alert
                    variant="standard"
                    style={{
                      padding: 0,
                      background: "transparent",
                    }}
                    severity="error"
                  >
                    <StyledFieldError
                      style={{
                        margin: "0 !important",
                      }}
                    >
                      This message cannot be deleted
                    </StyledFieldError>
                  </Alert>
                </StyledMessageBody>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledMessageWrapper>
    </StyledMsgDetailsHeader>
  );
};

export default MessageDetailsHeader;
