import React, { useEffect } from 'react';
import { Container, CircularProgress, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { movieResult as movieResultSelector} from '../../redux/selectors';
import { searchMovieById } from '../../redux/actions/search'

export default ({ match }) => {
    const dispacth = useDispatch();
    const movieResult = useSelector( state => movieResultSelector( state ));

    useEffect(() => {
        const movieId = match.params.id;
        if ( !movieResult || movieResult && movieResult.imdbID != movieId) {
            dispacth(searchMovieById({ movieId })); 
        }
    });

    if( !movieResult ){
        return <CircularProgress size={ 100 } color="primary"/>
    }

    const { Title, Poster,Actors, Director, Country, Rated, Awards, Plot} = movieResult;
    return(
        <Container>
            <Typography variant="h3">{ Title }</Typography>
            <img src={ Poster } alt={ Title }/>
            <Typography><strong>Actores: </strong>{ Actors }</Typography>
            <Typography><strong>Director: </strong>{ Director }</Typography>
            <Typography><strong>País: </strong>{ Country }</Typography>
            <Typography><strong>Clasificación: </strong>{ Rated }</Typography>
            <Typography><strong>Premios: </strong>{ Awards }</Typography>
            <Typography><strong>Sinopsis: </strong>{ Plot }</Typography>
        </Container>
    )
}