import React, {Component} from 'react';
import './App.css';
import DashBoard from './components/Dashboard.js'
import MyAppBar from './components/MyAppBar.js'
import { Button, TextField } from '@mui/material';

class App extends Component {
  constructor () {
    super()

    this.state = {
      loggedIn: false,
      online: false,
      volume: 20,
      quality: 2,
      notifications: ["Your application is offline. You won't be able to share or stream music to other devices."]
    }
  }
  

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.loggedIn)
    this.state.loggedIn ? this.setState({loggedIn: false}) : this.setState({loggedIn: true})
  }

  handleChange = () => {
    this.setState({online: !this.state.online})
    console.log(this.state.online)
  }

  handleVolume = (vol) => {
    this.setState({volume: vol})
    console.log(this.state.volume)
  }

  handleQuality = (qual) => {
    this.setState({quality: qual})
    console.log(this.state.quality)
  }

  componentDidUpdate (prevProps, prevState) {
    // Only update notifications if status changes (prevent infinite loop)
    if (prevState.online !== this.state.online && !this.state.online) {
      // if 'online' status has changed to offline
      const newNotifications = this.state.notifications;
      newNotifications[0] = "Your application is offline. You won't be able to share or stream music to other devices."
      this.setState({notifications: newNotifications}) 
      console.log(this.state.notifications)
    } else if (prevState.online !== this.state.online && this.state.online) {
      // if 'offline' status has changed to online
      const newNotifications = this.state.notifications;
      newNotifications[0] = null
      this.setState({notifications: newNotifications}) 
      console.log(this.state.notifications)      
    }

    if (prevState.volume !== this.state.volume && this.state.volume > 80) {
      // add message if volume greater than 80
      const newNotifications = this.state.notifications;
      newNotifications[1] = "Listening to music at a high volume could cause long-term hearing loss."
      this.setState({notifications: newNotifications}) 
      console.log(this.state.notifications)
    } else if (prevState.volume !== this.state.volume && this.state.volume <= 80) {
      // remove message if volume less than 80
      const newNotifications = this.state.notifications;
      newNotifications[1] = null
      this.setState({notifications: newNotifications}) 
      console.log(this.state.notifications)      
    }

    if (prevState.quality !== this.state.quality && this.state.quality === 1) {
      // add message if quality is low
      const newNotifications = this.state.notifications;
      newNotifications[2] = "Music quality is degraded. Increase quality if your connection allows it."
      this.setState({notifications: newNotifications}) 
      console.log(this.state.notifications)
    } else if (prevState.quality !== this.state.quality && this.state.quality !== 1) {
      // remove message if not low anymore
      const newNotifications = this.state.notifications;
      newNotifications[2] = null
      this.setState({notifications: newNotifications}) 
      console.log(this.state.notifications)      
    }
  }

  render () {
    return (
      <>
        <MyAppBar></MyAppBar>
        { this.state.loggedIn ? 
          <DashBoard 
            logout={this.handleClick} 
            onlineStatus={this.handleChange} 
            volumeControl={this.handleVolume} 
            volume={this.state.volume} 
            qualityControl={this.handleQuality} 
            quality={this.state.quality} 
            notifications={this.state.notifications}
          /> : 
        <form className="App-header">
          Username: <TextField required label="Enter text" variant="outlined" />
          Password: <TextField required label="Enter text" variant="outlined" />
          <Button onClick={this.handleClick} variant="contained">Login</Button>
        </form>
        }
      </>
    )
  }
}

export default App;
