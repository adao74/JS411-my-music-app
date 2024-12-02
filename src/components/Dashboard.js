import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import '../App.css'


const DashBoard = ({logout, onlineStatus, volumeControl, volume, qualityControl, quality, notifications}) => {
return (
    <>
        <header className="App-top">
            <h1>You are currently logged in</h1>
            <Button onClick={ (e) => {logout(e)}} variant="contained">Logout</Button>
        </header>
        <section className="cards">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="internet.jpg"
                    alt="status picture"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Online Status
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Toggle the switch to change your status from offline to online.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Switch onChange={ () => onlineStatus() } />
                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 450 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image="volume.jpg"
                    alt="volume picture"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Volume Control
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Adjust the slider to change your system volume.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={100}
                        value={volume} // control value of slider with state (i.e. controlled component)
                        onChange={ (e, newValue) => volumeControl(newValue) }  // Material UI docs recommend not doing e.target.value, but using the 2nd parameter to access the slider value
                    />
                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="quality.jpg"
                        alt="quality picture"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Quality
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Choose the quality of your sound.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={quality}  // controlled component 
                            label="quality"
                            onChange={ (e) => qualityControl(e.target.value)}
                        >
                            <MenuItem value={1}>Low</MenuItem>
                            <MenuItem value={2} >Normal</MenuItem>
                            <MenuItem value={3}>High</MenuItem>
                        </Select>
                    </FormControl>
                </CardActions>
            </Card>
        </section>
        <section className="App-top">
            <h2>System notifications</h2>
            {notifications.map( (message, index) => <p key={index}>{message}</p>  )}
        </section>
    </>
)
}

export default DashBoard

