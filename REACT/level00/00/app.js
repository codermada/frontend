const e = React.createElement;

const ListItem = props => {
    return (e("li", {className: 'list-item', onClick: props.onDelete}, props.title));
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Hello World', 'Hello World', 'Hello World']
        };
    }
    addItem() {
        this.setState({items: [...this.state.items, 'Hello World']});
    }
    deleteItem(index) {
        const newItems = [...this.state.items];
        newItems.splice(index, 1);
        this.setState({items: newItems});
    }
    render() {
        return (e("ul", null, [this.state.items.map((item, index) => e(ListItem, {title: item, key: index, onDelete: this.deleteItem.bind(this, index)})),
            e('button', {key: 'add-button', onClick: this.addItem.bind(this), className: 'add-button'}, 'Add Item' )
        ]));
    }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(e(List));

ReactDOM.render(e(List), document.getElementById('root'));