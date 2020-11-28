import React, { useState } from 'react'
import LandingPage from './landing-page'
import CategoryTabs from './category-tabs'

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0)

  switch (currentPage) {
    case 0:
      return (
        <LandingPage
          onContinue={() => {
            setCurrentPage(1)
          }}
        />
      )
    case 1:
      return <CategoryTabs />
    default:
      return <div>App.</div>
  }
}

export default App