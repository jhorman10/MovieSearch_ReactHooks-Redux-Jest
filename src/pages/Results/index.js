import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@material-ui/core'
import queryString from 'query-string';

import { searchMovie } from '../../redux/actions/search'
import { movieResults, isSearchLoading } from '../../redux/selectors'

export default ({ location }) => {
    const dispacth = useDispatch();
    const movies = useSelector( state => movieResults( state ));
    console.log(movies);

    useEffect(() => {
        const { movieName } = queryString.parse( location.search );

        if (movieName && !movies) {
            dispacth(searchMovie({ movieName }));
        }
    });

    return(
        <Container>
            Results
        </Container>
    )
}