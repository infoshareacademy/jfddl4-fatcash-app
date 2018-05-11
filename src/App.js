import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import SideBar from './components/SideBar'
import AddOperation from './components/AddOperation/AddOperation'
import OperationList from './components/OperationList'
import Dashboard from './components/Dashboard'
import AddCategory from './components/AddCategory'
import ShareButton from './components/Share'



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
                <AppBar
                    title="FatCash App - save money with us"
                    onLeftIconButtonClick={this.drawerBtnClickHandler}
                />
                <ShareButton />

                <Router>
                    <div>
                        <SideBar
                            onRequestSideBarChange={this.drawerBtnClickHandler}
                            isSideBarOpen={this.state.isDrowerOpen}
                        />


                        <Route exact path={'/'} component={Dashboard}/>
                        <Route exact path={'/add-category'} component={AddCategory}/>
                        <Route path={'/operation-list'} component={OperationList}/>
                        <Route path={'/add-new-operation'} component={AddOperation}/>


                    </div>
                </Router>

            </div>
        );
    }
}

export default App;