import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import facebook from 'src/img/facebook.svg'
import google   from 'src/img/google.svg'

const styles = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
}

const ShareButton = () => (

    <div>
        <FloatingActionButton
            mini={true}
            style={styles}
            href={'https://www.facebook.com/sharer/sharer.php?u=http%3A//www.fatcash.jfddl4.is-academy.pl/'}
            backgroundColor={'blue'}

        >
            <img src={facebook} alt="FB Logo"/>
        </FloatingActionButton>
        <FloatingActionButton
            mini={true}
            style={{...styles, right: '60px'}}
            href={'https://plus.google.com/share?url=www.fatcash.jfddl4.is-academy.pl'}
            backgroundColor={'red'}
        >
            <img src={google} alt="Google Logo"/>
        </FloatingActionButton>
    </div>

)

export default ShareButton