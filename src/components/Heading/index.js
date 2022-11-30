const h2Styles = {
    backgroundColor: 'black',
    color: 'lime',
    textAlign: 'center'
}

function Heading(props) {
    return (
        <h1 style={h2Styles}>{props.basliq}</h1>
    )
}

export default Heading;
