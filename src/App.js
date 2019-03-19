import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Counter from './components/Counter/Counter';
import ItemTable from './components/Table/ItemTable';
import Form from './components/Form/Form';
import CustomSnackBar from './components/SnackBar/SnackBar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = 
    {
      classes: props,
      counter: 0,
      name: "",
      items: [],
      id: 0,
      showSnackBar: false,
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCloseSnackBar = this.handleCloseSnackBar.bind(this);
  }
 
  handleCloseSnackBar()
  {
    this.setState(
      {
        showSnackBar: false
      }
    );
  }

  incrementCounter()
  {
    const { counter } = this.state;
    this.setState(
      {
        counter: counter + 1,
      }
    );
  }

  decrementCounter()
  {
    const { counter } = this.state;
    this.setState(
      {
        counter: counter - 1,
      }
    );
  }

  handleSubmit(e)
  {
    const { id, items, counter, name } = this.state;
    e.preventDefault();
    
    if (name && name !== "")
    {      
      const item = new Object();
      item.id = id;
      item.name = name;
      item.calories = counter;
      items.push( item );
     
      this.setState(
        {
          counter: 0,
          name: "",
          id: id + 1,
          showSnackBar: true,
        }
      );
    }
  }

  handleNameChange(e)
  {
      this.setState(
        {
          name: e.target.value,          
        }
      );
  }

  componentDidMount()
  {   
  }

  render() {
    const { counter, items, name, showSnackBar } = this.state;
    
   
    return (
      <div className={styles.app}>
                <AppBar position="static">
                  <Toolbar>
                    <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={styles.grow}>
                      COUNTERAPP
                    </Typography>                    
                  </Toolbar>
                </AppBar>
              

              <div className={styles.content}>
              <Grid container spacing={16}>
                  <Grid item xs={12} sm={7}>
                    <Card>
                      <div>
                      <CardContent className={styles.counter}>
                        <Counter counter={counter} handleIncrement={this.incrementCounter} handleDecrement={this.decrementCounter}/>
                      </CardContent>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                  <Card>
                      <CardContent>
                        <ItemTable list={items} />
                      </CardContent>                      
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={7}>
                  <Card>
                    <CardContent>
                    <Form name={name} handleSubmit={this.handleSubmit} handleNameChange={this.handleNameChange}/>
                    </CardContent>
                   </Card>
                  </Grid>
                  <div>
                    <CustomSnackBar open={showSnackBar} handleClose={this.handleCloseSnackBar} showInterval={5000}></CustomSnackBar>
                  </div>
                </Grid>                
              </div>

    </div>

    );
  }
}

App.propTypes = {
  // Define a list of props and typecast them
  locale: PropTypes.string,
};

export default App;
