import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import SideBar from './components/SideBar'
import AddOperation from './components/AddOperation/AddOperation'
import OperationList from './components/OperationList/OperationList'
import Dashboard from './components/Dashboard'
import AddCategory from './components/AddCategory'
import ShareButton from './components/Share'
import CategoryList from './components/CategoryList/CategoryList'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';



class App extends React.Component {



    state = {
        isDrowerOpen: false
    }

    drawerBtnClickHandler = () => this.setState({
        isDrowerOpen: !this.state.isDrowerOpen
    })

    render() {
        return (
            <div>
                <MuiThemeProvider>
                <AppBar
                    title="Fatcash web application - save money with us"
                    onLeftIconButtonClick={this.drawerBtnClickHandler}
                    iconElementRight={<FlatButton label="Logout"/>}
                />
                </MuiThemeProvider>
                <ShareButton />

                <Router>
                    <div>
                        <SideBar
                            onRequestSideBarChange={this.drawerBtnClickHandler}
                            isSideBarOpen={this.state.isDrowerOpen}
                        />

                        <Route exact path={'/'} component={Dashboard}/>
                        <Route exact path={'/add-category'} component={AddCategory}/>
                        <Route path={'/operation-list/:categoryId?'} component={OperationList}/>
                        <Route path={'/add-new-operation'} component={AddOperation}/>
                        <Route exact path={'/category-list'} component={CategoryList}/>
                        <Route exact path={'/operation/:transactionId?'} component={AddOperation}/>
                    </div>
                </Router>

            </div>
        );
    }
}

export default App;