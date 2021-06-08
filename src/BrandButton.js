import { Button } from "@material-ui/core";
import PropTypes from 'prop-types';
function BrandButton({color, children, widthC}){
    return (
        <Button variant="contained" color={color} style={{width: widthC}}>{children}</Button>
    )
}
BrandButton.prototypes = {
    color: PropTypes.string,
    widthC: PropTypes.string,
}
export default BrandButton;