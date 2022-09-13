import {FaStar} from '@react-icons/all-files/fa/FaStar'

export default function StarsDisplayer(props) {
    const {size, number, color, id} = props;
    var stars = [];

    for (let index = 0; index < number; index++) {

        stars.push(<FaStar key={"star-" + number + id} size={size || 10} color={color || "yellow"}/>);

    }

    return (
        <div>{stars}</div>
    )
}