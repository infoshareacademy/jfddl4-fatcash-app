import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import {Link} from 'react-router-dom'
import moment from 'moment'
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider'

const styles = {
    categoryname: {
        margin: 4,
        backgroundColor: '#00bcd4',
        minWidth: 85,
    },
    value: {
        margin: 4,
    },
    date: {
        margin: 4,
        alignSelf: 'flex-end',
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    category: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    operation: {
        margin: 10,

    }
};

const ListItemForOperationList = (props) => (

    <Link to={`/operation/${props.k}`}>
        <MenuItem
            // rightIcon={<RemoveRedEye/>}
            //
            // secondaryText={`${moment(props.date).format('YYYY-MM-DD')}`}
            style={styles.operation}
        >
            <div style={styles.wrapper}>
                <div style={styles.category}>
                    <Chip style={styles.categoryname}>{`${props.category}`}</Chip>
                    <Chip style={styles.value}>{`value: ${props.cash}`}</Chip>
                </div>
                <Chip style={styles.date}>{`${moment(props.date).format('YYYY-MM-DD')}`}</Chip>
            </div>
        </MenuItem>
        <Divider />
    </Link>

)

export default ListItemForOperationList