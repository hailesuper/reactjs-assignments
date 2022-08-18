import TableHead from "./tablehead.component";

function TableRow(props) {
    const deleteUser = (id) => {
        props.deleteUser(id);
    }
    const handleClickEditUser = (id) => props.editUser(id);

    return (
        <>
            {props.data.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>
                        <button className={"delete"}
                                onClick={() => deleteUser(user.id)}>Delete
                        </button>
                    </td>
                    <td>
                        <button className={"edit"}
                                onClick={() => handleClickEditUser(user.id)}>Edit
                        </button>
                    </td>
                </tr>


            ))}
        </>
    )
}

export default TableRow;