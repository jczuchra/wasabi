import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    background: {
        backgroundImage: 'radial-gradient(circle, #005cb1, #5364b9, #7a6dbf, #9b77c3, #b782c7, #bc8bcf, #c193d7, #c69cdf, #b5a4ea, #a1acf3, #8bb3f8, #75baf9)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: -1,
    },
    
    header: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '170px',
        transform: 'scale(1,2)',
    },
    headerButtonsContainer: {
        height: '80vh',
        width: '50vw',
        margin: '0 25vw',
    },
    listItem: {
        marginBottom: '10px',
        color: 'white',
        fontStyle: 'italic',
        paddingLeft: '10px',
        cursor: 'pointer',
        width: '20vw',
        '&:hover': {
            color: 'orange',
            background: 'linear-gradient(90deg, rgba(9,236,241,0.6867121848739496) 59%, rgba(246,246,247,0.577468487394958) 85%, rgba(255,255,255,0) 100%)',
        }
    },
    listContainer: {
        borderLeftStyle: 'solid',
        borderLeftWidth: '3px',
        borderImage: 'linear-gradient(to bottom,white 60%,rgba(0, 0, 0, 0) 100%) 1 100%',
    }
  });

const TopMenu = () => {
    const styles = useStyles();
    return (
        <div className={styles.background}>
            <Grid
                container
                justify="space-around"
                alignItems="center"
                direction="row"
                wrap="nowrap"
                className={styles.headerButtonsContainer}
            >
                <Typography 
                    variant="h1"
                    className={styles.header}
                >
                Mikrourazy
                </Typography>

                <Grid
                    direction="column"
                    className={styles.listContainer}
                >   
                    <Link to='/newgame'>
                        <Typography 
                        variant="h2"
                        className={styles.listItem}>
                            New Game
                        </Typography>
                    </Link>
                    <Typography 
                    variant="h2"
                    className={styles.listItem}>
                        Load Game
                    </Typography>
                    <Typography 
                    variant="h2"
                    className={styles.listItem}>
                        Options
                    </Typography>
                    <Typography 
                    variant="h2"
                    className={styles.listItem}>
                        Quit
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopMenu
