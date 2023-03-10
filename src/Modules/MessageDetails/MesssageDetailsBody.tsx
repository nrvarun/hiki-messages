import MessageDetailsReply from "./MessageDetailsReply";

import {
  StyledMessageDetailsBody,
  StyledMessageDetailsList,
} from "./msgdetails.style";

type Props = {};

const MESSAGE_REPLES = [
  {
    avatar: "/images/company/1.png",
    timestamp: "29/11/2020, 3 PM",
    status: "approved",
    statusTime: "02/12/2020, 4:30 pm",
    title: "John",
    reply:
      "Hii Sir,Can you please approve the request so that I can file taxes immediately.",
  },
  {
    avatar: "/images/company/2.png",
    timestamp: "29/11/2020, 3 PM",
    title: "Clarice Technologies",
    stauts: null,
    reply: "May I know about this in little more detail?",
  },
  {
    avatar: "/images/company/3.png",
    timestamp: "29/11/2020, 3 PM",
    title: "John",
    status: "approved",
    statusTime: "02/12/2020, 4:30 pm",
    reply:
      "Sure. Below are the details, CTempus faucibus nibh rhoncus egestas. Nibh ridiculus aliquet egestas hac mattis nulla habitasse. Ultricies aliquam non, turpis id nibh orci fames ante. Nulla tempor ultricies id feugiat ultricies neque.",
  },
];

const MesssageDetailsBody = (props: Props) => {
  return (
    <StyledMessageDetailsBody>
      <StyledMessageDetailsList>
        {MESSAGE_REPLES.map((item, index) => (
          <li key={index}>
            <MessageDetailsReply data={item} />
          </li>
        ))}
      </StyledMessageDetailsList>
    </StyledMessageDetailsBody>
  );
};

export default MesssageDetailsBody;
