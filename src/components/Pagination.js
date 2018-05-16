import React from 'react'
import Pag from 'material-ui-pagination'

const Pagination = (props) => (

    <Pag
        total={Math.ceil(props.transactions.length / props.itemsPerPage)}
        current={props.currentPage + 1}
        display={10}
        onChange={props.newPageHandler}
    />
)

export default Pagination