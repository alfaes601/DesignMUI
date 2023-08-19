import { DarkMode, Drafts, Home, Inbox, Settings } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{
      display: {
        xs: "none", md: "block"
      }
    }}>
      <List component="nav">
        <ListItem disablePadding>
          <ListItemButton component="a" href='#home'>
            <ListItemIcon >
              <Home fontSize='large' />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Drafts fontSize='large' />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings fontSize='large' />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Switch />
            </ListItemIcon>
            <DarkMode />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar