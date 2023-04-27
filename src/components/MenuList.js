import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function MenuList() {

    const cards = [
        {
            id: 1,
            title: 'Card 1',
            items: [
                { id: 1, name: 'Item 1', price: 10 },
                { id: 2, name: 'Item 2', price: 20 },
                { id: 3, name: 'Item 3', price: 30 },
            ],
        },
        {
            id: 2,
            title: 'Card 2',
            items: [
                { id: 4, name: 'Item 4', price: 40 },
                { id: 5, name: 'Item 5', price: 50 },
                { id: 6, name: 'Item 6', price: 60 },
            ],
        },
        {
            id: 3,
            title: 'Card 3',
            items: [
                { id: 7, name: 'Item 7', price: 70 },
                { id: 8, name: 'Item 8', price: 80 },
                { id: 9, name: 'Item 9', price: 90 },
            ],
        },
        {
            id: 4,
            title: 'Card 4',
            items: [
                { id: 10, name: 'Item 10', price: 100 },
                { id: 11, name: 'Item 11', price: 110 },
                { id: 12, name: 'Item 12', price: 120 },
            ],
        },
        {
            id: 5,
            title: 'Card 5',
            items: [
                { id: 13, name: 'Item 13', price: 130 },
                { id: 14, name: 'Item 14', price: 140 },
                { id: 15, name: 'Item 15', price: 150 },
            ],
        },
        {
            id: 6,
            title: 'Card 6',
            items: [
                { id: 16, name: 'Item 16', price: 160 },
                { id: 17, name: 'Item 17', price: 170 },
                { id: 18, name: 'Item 18', price: 180 },
            ],
        },
        {
            id: 7,
            title: 'Card 7',
            items: [
                { id: 19, name: 'Item 19', price: 190 },
                { id: 20, name: 'Item 20', price: 200 },
            ],
        },
    ];

    // Determine the maximum number of items across all cards
    const maxItemCount = Math.max(...cards.map((card) => card.items.length));

    // Set the min-height of each card to match the max number of items
    const cardStyle = { minHeight: `${maxItemCount * 50}px` };


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {cards.map((card) => (
                <div key={card.id} className="col">
                    <Card style={cardStyle}>
                        <Card.Header>{card.title}</Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                {card.items.map((item) => (
                                    <ListGroupItem key={item.id} className="d-flex justify-content-between align-items-center">
                                        <span>{item.name}</span>
                                        <span>${item.price}</span>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default MenuList;
