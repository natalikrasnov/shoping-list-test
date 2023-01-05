import strings from "../utils/strings.json";

export const ErrorAlert = ({ message, isShow, closeAlert }) => {

    return (
        <div className={"modal-dialog-centered modal fade " + (isShow ? "show" : "")}
            id="errorModal"
            onClick={closeAlert}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1
                            className="modal-title fs-5"
                        >
                            {strings.error}
                        </h1>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeAlert}
                        >
                            {strings.close}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}