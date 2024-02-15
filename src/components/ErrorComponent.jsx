
const ErrorComponent = ({ e }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", flex: 1, justifyContent: "center", alignItems: "center", color: "red" }}>
            <p><em><small>
                Error occurred: {e}
            </small></em></p>
            <p><small>
                please reload
            </small></p>
        </div>
    )
}

export default ErrorComponent;