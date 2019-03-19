import React from 'react';
import styles from './Form.module.css';
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Form = (props) =>
{
    const { name, handleSubmit, handleNameChange } = props;

    return (

        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="productName"
                    label="Name"
                    className={styles.textbox}                          
                    variant="outlined"
                    value={name}
                    onChange={handleNameChange}
                />
                <Button type="submit" variant="contained" color="primary" >
                    PRIMARY
                </Button>
            </form>
        </div>
            
    );
}

export default Form;
