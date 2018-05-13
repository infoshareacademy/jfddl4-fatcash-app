import React from 'react'
import MenuItem from 'material-ui/MenuItem'


class FilteredCategoryList extends React.Component {




    state = {
        transactions: [],
        category:"Food"

    };


    category=()=>(

        this.setState({

            category:""

        })
    );







    mapObjectToArray = (obj) => (
        Object.entries(obj || {})
            .map(([key, value]) => (
                typeof value === 'object' ?
                    {...value, key}
                    :
                    {key, value}
            ))
    );
    componentDidMount(){

        fetch('https://fatcash-app.firebaseio.com/transactions/.json')
    .then (response =>response.json())
    .then(data=>this.setState({

        transactions:this.mapObjectToArray(data)
                              }))
}
    render() {
        return (
            <div>
                {
                    this.state.transactions.map((value, index) => {


                        if(value.category===this.state.category)


                            return (
                                <MenuItem

                                >{value.category+" : "+value.description+" : "+value.date} </MenuItem>
                            )
                        }
                    )
                }

            </div>
        )
    }
}
export default FilteredCategoryList