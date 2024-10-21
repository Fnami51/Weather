import React from "react";

interface ErrorProps{
    error: string;
    description?: string;
}

function Error({error, description}: ErrorProps) {

  return (
    <div className="error-box">
      <h3>{error}</h3>
      <h4>{description}</h4>
    </div>
  );
}

export default Error;