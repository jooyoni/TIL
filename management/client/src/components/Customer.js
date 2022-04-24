import { TableRow, TableCell } from "@material-ui/core";
import CustomerDelete from "./CustomerDelete";

function Customer(props){
    return (
        <TableRow>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.male}</TableCell>
            <TableCell>{props.job}</TableCell>
            <TableCell><CustomerDelete id={props.id} /></TableCell>
        </TableRow>
    )
}

export default Customer;