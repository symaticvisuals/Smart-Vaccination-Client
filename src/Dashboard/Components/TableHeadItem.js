import { Typography } from "@material-ui/core";

const TableHeadItem = ({...props}) => {
  return (
    <td title={props.item}>
      <Typography>{props.item}</Typography>
    </td>
  );
};
export default TableHeadItem;
