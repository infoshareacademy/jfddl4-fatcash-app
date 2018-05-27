import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import React from 'react'
import {connect} from "react-redux";
import FontIcon from 'material-ui/FontIcon';

const avatarlist={
    border:"1px solid #3aa1ba"
}

class UserAvatar extends React.Component {

    render() {
        return (
            <center><div style={{marginTop: '10px'}}>
                {!this.props.userPhotoUrl?
                    <FontIcon
                        className="material-icons" size={100}
                        color={'#3aa1ba'}>person</FontIcon>
                    :


                        <Avatar
                            src={this.props.userPhotoUrl}


                            style={avatarlist}

                        />
                    }



                  <div>  <h5> Hello, {this.props.displayName ? this.props.displayName : 'User'} !</h5></div>

            </div>
</center>
        );
    }

}
const mapStateToProps = state => ({
    userPhotoUrl: state.auth.user.photoURL,
    displayName: state.auth.user.displayName,


})


export default connect(
    mapStateToProps
)(UserAvatar);