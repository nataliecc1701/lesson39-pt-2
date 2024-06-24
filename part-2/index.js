const Tweet = ({username, name, date, message}) => {
    return (<div className="tweet">
        <h3><span className="username">{username}</span> <span className="display-name">{name}</span></h3>
        <span className="tweet-date">{date}</span>
        <p className="tweet-body">{message}</p>
    </div>)
}

const App = () => {
    return (<div>
        <Tweet username="ExampleUser1" name="Example" date="2024-02-21" message="Example Tweet 1" />
        <Tweet username="ExampleUser2" name="Sample" date="2024-02-20" message="Another example" />
        <Tweet username="ExampleUser1" name="Example" date="2023-12-03" message="First Post!" />
    </div>)
}

ReactDOM.render(<App />, document.getElementById("root"));