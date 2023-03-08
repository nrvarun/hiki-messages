import styled from "styled-components";

export const StyledMessageAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 12px 0 0;
`;

export const StyledMessageCmpnyWrapper = styled.div`
  position: relative;
  margin: 0;
`;

export const StyledMessageBody = styled.div`
  position: relative;
`;

export const StyledMessageUnreadTag = styled.div`
  width: 18px;
  height: 18px;
  background: #2684ff;
  border-radius: 50%;
  position: absolute;
  top: 35px;
  left: 20px;
`;

export const StyledMessageCmpnyName = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #0e1952;
  margin: 0 0 8px 0;
`;

export const StyledMessageSubject = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #1c1c1c;
  margin: 8px 0;

  span {
    font-weight: 700;
  }
`;

export const StyledMessageDesc = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #1c1c1c;
  margin: 8px 0;
`;

export const StyledMessageAttachment = styled.div`
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #0e1952;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  svg {
    width: 14px;
    margin: 0 4px 0 0;

    path {
      color: currentColor;
    }
  }
`;

export const StyledMessageTag = styled.p<{ color?: string; bgColor?: string }>`
  border-radius: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${({ color }) => (color ? color : "#0e1952")};
  background: ${({ bgColor }) =>
    bgColor ? bgColor : "rgba(136, 136, 136, 0.1)"};
  display: inline-block;
  margin: 0;
  padding: 4px;
`;

export const StyledMessageStatus = styled.div<{ color?: string }>`
  border-radius: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  display: inline-block;
  margin: 0;
  padding: 4px;

  ${StyledMessageTag} {
    padding: 2px 8px;
    margin: 0 0 0 4px;
  }

  span {
    margin: 0 4px;
  }
`;

export const StyledMessageWrapper = styled.article`
  padding: 24px 24px 24px 56px;

  &.unread {
    ${StyledMessageCmpnyName} {
      color: #2684ff;
    }

    ${StyledMessageAttachment} {
      p,
      svg {
        color: #2684ff;

        path {
          stroke: #2684ff;
        }
      }
    }
  }
`;
