import './index.css'

const TabsList = props => {
  const {tabDetails, updatedTab, isItActivated} = props

  const onClickTabButton = () => {
    updatedTab(tabDetails.tabId)
  }

  const style = isItActivated ? 'text-style' : null

  return (
    <li>
      <button type="button" className="btn2" onClick={onClickTabButton}>
        <h1 className={`tab-heading ${style}`}> {tabDetails.displayText} </h1>
      </button>
    </li>
  )
}

export default TabsList
