import { Card, ListGroup, ListGroupItem, Form } from 'react-bootstrap';
import { React, useState } from 'react';
import Dialog from './Dialog';

import { AiOutlineCamera } from 'react-icons/ai';

function MenuList() {

    const cards = [
        {
            title: 'Nega rok in nohtov',
            img: 'nail-polish.png',
            items: [
                { name: 'Novi nohti', price: 45 },
                { name: 'Geliranje', price: 39 },
                { name: 'Permanentni lak', price: 28 },
                { name: 'Odstranjevanje per. laka', price: 9 },
                { name: 'Klasična manikura', price: 22 },
                { name: 'Nohti dodatki', price: 5 }
            ],
        },
        {
            title: 'Pedikura',
            img: 'aromatherapy.png',
            items: [
                { name: 'Osnovna pedikura', price: 32 },
                { name: 'Pedikura + per. lak', price: 40 },
                { name: 'Medicinska pedikura', price: 35 },
                { name: 'Otiščanec', price: 5 },
                { name: 'Kurje oko', price: 5 }
            ],
        },
        {
            title: 'Obrvi in trepalnice',
            img: 'make-up.png',
            items: [
                { name: 'Oblikovanje in puljenje obrvi', price: 10 },
                { name: 'Barvanje obrvi', price: 7 },
                { name: 'Oblikovanje z nitko', price: 12 },
                { name: 'Barvanje trepalnic', price: 10 },
                { name: 'Trepalnice - nove', price: 79 },
                { name: 'Trepalnice - refil', price: 45 }
            ],
        },
        {
            title: 'Depilacija',
            img: 'depilation.png',
            items: [
                { name: 'Depilacija podnosnih dlačic', price: 7 },
                { name: 'Depilacija bikini', price: 10 },
                { name: 'Depilacija podpazduh', price: 10 },
                { name: 'Depilacija rok', price: 18 },
                { name: 'Depilacija rok do komolca', price: 12 },
                { name: 'Depilacija nog', price: 24 },
                { name: 'Depilacija nog do kolen', price: 16 },
                { name: 'Brazilska depilacija', price: 25 },
            ],
        },
        {
            title: 'Nega telesa',
            img: 'slim-body.png',
            items: [
                { name: 'Limfna drenaža', price: 16 },
                { name: 'Limfna drenaža + anti. obloga', price: 20 },
                { name: 'Limfna drenaža 10x', price: 120 },
                { name: 'Limfna drenaža + anti. obloga 10x', price: 180 },
                { name: 'Anticelulitni Vacuslim', price: 48 }
            ],
        },
        {
            title: 'Masaža',
            img: 'body-massage.png',
            items: [
                { name: '30 minut', price: 33 },
                { name: '60 minut', price: 46 }
            ],
        },
        {
            title: 'Nega obraza',
            img: 'woman.png',
            items: [
                { name: 'Osvežilna nega obraza', price: 55 },
                { name: 'Prestižna nega', price: 65 }
            ],
        },
        {
            title: 'Solarij',
            img: 'tanning.png',
            items: [
                { name: '1min', price: 0.70 },
                { name: '100min', price: 60 }
            ],
        }
    ];

    // Determine the maximum number of items across all cards
    const maxItemCount = Math.max(...cards.map((card) => card.items.length));

    // Set the min-height of each card to match the max number of items
    const cardStyle = { minHeight: `${maxItemCount * 68}px`, maxHeight: `${maxItemCount * 68}px` };

    const headerStyle = {
        background: 'linear-gradient(to right, #0a0a0a, #1A1B1C)',
        color: '#fff'
    };

    // const iconStyle = {
    //     height: '84px',
    //     width: '84px'
    // }

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCards = cards.filter((card) => {
        const titleMatches = card.title.toLowerCase().includes(searchTerm.toLowerCase());
        const itemMatches = card.items.some(
            (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return titleMatches || itemMatches;
    });

    // const headerStyle = {
    //     background: 'linear-gradient(45deg, #000, #fff)',
    //     clipPath: 'polygon(50% 0%, 85% 25%, 85% 75%, 50% 100%, 15% 75%, 15% 25%)',
    //     color: '#fff',
    //     padding: '20px',
    // };
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <Form.Control
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Iskanje"
                className="search-input"
            />
            {filteredCards.map((card) => (
                <div key={card.title} className="col">
                    <Card style={cardStyle}>
                        <Card.Header style={headerStyle} className="d-flex justify-content-between align-items-center">
                            <h4>{card.title}</h4>
                            <AiOutlineCamera className="cursor-pointer" size={22} onClick={() => setShowLogin(true)} />
                            <Dialog show={showLogin} close={() => setShowLogin(false)} />
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                {card.items.map((item) => (
                                    <ListGroupItem key={item.name} className="d-flex justify-content-between align-items-center">
                                        <span>{item.name}</span>
                                        <span>{item.price} €</span>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex justify-content-center align-items-end">
                                <img src={card.img} alt="Image" className="img-fluid" width="64" height="64" />
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default MenuList;
