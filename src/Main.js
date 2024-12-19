import React from 'react'
import Specials from './Specials'
import Testimonials from './Testimonials'
import CTA from './CTA'

const Main = () => {
  return (
    <>
    <section>
        <Specials />
    </section>
    <section>
        <Testimonials />
    </section>
    <section>
        <CTA />
    </section>
    </>
  )
}

export default Main