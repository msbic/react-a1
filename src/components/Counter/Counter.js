import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import styles from './Counter.module.css';

const Counter = (props) =>
{
    const { counter, handleIncrement, handleDecrement } = props;
    return(
        <div className={counter}>
        
                <div>                    
                    <button  className={styles.counterButton}  onClick={handleIncrement}>
                        <Icon >expand_less</Icon>
                    </button>
                </div>

                <div>
                <Typography variant="h1" color="inherit" className={styles.grow}>
                {counter}
                </Typography>
                </div>
                    

                <div>
                    { 
                        (counter > 0) ?
                        (<button className={styles.counterButton} onClick={handleDecrement}>
                            <Icon className={styles.CounterIcon}>expand_more</Icon>
                        </button>)
                        :
                        (<Icon></Icon>)
                    }
                </div>
            
        </div>
    )
}

export default Counter;