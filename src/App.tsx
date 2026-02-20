import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import RedTeaming from './pages/Products/RedTeaming'
import ModelSecurity from './pages/Products/ModelSecurity'
import CodeScanning from './pages/Products/CodeScanning'
import RuntimeMonitoring from './pages/Products/RuntimeMonitoring'
import SyntheticData from './pages/Products/SyntheticData'
import Consulting from './pages/Products/Consulting'

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/red-teaming" element={<RedTeaming />} />
          <Route path="products/model-security" element={<ModelSecurity />} />
          <Route path="products/code-scanning" element={<CodeScanning />} />
          <Route path="products/runtime-monitoring" element={<RuntimeMonitoring />} />
          <Route path="products/synthetic-data" element={<SyntheticData />} />
          <Route path="products/consulting" element={<Consulting />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}