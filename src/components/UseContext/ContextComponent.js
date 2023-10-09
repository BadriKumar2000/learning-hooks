import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../../App";

function ContextComponent() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      Hello {user} {channel}
    </div>
  );
}

export default ContextComponent;
