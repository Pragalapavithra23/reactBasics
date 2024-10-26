import ListGroup from './components/ListGroup';
import Alert from './components/Alert';

function App() {
    // let items = ["New York", "San francisco", "Japan", "Italy", "Thailand"];
    // const handleSelectItem = (item: string) => {
    //     console.log(item);
    // }
    // return (
    //     <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>
    // );
    return (
        <div>
            <Alert><strong>Holy guacamole!</strong> Alert is working!</Alert>
        </div>
    );
}

export default App;