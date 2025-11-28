import { BrowserRouter, Routes, Route, useMatch } from 'react-router-dom'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Home from './assets/peges/Home'
import Task from './assets/peges/Task'

function AppLayout() {
  let title = "Homework #02"

  const match = useMatch("/task/:id")
  if (match) {
    const id = Number(match.params.id)
    title = `Task #${id}`;
  }

  return (
    <>
      <Header title={title} />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:id" element={<Task />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
