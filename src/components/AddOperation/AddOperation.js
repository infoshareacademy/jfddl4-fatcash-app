import React from 'react'
import List from './List'
import Controls from './Controls'
import DropDownMenu from './DropdownMenu'

class OperationList extends React.Component {

    state = {
        Operations: [
            {category: "other", description: "milk, eggs, and toilet paper", value: "2222", key: 123},
            {category: "food", description: "meat and bred", value: "4444", key: 1234},

        ],
        filterText: '',

        categoryAdd: '',
        descriptionAdd: '',
        valueAdd: '',


    }

    deleteOperation = (OperationKey) => {
        const newOperations = this.state.Operations.filter(el => OperationKey !== el.key)
        this.setState({
            Operations: newOperations
        })

    }


    newOperationChangeHandlercategory = (event, newValue) => this.setState({
        categoryAdd: newValue
    })
    newOperationChangeHandlerdescription = (event, newValue) => this.setState({
        descriptionAdd: newValue
    })
    newOperationChangeHandlervalue = (event, newValue) => this.setState({
        valueAdd: newValue
    })


    addOperation = () => {
        const newFullOperation = {

            category: this.state.categoryAdd,
            description: this.state.descriptionAdd,
            value: this.state.valueAdd,
            key: Date.now()
        }
        const newOperations = this.state.Operations.concat(newFullOperation)

        this.setState({
            Operations: newOperations,
            newFullOperation: ''
        })
    }

    render() {
        return (
            <div>

                <Controls
                    onClickHandler={this.addOperation}
                    newcategoryValue={this.state.categoryAdd}
                    onChangeHandlercategory={this.newOperationChangeHandlercategory}
                    newdescriptionValue={this.state.descriptionAdd}
                    onChangeHandlerdescription={this.newOperationChangeHandlerdescription}
                    newvalueValue = {this.state.valueAdd}
                    onChangeHandlervalue={this.newOperationChangeHandlervalue}
                />
                <List
                    deleteOperationFunction={this.deleteOperation}
                    OperationList={this.state.Operations}
                />

            </div>

        )
    }


}

export default OperationList