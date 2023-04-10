import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router';

export default function Layout({ children }) {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<div className="conatiner mainContent">
			<Header />
			<div className={`min-vh-100 common-background ${currentPath === '/' ? 'bg-image' : ''}`}>
				<main className="flex-grow-1 p-3">{children}</main>
			</div>
			<Footer/>
		</div>
	)
}
