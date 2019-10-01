import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LoadingBar from '../components/LoadingBar';
import SelectedBand from '../components/SelectedBand';

const useStyles = makeStyles({
    background: {
        backgroundImage: 'radial-gradient(circle, #005cb1, #5364b9, #7a6dbf, #9b77c3, #b782c7, #bc8bcf, #c193d7, #c69cdf, #b5a4ea, #a1acf3, #8bb3f8, #75baf9)',
        width: '100vw',
        height: '100vh',
        color: 'white'
},
});
const LoadingContainer = (props) => {
    const styles = useStyles();
    return (
        <div className={styles.background}>
            <SelectedBand imageNumber={props.match.params.image} />
            <LoadingBar />
        </div>
    )
};

export default LoadingContainer;
