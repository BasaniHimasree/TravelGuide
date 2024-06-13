import {Component} from 'react'
import Loader from 'react-loader-spinner'
import EachTrip from '../EachTrip'
import './index.css'

class TravelGuide extends Component {
  state = {travelData: [], isLoading: true}

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)

    const updatedData = [
      data.packages.map(eachItem => ({
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        name: eachItem.name,
        description: eachItem.description,
      })),
    ]
    this.setState({travelData: updatedData, isLoading: false})
  }

  render() {
    const {travelData, isLoading} = this.state
    return (
      <div className="container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          travelData.map(eachItem => (
            <EachTrip tripDetails={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default TravelGuide
