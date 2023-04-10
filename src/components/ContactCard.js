export default function ContactCard() {
    return (
        <div class="card text-white contact-card">
            <div class="h-50 d-inline-block">
                <img className="contact-img" src="contact-bg.png" />
            </div>
            <div class="h-50 d-inline-block p-4 opacity-50">
            <h2>Odpiralni čas</h2>
                <ul>
                    <li>pon-pet: Po dogovoru.</li>
                </ul>
                <h2>Kontakt</h2>
                <ul>
                    <li>Naslov: Jalnova cesta 13, 4240 Radovljica</li>
                    <li>Telefon: 041 273 523</li>
                    <li>Email: malensek.vesna@gmail.com</li>
                </ul>
            </div>
        </div>

    );
}
