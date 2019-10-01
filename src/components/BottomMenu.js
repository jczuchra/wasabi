import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import space from '../images/space.png';
import select from '../images/select.png';

const useStyles = makeStyles({
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        // backgroundImage: `url(${bottom})`,
        // backgroundImage: 'linear-gradient(to left bottom,black 60%,rgba(0, 0, 0, 0) 100%)',
        backgroundImage: 'linear-gradient(to left bottom, #0e0e0f, #191b1c, #232727, #2f3331, #3e3f3b)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 2,
        height: '25vh',
        width: '100vw',
        borderTopStyle: 'solid',
        borderTopWidth: '6px',
        borderImage: 'linear-gradient(90deg, rgba(241,157,9,0.511099439775911) 1%, rgba(241,157,9,1) 48%, rgba(241,157,9,0.512976190476191) 99%) 2 0%',
      },
      button: {
        color: '#FFFFFF',
        border: '2px solid white',
        padding: '10px 40px',
        backgroundColor: 'black',
        borderRadius: '0px',
        position: 'relative',
        bottom: '-40px',
        fontSize: '32px',
        '&:hover': {
            color: 'orange',
        }
      },
      selectImagesContainer: {
          color: 'white',
          marginTop: '50px',
          width: '26vw',
          marginLeft: '37vw',
          marginRight: '37vw',
      }
})

const BottomMenu = () => {
    const styles = useStyles();
    return (
        <div className={styles.bottom} >
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-around"
                    className={styles.selectImagesContainer}
                >
                    <img src={select} alt="Select" />
                    <Typography variant="h4">
                        Select
                    </Typography>
                    <img src={space} alt="Spacebar" />
                    <Typography variant="h4">
                        Controls
                    </Typography>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                >
                    <Button className={styles.button}>
                    bimbamflimflam
                    </Button>
                    <Button className={styles.button}>
                    press start
                    </Button>
                    <Button className={styles.button}>
                    press start
                    </Button>
                    <Button className={styles.button}>
                    press start
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
};

export default BottomMenu;
