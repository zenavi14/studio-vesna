import { GoLocation } from 'react-icons/go';
import { AiOutlinePhone, AiOutlineMail, AiOutlineFieldTime } from 'react-icons/ai';

export default function ContactCard() {
    return (
        <div class="card text-white contact-card">
            <div class="h-50 d-inline-block">
                <img className="contact-img" src="contact-bg.png" />
            </div>
            <div class="h-50 d-inline-block p-4 opacity-50">
                <h2>Odpiralni čas</h2>
                <ul>
                    <li>
                        <AiOutlineFieldTime size={22} /> pon-pet po dogovoru
                    </li>
                </ul>
                <h2>Kontakt</h2>
                <ul>
                    <li>
                        <GoLocation size={22} /> Jalnova cesta 13, 4240 Radovljica
                    </li>
                    <li>
                        <AiOutlinePhone size={22} /> +38641273523
                    </li>
                    <li>
                        <AiOutlineMail size={22} /> malensek.vesna@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    );
}
