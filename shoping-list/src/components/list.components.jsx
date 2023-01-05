export const List = ({ data, displayDataElementKey }) => {
    return (
        <ul>
            {data.map((element, index) => (
                <li key={index} >{displayDataElementKey(element)}</li>
            ))}
        </ul>
    )
}