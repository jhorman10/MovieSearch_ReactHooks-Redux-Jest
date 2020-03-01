import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core';

import { MovieIcon } from '../../icons';
import styles from './style';

export default () => {
    const [ searchText, setSearchText ] = useState('');
    const classes = styles();

    const handleSearchTextChange = (event) => {
        setSearchText( event.target.value );
    };

    const handleCleanTextClick = (event) => {
        console.log('Click clean');
    };

    const handleSearcheTextClick = (event) => {
        console.log('Click search');
    };
    
    return(
        <Container className={ classes.container }>
            <Card className={ classes.cardContainer }>
                <Grid container className={ classes.titleGridContainer }>
                    <Grid>
                        <Typography className={ classes.title }>
                            Bienvenido!
                        </Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={ classes.movieIcon }/>
                    </Grid>
                </Grid>
                <TextField
                    value={ searchText }
                    placeholder="Buscar.."
                    className={ classes.textFieldSearch }
                    onChange={ handleSearchTextChange }
                />
                <Grid className={ classes.buttonsContainer }>
                    <Button 
                        variant="contained" 
                        onClick={ handleCleanTextClick }>
                        Limpiar
                    </Button> 
                    <Button 
                        variant="contained" 
                        className={ classes.searchButton }
                        color="primary" 
                        size="large" 
                        onClick={ handleSearcheTextClick }>
                        Buscar
                    </Button>
                </Grid>
            </Card>
        </Container>
    )
}