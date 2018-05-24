import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import React from 'react'
import {connect} from "react-redux";
import FontIcon from 'material-ui/FontIcon';

const avatarlist={
   marginLeft:85,
    marginTop:7,
    border:"1px solid #3aa1ba"
}

class UserAvatar extends React.Component {
    // state = {
    //     photoURL: '',
    // };
    // getAvatar = () => {
    //     fetch(`https://fatcash-app.firebaseio.com/users/${this.props.photoURL}/users/` + this.state.photoURL + '/.json', {
    //             method: 'GET',
    //             body: ({
    //                 photoURL:this.state.photoURL
    //             }),
    //         }
    //     ).then(() => {
    //         this.setState({
    //             photoURL: this.state.newPhotoUrl
    //         })
    //     })
    // }
    render() {
        return (
            <center><div>
                {!this.props.userPhotoUrl?
                    <ListItem>
                    <FontIcon
                        className="material-icons" size={55}
                        color={'#3aa1ba'}>person</FontIcon>
                </ListItem>
                    :
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar
                            src={this.props.userPhotoUrl}
                        size={55}
                            style={avatarlist}

                        />
                    }
                >
                </ListItem>}
                <ListItem   disabled={true}  >
                    <h5> Hello, {this.props.displayName ? this.props.displayName : 'User'} !</h5>
                </ListItem>

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