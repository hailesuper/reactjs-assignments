import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import TableBody from "@mui/material/TableBody";
import * as React from "react";

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// const isSelected = (name) => selected.indexOf(name) !== -1;
//
// // Avoid a layout jump when reaching the last page with empty rows.
// const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

const CustomTableBody = ({groups, groupsTableKeys}) => (
    <TableBody>
        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
        {
            groups.map((group, index) => {
                return (
                    <TableRow>
                        <TableCell padding="checkbox">
                            <Checkbox
                                color="primary"
                                // checked={isItemSelected}
                                // inputProps={{
                                //     'aria-labelledby': labelId,
                                // }}
                            />
                        </TableCell>

                        {
                            groupsTableKeys.map((key, index) => (
                                <TableCell>
                                    {group.key}
                                </TableCell>
                            ))
                        }



                    </TableRow>
                )
            })
        }

        {/*{stableSort(rows, getComparator(order, orderBy))*/}
        {/*    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)*/}
        {/*    .map((row, index) => {*/}
        {/*        const isItemSelected = isSelected(row.name);*/}
        {/*        const labelId = `enhanced-table-checkbox-${index}`;*/}

        {/*        return (*/}
        {/*            <TableRow*/}
        {/*                hover*/}
        {/*                onClick={(event) => handleClick(event, row.name)}*/}
        {/*                role="checkbox"*/}
        {/*                aria-checked={isItemSelected}*/}
        {/*                tabIndex={-1}*/}
        {/*                key={row.name}*/}
        {/*                selected={isItemSelected}*/}
        {/*            >*/}
        {/*                <TableCell padding="checkbox">*/}
        {/*                    <Checkbox*/}
        {/*                        color="primary"*/}
        {/*                        checked={isItemSelected}*/}
        {/*                        inputProps={{*/}
        {/*                            'aria-labelledby': labelId,*/}
        {/*                        }}*/}
        {/*                    />*/}
        {/*                </TableCell>*/}

        {/*                /!*<TableCell*!/*/}
        {/*                /!*    component="th"*!/*/}
        {/*                /!*    id={labelId}*!/*/}
        {/*                /!*    scope="row"*!/*/}
        {/*                /!*    padding="none"*!/*/}
        {/*                /!*>*!/*/}
        {/*                /!*    {row.name}*!/*/}
        {/*                /!*</TableCell>*!/*/}
        {/*                /!*<TableCell align="right">{row.calories}</TableCell>*!/*/}
        {/*                /!*<TableCell align="right">{row.fat}</TableCell>*!/*/}
        {/*                /!*<TableCell align="right">{row.carbs}</TableCell>*!/*/}
        {/*                /!*<TableCell align="right">{row.protein}</TableCell>*!/*/}
        {/*            </TableRow>*/}
        {/*        );*/}
        {/*    })}*/}
        {/*{emptyRows > 0 && (*/}
        {/*    <TableRow*/}
        {/*        style={{*/}
        {/*            height: (dense ? 33 : 53) * emptyRows,*/}
        {/*        }}*/}
        {/*    >*/}
        {/*        <TableCell colSpan={6} />*/}
        {/*    </TableRow>*/}
        {/*)}*/}
    </TableBody>
)

export default CustomTableBody;