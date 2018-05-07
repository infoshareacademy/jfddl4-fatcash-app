import React from 'react'
import Operation from "./Operation"
import Paper from 'material-ui/Paper'

const List = ({OperationList, deleteOperationFunction}) => (

    <Paper>
        {
            OperationList.map(el => (
                <Operation

                    category={el.category}
                    description={el.description}
                    value={el.value}
                    deleteOperation={() => deleteOperationFunction(el.key)}
                />
            ))
        }

    </Paper>



)

export default List