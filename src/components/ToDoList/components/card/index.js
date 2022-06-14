const Card = ({data}) => {
    return (
        <>
            {data.map((item, index) => (
                <h1 key={index}>{index + 1} - {item}</h1>
            ))}
        </>
    );
}

export default Card;