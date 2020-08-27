import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { LOCALE } from '../../../../locale';

const Profile = () => {
  const locale = LOCALE.admin.dashboard.profile;
  return (
    <Box>
      <Typography variant="h5" component="h1" align="center">
        {locale.headline}
      </Typography>
    </Box>
  );
};

export default Profile;
