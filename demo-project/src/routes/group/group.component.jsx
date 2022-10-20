import EnhancedTable from "../../components/table/table.component";
import groupApi from "../../apis/groups/group-api";
import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateGroups} from "../../store/group/group.slice";
import {useNavigate} from "react-router-dom";

const Group = () => {
    const groups = useSelector(state => state.groups);
    const logInUserRole = useSelector(state => state.logInStatus.user.role);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const groupsTableHead = ["id", "name", "totalMember", "creator", "createDate"];
    const groupsTableKeys = ["id", "name", "totalMember", "creator.fullName", "createDate"];
    console.log()


    useEffect(()=>{
        if (logInUserRole.toLowerCase() !== "admin")
            navigate("/")
        else {
            const getAllGroups = async () => {
                try {
                    const {data:{content}} = await groupApi.getAllGroups();
                    console.log(content);
                    dispatch(updateGroups(content));
                } catch (error) {
                    throw new Error(error.getMessage)
                }
            }
            getAllGroups();
        }
    },[])


    return (
        <Fragment>
            {/*<p>{groups}</p>*/}
            <EnhancedTable groups={groups} groupsTableHead={groupsTableHead}
                           groupsTableKeys={groupsTableKeys}
            />
        </Fragment>
    )
}

export default Group;