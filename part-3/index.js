const Person = ({name, age, hobbies}) => {
    const msg = (age >= 18) ? <h3>Please go vote</h3> : null
    let truncName = name.slice(0,8);
    if (name.length > 8) {
        truncName = `${name.slice(0,6)}...`
    }
    let hobbyList;
    if (hobbies) {
        hobbyList = (<div>
            <h3>Hobbies</h3>
            <ul>{hobbies.map((h) => <li>{h}</li>)}</ul>
            </div>)
    }
    
    return (<div>
        <h2>{truncName}</h2>
        <p>Learn some information about this person</p>
        <p>Age: {age}</p>
        {msg}
        {hobbyList}
    </div>)
}

const App = () => {
    return (<div>
        <Person name="Harrowhark" age={19} hobbies={["Looming"]}/>
        <Person name="Isaac" age={14} />
        <Person name="Abigail" age={37} />
        <Person name="Coronabeth" age={21} hobbies={["Being pretty","Politicking"]} />
    </div>)
}

ReactDOM.render(<App />, document.getElementById("root"));