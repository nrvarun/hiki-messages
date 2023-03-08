import styled from "styled-components";

export const StyledMessagesWrapper = styled.div`
  background: #ffffff;
  padding: 21px 16px;

  input {
    height: 100%;
  }
`;

export const StyledMessagesContentWrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(136, 136, 136, 0.1),
      rgba(136, 136, 136, 0.1)
    ),
    #ffffff;
  padding: 0;
  height: calc(100vh - 260px);
`;

export const StyledMessagesListingWrapper = styled.ul`
  background: #ffffff;
  border-right: 1px solid rgba(128, 128, 128, 0.1);
  height: calc(100vh - 260px);
  overflow: hidden auto;
  padding: 0;
  margin: 0;

  li a {
    text-decoration: none;
    position: relative;

    &.active {
      position: relative;

      article {
        background: rgba(136, 136, 136, 0.1);
      }

      &:after {
        content: "";
        position: absolute;
        width: 4px;
        height: 100%;
        background: #0052cc;
        top: 0;
        left: 0;
        bottom: 0;
      }
    }
  }
`;

export const StyledMessagesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledMessgesTabNavWrapper = styled.nav`
  border: 1px solid rgba(136, 136, 136, 0.4);
  border-radius: 4px;
`;

export const StyledMessgesTabList = styled.ul`
  list-style: none;
  padding: 2px;
  margin: 0;
  display: flex;
  align-items: center;

  li {
    flex: 1 1 auto;
  }

  .MuiButton-root {
    padding: 10px;
    color: #1c1c1c;
    font-weight: 600;
    opacity: 0.8;
    line-height: 1.15;
    width: 100%;

    &.active {
      color: #0052cc;
      opacity: 1;
      background: #f2f9ff;
    }
  }
`;
