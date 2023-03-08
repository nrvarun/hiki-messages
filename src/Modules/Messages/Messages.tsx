import { SearchOutlined } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { StyledHeaderSearchInput } from "components/Header/header.style";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Message from "./Message";
import {
  StyledMessagesContentWrapper,
  StyledMessagesListingWrapper,
  StyledMessagesWrapper,
  StyledMessgesTabList,
  StyledMessgesTabNavWrapper,
} from "./msgs.style";

type Props = {};

const SAMPLE_MESSAGES = [
  {
    id: 1,
    unread: false,
    title: "Clarice Technologies",
    timeStamp: "29/11/2020, 3 PM",
    avatar: "/images/company/1.png",
    subject: "Lorem ipsum dolor sit amet",
    tag: "Generic Message",
    status: "Approved",
    statusTime: "02/12/2020, 4:30 pm",
    desc: "Tempus faucibus nibh rhoncus egestas. Nibh ridicul",
  },
  {
    id: 2,
    unread: true,
    title: "Clarice Technologies",
    timeStamp: "29/11/2020, 3 PM",
    avatar: "/images/company/1.png",
    subject: "Lorem ipsum dolor sit amet",
    tag: "Generic Message",
    status: "Approved",
    statusTime: "02/12/2020, 4:30 pm",
    desc: "Tempus faucibus nibh rhoncus egestas. Nibh ridicul",
  },
  {
    id: 3,
    unread: false,
    title: "Clarice Technologies",
    timeStamp: "29/11/2020, 3 PM",
    avatar: "/images/company/1.png",
    subject: "Lorem ipsum dolor sit amet",
    tag: "Generic Message",
    status: "Approved",
    statusTime: "02/12/2020, 4:30 pm",
    desc: "Tempus faucibus nibh rhoncus egestas. Nibh ridicul",
  },
  {
    id: 4,
    unread: false,
    title: "Clarice Technologies",
    timeStamp: "29/11/2020, 3 PM",
    avatar: "/images/company/1.png",
    subject: "Lorem ipsum dolor sit amet",
    tag: "Generic Message",
    status: null,
    statusTime: "02/12/2020, 4:30 pm",
    desc: "Tempus faucibus nibh rhoncus egestas. Nibh ridicul",
  },
  {
    id: 5,
    unread: false,
    title: "Clarice Technologies",
    timeStamp: "29/11/2020, 3 PM",
    avatar: "/images/company/1.png",
    subject: "Lorem ipsum dolor sit amet",
    tag: "Generic Message",
    status: "Waiting for Approval",
    statusTime: "02/12/2020, 4:30 pm",
    desc: "Tempus faucibus nibh rhoncus egestas. Nibh ridicul",
  },
];

const Messages = (props: Props) => {
  const [messagesNavData, setMessagesNavData] = useState([
    {
      id: "all-msgs",
      title: "All Message",
      count: 30,
    },
    {
      id: "apprvl-sign",
      title: "Approval for Digital Signature",
      count: 10,
    },
    {
      id: "apprvl-task",
      title: "Approval for Other Task",
      count: 10,
    },
    {
      id: "generic",
      title: "Generic Messages",
      count: 10,
    },
  ]);

  const [activeNavTab, setActiveNavTab] = useState("all-msgs");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StyledMessagesWrapper>
          <Grid container columnSpacing={2} alignItems="center">
            <Grid item xs={2.5}>
              <StyledHeaderSearchInput
                fullWidth
                placeholder="Search"
                endAdornment={<SearchOutlined color="action" />}
              />
            </Grid>
            <Grid item xs={8}>
              <StyledMessgesTabNavWrapper>
                <StyledMessgesTabList>
                  {messagesNavData.map((tab, index) => (
                    <li key={tab.id}>
                      <Button
                        className={activeNavTab === tab.id ? "active" : ""}
                        onClick={() => setActiveNavTab(tab.id)}
                      >
                        {tab.title} - {tab.count}
                      </Button>
                    </li>
                  ))}
                </StyledMessgesTabList>
              </StyledMessgesTabNavWrapper>
            </Grid>
            <Grid item xs={1.5}>
              <Button variant="contained" fullWidth>
                New Message
              </Button>
            </Grid>
          </Grid>
        </StyledMessagesWrapper>
      </Grid>
      <Grid item xs={12}>
        <StyledMessagesContentWrapper>
          <Grid container>
            <Grid xs={6} item>
              <StyledMessagesListingWrapper>
                {SAMPLE_MESSAGES.map((item, index) => (
                  <li key={item.id}>
                    <NavLink to={`/messages/${item.id}`}>
                      <Message data={item} />
                    </NavLink>
                  </li>
                ))}
              </StyledMessagesListingWrapper>
            </Grid>
            <Grid xs={6} item>
              <Outlet />
            </Grid>
          </Grid>
        </StyledMessagesContentWrapper>
      </Grid>
    </Grid>
  );
};

export default Messages;
