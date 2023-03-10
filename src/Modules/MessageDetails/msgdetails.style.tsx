import styled from "styled-components";

export const StyledMsgDetailsWrapper = styled.section`
  height: calc(100vh - 260px);
  overflow: hidden auto;
`;

export const StyledMsgDetailsHeader = styled.header`
  position: relative;
  background: rgba(136, 136, 136, 0.1);
  padding: 20px 16px;

  article {
    padding: 0;

    &:after {
      display: none;
    }
  }
`;

export const StyledMessageDetailsBody = styled.div`
  background: #ffffff;
  padding: 0 24px;
`;

export const StyledMessageDetailsReplyItem = styled.div`
  background: #ffffff;
  padding: 26px 0 32px 0;
  border-bottom: 1px dashed rgba(136, 136, 136, 0.2);
`;

export const StyledMessageDetailsReplyContent = styled.div`
  p {
  }
`;

export const StyledMessageDetailsList = styled.ul`
  background: #ffffff;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
  }
`;

export const StyledMessageDetailsTime = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #1c1c1c;
`;

export const StyledMessageDetailsResponseWrapper = styled.div`
  padding: 32px 24px;
  background: #ffffff;
`;

export const StyledMessageDetailsReplyWrapper = styled.div`
  position: relative;

  button {
    &,
    &:hover {
      position: absolute;
      right: 10px;
      top: 10px;
      height: auto;
      width: auto;
      min-width: auto;
      background: rgba(0, 82, 204, 0.1);
      border: 0.8px solid #0052cc;
      border-radius: 4px;
      padding: 8px;
      z-index: 10;
    }
  }

  textarea {
    padding: 12px 64px 12px 12px !important;
  }
`;

export const StyledMessageAttachmentList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 0 0 12px 0;

    &:last-child {
      margin: 0;
    }
  }
`;

export const StyledMessageAttachment = styled.div`
  padding: 16px 20px;
  background: #f2f9ff;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;

  p {
    margin: 0 24px 0 0;
    min-width: 200px;
  }

  button {
    padding: 0;
  }

  & > svg {
    margin: 0 8px 0 0;
  }
`;
