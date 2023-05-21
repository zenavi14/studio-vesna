import Layout from '../components/Layout'
import ContactCard from '../components/ContactCard'
import MapCard from '../components/MapCard'

export default function Contact() {
	return (
		<Layout className="container">
			<h3 style={{ fontSize: '64px' }} className="text-center v-font">Neki neki</h3>
			<div className='row'>
				<div className="col-sm-3">
					<ContactCard />
				</div>

				<div className='col-sm-9'>
					<div className="row">
						<div className='col-sm-6'>
							<img src="salon.jpg" alt="Image" width="100%" height="100%"/>
						</div>
						<div className='col-sm-6'>
							<MapCard />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

