const FirstComponent = () => <h1>My very first component</h1>;

const NamedComponent = ({name = "Anon"}) => <p>My name is {name}</p>

const App = () => {
    return (<div>
            <FirstComponent />
            <NamedComponent />
            <NamedComponent name="Charlie" />
        </div>)
};

ReactDOM.render(<App />, document.getElementById("root"));