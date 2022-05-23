import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"

const notFound = () => {
    return (
        <Layout>
            <Seo title="Not Found" />
            <h1 className='text-3xl mb-4'>404</h1>
            <p>Page you are looking was not found.</p>
        </Layout>
    )
}

export default notFound