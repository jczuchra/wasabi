import React from 'react';
import { makeStyles } from '@material-ui/styles';
import hg from '../images/hg.jpg';
import wasabi from '../images/wasabi.jpg';
import id from '../images/id-big.png';


const useStyles = makeStyles({
    image: {
        position: 'absolute',
        left: '30vw',
        top: '15vh',
        maxWidth: '800px',
        maxHeight: '800px',
        transition: '0.5s',
        borderRadius: '50px',
    },
    final: {
        position: 'absolute',
        left: '0',
        top: '0',
        right: 0,
        maxWidth: '100vw',
        maxHeight: '100vh',
        width: '100%',
        height: '100vh',
        borderRadius: '0px',
    }

})

const SelectedBand= (props) => {
    const styles = useStyles();
    const images = [hg,wasabi,id];
    setTimeout(() => {
        document.querySelector(`.${styles.image}`).classList.add(`${styles.final}`);
    }, 400)
    return (
        <img src={images[props.imageNumber]} className={styles.image} alt={props.alt} />
    )
};

export default SelectedBand;
