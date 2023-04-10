import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="landingPageTextArea">
        <h1>Dobrodošli</h1>
        <p>
          Smo salon z večletnimi izkušnjami na področju lepote in sprostitve.
          Prepustite se našim strokovnjakom in uživajte v vrhunskih storitvah.
        </p>
        <div class="d-flex justify-content-center py-3">
          <button className="call-to-action-btn">Preberi več</button>
        </div>
      </div>
    </Layout>
  )
}
