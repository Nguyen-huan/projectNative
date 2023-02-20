import React from 'react'
import { Avatar, Card, CardContent, CardActions, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';


export default function index() {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title="This is title"
        subheader='apr 30, 2021'
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        image=""
        title='Title'
      />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          This is title
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          This is Content
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton >
          <FavoriteIcon />
          <Typography component='span' color='textSecondary'>
            10 likes
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  )
}
