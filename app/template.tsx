'use client'

import Header from './components/Header'
import Footer from './components/Footer'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </>
  )
}
