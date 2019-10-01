import React from "react";
import Transition from "react-transition-group/Transition";
import { makeStyles } from "@material-ui/styles";

const fadeOutLeft = "fade-out";
const fadeInRight = 'fade-in';

const useStyles = makeStyles({
  "fadeIn-entering": {
    animation: `$${fadeInRight} 2s linear`,
    position: "absolute",
    top: '20vh',
  },
  "fadeIn-exiting": {
    animation: `$${fadeOutLeft} 0.5s ease-in`,
    position: "absolute",
    top: '20vh',
  },
  [`@keyframes ${fadeInRight}`]: {
    from: {
      opacity: 0.3,
      marginRight: '-800px',
    },
    to: {
      opacity: 1,
      marginRight: '900px',
    }
  },
  [`@keyframes ${fadeOutLeft}`]: {
    from: {
      opacity: 0.7,
      left: 0,
      marginLeft: '5vw',
    },
    to: {
      opacity: 0,
      marginLeft: '-3000px',
    }
  }
});

export default function Fade({ in: inProp, children }) {
  const classes = useStyles();
  return (
    <Transition in={inProp} timeout={150} mountOnEnter unmountOnExit appear>
      {state => (
        <div className={classes[`fadeIn-${state}`] || ""}>{children}</div>
      )}
    </Transition>
  );
}
