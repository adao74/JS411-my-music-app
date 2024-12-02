import React from 'react';
import {AppBar, Typography} from '@mui/material'

const MyAppBar = () => {
    return (
      <AppBar
        sx={{ 
          bgcolor: 'info.main', // 'info.main' applies the colorInfo theme
          color: 'black', 
          padding: 4 
        }}
      >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Welcome
      </Typography>
      </AppBar>
    )
}

export default MyAppBar