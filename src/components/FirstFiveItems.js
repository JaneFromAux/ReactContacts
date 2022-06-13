const FirstFiveItems = (props) => {
    return (
        <div className="contactCard">
            <img src={props.pictureUrl} alt={props.name} />
            <h3>{props.name}</h3>
            <h3>{props.popularity}</h3>
        </div>
    );
}

export default FirstFiveItems;