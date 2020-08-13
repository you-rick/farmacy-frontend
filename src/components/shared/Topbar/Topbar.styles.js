import {fade} from "@material-ui/core";

const themeStyles = theme => ({
    rightPanel: {
        flexWrap: 'nowrap'
    },
    search: {
        position: 'relative',
        margin: '0 0.5rem',
        width: '100%',
        border: '1px solid',
        borderColor: fade(theme.palette.common.black, 0.15),
        borderRadius: theme.shape.borderRadius,
    },
    searchIcon: {
        height: '100%',
        position: 'absolute',
        left: '0.5rem',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        width: '8rem',
        paddingLeft: '2.5rem',
        transition: theme.transitions.create('width'),
        '&:focus': {
            width: '10rem',
        }
    },
    helpBtn: {
        color: fade(theme.palette.common.black, 0.5)
    }
});


export default themeStyles;
