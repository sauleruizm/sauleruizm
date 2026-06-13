import { Layout } from './components/Layout/Layout'
import { HomePage } from './features/home/HomePage'
import './styles/themes.css'
import './styles/global.css'

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  )
}

export default App
