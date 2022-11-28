const btnStyles = {
    backgroundColor: 'black',
    color: 'lime',
    textAlign: 'center',
    border: '1px solid lime',
    borderRadius: 4,
    cursor: 'pointer'
}

function Button() {
    return (
        <button
            onClick={() => {
                alert('test')
            }}
            style={btnStyles}
        >click me</button>
    )
}

export default Button;
