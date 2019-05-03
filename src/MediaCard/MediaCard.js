import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 345,
    
  },
  media: {
    height: 140,
  },
};


function MediaCard(props) {
  const { classes } = props;
  return (
    <div className="Card-list">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Startup
            </Typography>
            <Typography component="p">
              With The Significant Presence In The Global
              Market, We Help Startups Create A Digital
              Platform To Run The Business Operations
              Effectively.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Small Business
      </Typography>
            <Typography component="p">
              We Provide All Kinds Of Web And Mobile
              Application Solutions For Almost All Small
              Businesses Help Them Dominate The Digital
              Marketplace.
          
      </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Enterprise
            </Typography>
            <Typography component="p">
              We Have Delivered Web And App Solutions
              Across Multiple Industry Verticals Over The
              Years And Also Helped Enterprises In Diverse
              Domains.
    
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
    </div>
  );
}



export default withStyles(styles)(MediaCard);