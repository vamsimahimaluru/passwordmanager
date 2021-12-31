import './index.css'

const ListContainer = props => {
  const {details, deleteList} = props
  const {websiteName, userName, id} = details
  const onDelete = () => {
    deleteList(id)
  }

  return (
    <li>
      <div className="app-container">
        <div className="list-container">
          <h2 className="initial">v</h2>
          <div className="list-container-list">
            <p>{websiteName}</p>
            <p>{userName}</p>
            <img
              className="starts"
              alt="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            />
          </div>
          <button
            className="button"
            type="button"
            testid="delete"
            onClick={onDelete}
          >
            <img
              className="delete"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default ListContainer
