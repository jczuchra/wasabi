import React from 'react';
import { makeStyles } from '@material-ui/styles';
import hg from '../images/hg.jpg';
import wasabi from '../images/wasabi.jpg';
import id from '../images/id.jpg';

const useStyles = makeStyles({
    image: {
        maxWidth: '800px',
        maxHeight: '800px',
        borderRadius: '50px',
    },
})

const ImageContainer = (props) => {
    const styles = useStyles();
    const images = [hg,wasabi,id];
    return (
        <img src={images[props.imageNumber]} className={styles.image} alt={props.alt} />
    )
};

export default ImageContainer;
