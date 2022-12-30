import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {HashLink as Link} from 'react-router-hash-link';

//Images
import SockImage from '../assets/sockpuppet.jpg'
import MapsImage from '../assets/maps.png'
import UserIdImage from '../assets/userid.png'
import SearchImage from '../assets/searchfeed.jpg'
import TwitterImage from '../assets/twitter.png'
//Css
import '../css/cardsMain.css'


export default function MediaCard() {
  return (
    <div className='cardsMain'>
    <Card sx={{ maxWidth: 340 }} style={{margin:'15px',width:200,backgroundColor:'white',borderRadius:'20px'}}>
      <CardMedia
        sx={{ height: 140}}
        image={SockImage}
        title="Sock"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sock Puppet
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Create Sock Puppet With Single Click
        </Typography>
      </CardContent>
      <CardActions>
        <Link smooth to="#third"><Button size="small">Go to Sock Puppet Generator</Button></Link>
      </CardActions>
    </Card>

<Card sx={{ maxWidth: 340 }} style={{margin:'15px',width:200,backgroundColor:'white',borderRadius:'20px'}}>
<CardMedia
  sx={{ height: 110,backgroundSize:'80px'}}
  image={MapsImage}
  title="Maps"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Geolocation OSINT
  </Typography>
  <Typography variant="body2" color="text.secondary">
    View any place via maps API
  </Typography>
</CardContent>
<CardActions>
<Link smooth to="#four"><Button size="small">Go to GeoMaps</Button></Link>
</CardActions>
</Card>


<Card sx={{ maxWidth: 340 }} style={{margin:'15px',width:200,backgroundColor:'white',borderRadius:'20px'}}>
<CardMedia
  sx={{ height: 110,backgroundSize:'80px'}}
  image={UserIdImage}
  title="UserID"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Discovering User IDs
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Enter the username and obtain USER ID's
  </Typography>
</CardContent>
<CardActions>
<Link smooth to="#eight"><Button size="small">Go to Fetch UserID</Button></Link>
</CardActions>
</Card>

<Card sx={{ maxWidth: 340 }} style={{margin:'15px',width:200,backgroundColor:'white',borderRadius:'20px'}}>
<CardMedia
  sx={{ height: 140,backgroundSize:'190px'}}
  image={SearchImage}
  title="SearchFeed"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Search Feed
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Obtain Search Feed from multiple search Engines
  </Typography>
</CardContent>
<CardActions>
<Link smooth to="#nine"><Button size="small">Go to Fetch Search Feed</Button></Link>
</CardActions>
</Card>

<Card sx={{ maxWidth: 340 }} style={{margin:'15px',width:200,backgroundColor:'white',borderRadius:'20px'}}>
<CardMedia
  sx={{ height: 110,backgroundSize:'80px'}}
  image={TwitterImage}
  title="SearchFeed"
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Social Media OSINT
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Obtain data from Social Media Platforms
  </Typography>
</CardContent>
<CardActions>
<Link smooth to="#five"><Button size="small">Go to Social Media Fetching</Button></Link>
</CardActions>
</Card>



</div>
  );
}
