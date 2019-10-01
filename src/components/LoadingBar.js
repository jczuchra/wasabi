import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { LinearProgress, Typography } from '@material-ui/core';


const BorderLinearProgress = withStyles({
    root: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 80,
        backgroundColor: '#262626',
    },
    bar: {
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#cc0000',
        borderRadius: '5px',
        margin: '5px',
    },
  })(LinearProgress);

const LoadingInfo = withStyles({
    root: {
        position: 'absolute',
        bottom: '10px',
        left: 0,
        width:' 100%',
        textAlign: 'center',
        color: 'white',
    }
})(Typography);

const useStyles = makeStyles({
    mark: {

    },
    orange: {
        '&>*': {
        backgroundColor: '#ff751a',
        }
    },
    yellow: {
        '&>*': {
        backgroundColor: '#ffd11a',
        }
    },
    green: {
        '&>*': {
        backgroundColor: '#40ff00',
        }
    }
})

const LoadingBar = () => {
    const styles = useStyles();
    const [loaded, setLoaded] = useState(0);
    const bar = document.querySelector(`.${styles.mark}`);
    useEffect(() => {

        if(loaded === 20) {
            bar.classList.add(`${styles.orange}`)
        }
        if(loaded === 50) {
            bar.classList.add(`${styles.yellow}`)
        }
        if(loaded === 80) {
            bar.classList.add(`${styles.green}`)
        }
        if(loaded !== 100)
            setTimeout(() => {
                setLoaded(loaded+1);
            },100);
    }, [loaded]);
    return (
        <div>
            <BorderLinearProgress
                variant="determinate"
                color="secondary"
                value={loaded}
                className={styles.mark}
           />
            <LoadingInfo
                variant='h3'>
                {loaded+'%'}
            </LoadingInfo>
        </div>
    )
};

export default LoadingBar;
