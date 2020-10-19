import React from 'react';
import config from '../config';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          {config.companyName}
        </Link>
        {` ${new Date().getFullYear()}.`}
      </Typography>
    );
};

export default Copyright;