import React, { useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import ImageContainer from '../components/ImageContainer';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import Fade from '../components/Fade';
import TransitionGroup from "react-transition-group/TransitionGroup";

const useStyles = makeStyles({
    background: {
        backgroundImage: 'radial-gradient(circle, #005cb1, #5364b9, #7a6dbf, #9b77c3, #b782c7, #bc8bcf, #c193d7, #c69cdf, #b5a4ea, #a1acf3, #8bb3f8, #75baf9)',
        width: '100vw',
        height: '100vh',
        color: 'white'
    },
    bandContainer: {
        
    },
    arrow: {
        color: 'white',
        fontSize: '96px',
        cursor: 'pointer',
    },
    imageGrid: {
        width: '42vw',
        height: '90vh'
    },
    bandName: {
        fontFamily: '"Anton", sans-serif',
        fontSize: '120px',
        marginTop: '10px',
    },
    button: {
        position: 'absolute',
        color: '#FFFFFF',
        border: '2px solid white',
        padding: '10px 40px',
        backgroundColor: 'black',
        borderRadius: '0px',
        fontSize: '42px',
        bottom: '3vh',
        '&:hover': {
            color: 'orange',
            backgroundColor: 'black',
        }
      },
      playButton: {
        right: '3vh',
      },
      backButton: {
          left: '3vh',
      },
      selectedImage: {
          maxWidth: '100vw',
          maxHeight: '100vh',
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          zIndex: 5,
          borderRadius: '0px',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          transition: '0.2s',
    }
})

const BandsContainer = () => {
    const styles = useStyles();
    const [image, setImage] = useState(0);
    const [show, setShow] = useState(true);
    const bandNames = ['Hemp Gru', 'Wasabi', 'Jakieś ćpunki'];
    const clickForward = () => {
        setImage((image+1)%3);
        setShow(!show)
    }
    const clickBackward = () => {
        setShow(!show);
        if(image-1 < 0)
            return setImage(2);
        return setImage(image-1);
    }

    return (
            <React.Fragment>
                <Grid
                    container
                    alignItems="center"
                    className={styles.background}
                >
                    <Grid
                        container
                        justify="center"
                        alignItems="center"
                        wrap="nowrap"
                        className={styles.bandContainer}
                    >
                        <ArrowBack className={styles.arrow} onClick={() => clickBackward()} />
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justify="space-between"
                            className={styles.imageGrid}
                        >
                            <Typography 
                                variant="h2"
                            >
                                Choose your band:
                            </Typography>
                            <TransitionGroup component="div" >
                            {show ? (
                            <Fade key={0}>
                                <ImageContainer imageNumber={image} />
                            </Fade>
                            ) : (
                            <Fade key={1}>
                                <ImageContainer imageNumber={image} />
                            </Fade> 
                             )}
                        </TransitionGroup> 
                            <Typography 
                                variant="h1"
                                className={styles.bandName}
                            >
                                {bandNames[image]}
                            </Typography>
                        </Grid> 
                        <ArrowForward className={styles.arrow} onClick={() => clickForward()} />
                    </Grid>
                </Grid>
                <Link to={`/loading/${image}`}>
                    <Button
                        className={`${styles.button} ${styles.playButton}`}
                    >
                        Play
                    </Button>
                </Link>
                <Link to='/'>
                    <Button
                        className={`${styles.button} ${styles.backButton}`}
                    >
                        Back to menu
                    </Button>
                </Link>
            </React.Fragment>
    )
}

export default BandsContainer;