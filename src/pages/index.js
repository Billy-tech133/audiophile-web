import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Productmodal from "../components/Productmodal"
import Speakersection from "../components/Speakersection"
import AddReview from "../components/AddReview"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Productmodal />
      <Speakersection />
      <AddReview />
    </Layout>
  )
}
