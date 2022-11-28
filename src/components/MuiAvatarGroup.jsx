import React from "react";
import { Stack, Avatar, AvatarGroup } from "@mui/material";
function MuiAvatarGroup() {
  return (
    <Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="jhon doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="jhom doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/5.jpg"
            alt="jhom doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/51.jpg"
            alt="jhom doe"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
}

export default MuiAvatarGroup;
