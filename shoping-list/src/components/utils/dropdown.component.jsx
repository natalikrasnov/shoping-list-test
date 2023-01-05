export const DropDown = ({ placeholder, data, activeElement, onSelect }) => {
    return (
        <div className="dropdown">
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
            >
                {placeholder}
            </button>
            <ul className="dropdown-menu">
                {data && data.map((element) => (
                    <li key={element}>
                        <button
                            className={"dropdown-item " + (element === activeElement ? "active" : "")}
                            type="button"
                            onClick={() => onSelect(element)}
                        >
                            {element}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}