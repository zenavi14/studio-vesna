import Layout from '../components/Layout'
import ContactCard from '../components/ContactCard'
import MapCard from '../components/MapCard'

export default function Contact() {
	return (
		<Layout className="container">
			<div className='row'>
				<div className="col-sm-3">
					<ContactCard />
				</div>

				<div className='col-sm-9'>
					<MapCard />
				</div>
			</div>
		</Layout>
	)
}

