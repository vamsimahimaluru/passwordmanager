import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ListContainer from '../ListContainer'
import './index.css'

// const initialContactList = [
//   {
//     id: uuidv4(),
//     website: 'youtube',
//     userName: 'vamsi',
//     password: '123556',
//   },
//   {
//     id: uuidv4(),
//     website: 'youtube',
//     userName: 'harsi',
//     password: '123556',
//   },
// ]

class FirstPage extends Component {
  state = {
    showPassword: false,
    websiteName: '',
    userName: '',
    password: '',
    listContainer: [],
    searchInput: '',
    count: 0,
  }

  onClickCount = () => {
    const {count} = this.state
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state

    const newList = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
    }
    this.setState(prevState => ({
      listContainer: [...prevState.listContainer, newList],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  deleteList = id => {
    const {listContainer, count} = this.state
    const filteredList = listContainer.filter(each => each.id !== id)
    this.setState({listContainer: filteredList})
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onChangeWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckBox = () => {
    const {showPassword} = this.state
    const password = showPassword
    if (password === true) {
      password.type = 'text'
    } else {
      password.type = 'password'
    }
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      listContainer,
      websiteName,
      userName,
      password,
      searchInput,
      count,
    } = this.state
    return (
      <div className="main-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="form-app-container">
          <div className="form-container">
            <form className="form" onSubmit={this.onSubmitForm}>
              <h1 className="heading">Add New Password</h1>
              <div className="website">
                <img
                  className="website-logo"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                />
                <input
                  className="input-website"
                  placeholder="Enter Website"
                  value={websiteName}
                  type="text"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="website">
                <img
                  className="website-logo"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  value={userName}
                  className="input-website"
                  placeholder="Enter Username"
                  type="text"
                  onChange={this.onChangeUserName}
                />
              </div>

              <div className="website">
                <img
                  className="website-logo"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  value={password}
                  className="input-website"
                  placeholder="Enter Password"
                  type="password"
                  onChange={this.onChangePassword}
                />
              </div>
              <button
                className="add-btn"
                type="submit"
                onClick={this.onClickCount}
              >
                Add
              </button>
            </form>
            <img
              className="password-manager-logo"
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            />
          </div>
        </div>

        <div className="form-app-container">
          <div className="pagetwo">
            <div className="pagetwo-count">
              <h1 className="heading-password">Your Passwords</h1>
              <p className="pera-password">{count}</p>
            </div>

            <div className="website-pagetwo">
              <img
                className="search-logo"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
              />
              <input
                value={websiteName}
                className="search-website"
                placeholder="Enter Website"
                type="Search"
                onChange={this.onSearch}
              />
            </div>
          </div>
          <hr />

          <div>
            <div className="checkbox-container">
              <input
                value={userName}
                className="checkbox-input"
                type="checkbox"
                onClick={this.onClickCheckBox}
              />
              <label htmlFor="password" className="show-password">
                Show passwords
              </label>
            </div>
            <ul className="list-type">
              {listContainer.map(eachContent => (
                <ListContainer
                  details={eachContent}
                  key={eachContent.id}
                  deleteList={this.deleteList}
                />
              ))}
            </ul>
            <br />
            <div className="password">
              {count === 0 ? (
                <img
                  alt="no passwords"
                  className="no-paasword"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                />
              ) : null}
              <br />
              <p>No Passwords</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FirstPage
