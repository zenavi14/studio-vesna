import { useRouter } from 'next/router';
import { AiOutlinePhone,AiOutlineFacebook } from 'react-icons/ai';


export default function Header() {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<div className="header">
			<header class="row align-items-center py-2">

				<div className='col-sm'>
					<span class="logo v-font">Studio Vesna</span>
				</div>

				<div className="col-sm d-flex justify-content-center">
					<ul className="nav nav-pills">
						<li className="nav-item"><a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`} aria-current="page">Domov</a></li>
						<li className="nav-item"><a href="/services" className={`nav-link ${currentPath === '/services' ? 'active' : ''}`} >Storitve</a></li>
						<li className="nav-item"><a href="/contact" className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`} >Kontakt</a></li>
						{/* <li className="nav-item"><a href="/gallery" className={`nav-link ${currentPath === '/gallery' ? 'active' : ''}`} >Galerija</a></li> */}
					</ul>
				</div>

				<div className="col-sm d-flex justify-content-end">
					<span className="white-text header-right">
						<AiOutlinePhone size={28} />+38641273523
					</span>
					<span className="white-text header-right">
						<AiOutlineFacebook size={28} />
					</span>
				</div>

			</header>
		</div>
	)
}


