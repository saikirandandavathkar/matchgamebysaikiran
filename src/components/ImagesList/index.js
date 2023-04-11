import './index.css'

const ImagesList = props => {
  const {eachImgDetails, updatedScore} = props

  const onClickImg = () => updatedScore(eachImgDetails.thumbnailUrl)

  return (
    <li className="listContainer">
      <button type="button" className="btn" onClick={onClickImg}>
        <img
          src={eachImgDetails.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img"
        />
      </button>
    </li>
  )
}

export default ImagesList
