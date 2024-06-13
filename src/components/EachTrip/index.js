import './index.css'

const EachTrip = props => {
  const {tripDetails} = props
  const {imageUrl, name, description} = tripDetails

  return (
    <li className="list-item">
      <img src={imageUrl} alt={name} className="trip-image" />
      <h1 className="heading">{name}</h1>
      <p className="paragraph">{description}</p>
    </li>
  )
}

export default EachTrip
