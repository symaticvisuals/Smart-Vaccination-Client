import { Typography } from "@material-ui/core";

const TableHeadItem = ({...props}) => {
  return (
    <tr>
          {props.data.map((item) => {
         return (
           <td key ={item}>
             <Typography>{item}</Typography>
           </td>
         );
     })}
    </tr>
  );
};
export default TableHeadItem;
