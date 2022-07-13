import React, { Fragment } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <Fragment>
      <Main />
      <Row rowID='1' title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row rowID='2' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID='3' title='UpComing' fetchURL={requests.requestUpcoming} />
      <Row rowID='4' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
    </Fragment>
  )
}

export default Home