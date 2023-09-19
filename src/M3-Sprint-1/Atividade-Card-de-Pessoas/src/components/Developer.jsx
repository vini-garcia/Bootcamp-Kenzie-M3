export const DevCard = ({ name, age, country}) => {
    return(
        <div>
            <span>
                <h1>Dev: {name}</h1>
                <p>Idade: {age}</p>
                <p>País: {country}</p>
            </span>
        </div>
    )
}