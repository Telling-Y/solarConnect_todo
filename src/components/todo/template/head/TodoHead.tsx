import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octber",
  "November",
  "December",
];

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const date = new Date();
  const [today, setToday] = useState({
    day : date.getDay() -1,
    date : date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  })
  const currentDate = `${DAYS[today.day]} ${MONTHS[today.month]} ${today.date}, ${today.year}`
  const [totalDate, setTotalDate] =useState(currentDate)

  useEffect(()=>{
setTotalDate(currentDate)
  },[today])

 

  return (
    <TodoHeadBlock>
      <DayText>{totalDate}</DayText>
      {/* <DateText>{dateString}</DateText> */}
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
