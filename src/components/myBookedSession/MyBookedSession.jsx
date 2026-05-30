import React from 'react';

const MyBookedSession = ({ data }) => {
  return (
    <div>
      <h2>{data.studentName}</h2>
    </div>
  );
};

export default MyBookedSession;