import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import React from 'react'
import {connect} from "react-redux";

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
            <div>
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar
                            src={this.props.userPhotoUrl}
                            size={40}
                            // style={style}
                        />
                    }
                >
                    <h5> Hello, {this.props.displayName ? this.props.displayName : 'User'} !</h5>
                </ListItem>
            </div>
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