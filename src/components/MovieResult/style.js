import { makeStyles } from '@material-ui/styles';

const centerObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export default makeStyles({
    cardContainer: {
        marginBottom: 8,
        ...centerObj
    },
    poster:{
        width: 120,
        padding: 8,
        ...centerObj
    },
    titlesContainer: {
        flexDirection: 'row',
        padding: 8
    },
    buttonTheme: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
});