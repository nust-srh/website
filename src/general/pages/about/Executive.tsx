import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import hardfacts from '../../../assets/hardfacts.png';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Executive = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const [expanded5, setExpanded5] = React.useState(false);
  const [expanded6, setExpanded6] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5 = () => {
    setExpanded5(!expanded5);
  };
  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };

  return (
    <div style={{ marginTop: '40px', marginBottom: '20px' }}>
      <Container maxWidth='lg' sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Typography align='center' sx={{ color: '#060543', fontSize: '1.9rem', fontWeight: 'bold' }}>
          Our Current Executive
        </Typography>
        <Grid container spacing={3} alignItems='center' justifyContent='center' sx={{ marginTop: '15px' }}>
          <Grid item lg={3} md={3} xs={12}>
            <Card sx={{ maxWidth: '100%', borderRadius: '0px' }}>
              <CardMedia
                component='img'
                height='240'
                image={hardfacts}
                alt='Bra Rajesh'
              />
              <CardHeader
                title='Silas Mavende'
                subheader='President'
                sx={{ height: '60px' }}
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    This is an english version of Lorem Ipsum. In this case it is standing in
                    for a mini bio statement of the executive member.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Card sx={{ maxWidth: '100%', borderRadius: '0px' }}>
              <CardMedia
                component='img'
                height='240'
                image={hardfacts}
                alt='Sean Timba'
              />
              <CardHeader
                title='Sean Timba'
                subheader='Vice President'
                sx={{ height: '60px' }}
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded1}
                  onClick={handleExpandClick1}
                  aria-expanded={expanded1}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded1} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    This is an english version of Lorem Ipsum. In this case it is standing in
                    for a mini bio statement of the executive member.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Card sx={{ maxWidth: '100%', borderRadius: '0px' }}>
              <CardMedia
                component='img'
                height='240'
                image={hardfacts}
                alt='Bra Rajesh'
              />
              <CardHeader
                title='Jane Phiri'
                subheader='Treasurer'
                sx={{ height: '60px' }}
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded2}
                  onClick={handleExpandClick2}
                  aria-expanded={expanded2}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded2} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    This is an english version of Lorem Ipsum. In this case it is standing in
                    for a mini bio statement of the executive member.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Card sx={{ maxWidth: '100%', borderRadius: '0px' }}>
              <CardMedia
                component='img'
                height='240'
                image={hardfacts}
                alt='Bra Rajesh'
              />
              <CardHeader
                title='Hluphekile Madjozi'
                subheader='Secretary'
                sx={{ height: '60px' }}
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded3}
                  onClick={handleExpandClick3}
                  aria-expanded={expanded3}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded3} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    This is an english version of Lorem Ipsum. In this case it is standing in
                    for a mini bio statement of the executive member.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Card sx={{ maxWidth: '100%', borderRadius: '0px' }}>
              <CardMedia
                component='img'
                height='240'
                image={hardfacts}
                alt='Bra Rajesh'
              />
              <CardHeader
                title='John Banda'
                subheader='Projects Director'
                sx={{ height: '60px' }}
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded4}
                  onClick={handleExpandClick4}
                  aria-expanded={expanded4}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded4} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    This is an english version of Lorem Ipsum. In this case it is standing in
                    for a mini bio statement of the executive member.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardMedia
                component='img'
                height='240'
                image={hardfacts}
                alt='Bra Rajesh'
              />
              <CardHeader
                title='Catherine Ncube'
                subheader='Projects Director'
                sx={{ height: '60px' }}
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded5}
                  onClick={handleExpandClick5}
                  aria-expanded={expanded5}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded5} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    This is an english version of Lorem Ipsum. In this case it is standing in
                    for a mini bio statement of the executive member.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item lg={3} md={3} xs={12}>
            <Card sx={{ maxWidth: '100%' }}>
              <CardMedia
                component='img'
                height='240'
                image={hardfacts}
                alt='Bra Rajesh'
              />
              <CardHeader
                title='James Chiweshe'
                subheader='Information Officer'
                sx={{ height: '60px' }}
              />
              <CardActions disableSpacing>
                <ExpandMore
                  expand={expanded6}
                  onClick={handleExpandClick6}
                  aria-expanded={expanded6}
                  aria-label='show more'
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded6} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    This is an english version of Lorem Ipsum. In this case it is standing in
                    for a mini bio statement of the executive member.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Executive