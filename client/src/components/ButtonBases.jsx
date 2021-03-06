import { Link } from 'react-router-dom'
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://res.cloudinary.com/kacloud20/image/upload/v1638887664/Project%202/snow_lmjxdw.webp',
    title: 'WINTER',
    width: '50%',
    season: "Winter"
  },
  {
    url: 'https://res.cloudinary.com/kacloud20/image/upload/v1638826053/Project%202/test_z0wh65.jpg',
    title: 'SPRING',
    width: '50%',
    season: "Spring"
  },
  {
    url: 'https://res.cloudinary.com/kacloud20/image/upload/v1638887664/Project%202/palm_ersz3g.webp',
    title: 'SUMMER',
    width: '50%',
    season: "Summer"
  },
  {
    url: 'https://res.cloudinary.com/kacloud20/image/upload/v1638887666/Project%202/leaves_tpd6xk.webp',
    title: 'AUTUMN',
    width: '50%',
    season: "Autumn"
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 250,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', 
    height: 200,
  },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 10,
  right: 10,
  top: 10,
  bottom: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  borderStyle: 'solid',
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
  return (
    <div className="home-img-spc">
      <label className="home-intro">Whatever the Weather provides
        a variety of activity ideas for every season. In other words, FUN for the
        entire year!</label>
      <br />
      <label className="selection">Start by selecting a season below:</label>
      <br />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
          >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Link to={`/activity/${image.season}`}>
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
          </Link>
          </ImageButton>
        
      ))}
      </Box>
    </div>
  );
}

