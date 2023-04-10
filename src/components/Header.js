import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<div className="header">
			<header class="row align-items-center py-2">

				<div className='col-sm'>
					<span class="logo">Studio Vesna</span>
				</div>

				<div className="col-sm d-flex justify-content-center">
					<ul className="nav nav-pills">
						<li className="nav-item"><a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`} aria-current="page">Domov</a></li>
						<li className="nav-item"><a href="/contact" className={`nav-link ${currentPath === '/contact' ? 'active' : ''}`} >Kontakt</a></li>
						<li className="nav-item"><a href="/gallery" className={`nav-link ${currentPath === '/gallery' ? 'active' : ''}`} >Galerija</a></li>
						<li className="nav-item"><a href="/services" className={`nav-link ${currentPath === '/services' ? 'active' : ''}`} >Storitve</a></li>
					</ul>
				</div>

				<div className="col-sm"></div>

			</header>
		</div>
	)
}


