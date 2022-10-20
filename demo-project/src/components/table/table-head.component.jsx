import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableSortLabel from "@mui/material/TableSortLabel";
import Box from "@mui/material/Box";
import {visuallyHidden} from "@mui/utils";
import PropTypes from "prop-types";

function EnhancedTableHead(props) {
    const {tableHeads} = props;
    const headCells = [];
    console.log("EnhancedTableHead" + tableHeads)

    tableHeads.map((tableHead,index) => {
        headCells.push({
            id: index,
            numeric: false,
            disablePadding: true,
            label: tableHead,
        });
        console.log(headCells);
    })

    // const headCells = [
    //
    //     {
    //         id: 'name',
    //         numeric: false,
    //         disablePadding: true,
    //         label: 'Dessert (100g serving)',
    //     },
    //     {
    //         id: 'calories',
    //         numeric: true,
    //         disablePadding: false,
    //         label: 'Calories',
    //     },
    //     {
    //         id: 'fat',
    //         numeric: true,
    //         disablePadding: false,
    //         label: 'Fat (g)',
    //     },
    //     {
    //         id: 'carbs',
    //         numeric: true,
    //         disablePadding: false,
    //         label: 'Carbs (g)',
    //     },
    //     {
    //         id: 'protein',
    //         numeric: true,
    //         disablePadding: false,
    //         label: 'Protein (g)',
    //     },
    // ];
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

export default EnhancedTableHead;