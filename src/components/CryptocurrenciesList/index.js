import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCurrencyHeader = () => {
    ;<div>
      <div className="header-container">
        <p className="coin-type">Coin Type</p>
        <div className="usd-euro-container">
          <p className="usd">USD</p>
          <p className="usd">EURO</p>
        </div>
      </div>
    </div>
  }

  renderCryptocurrencyValues = () => {
    const {cryptocurrencyData} = this.props

    return (
      <div className="cryptocurrency-list-container">
        {this.renderCurrencyHeader()}
        <ul className="currency-list">
          {cryptocurrencyData.map(eachData => (
            <CryptocurrencyItem key={eachData.id} currencyDetails={eachData} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        {this.renderCryptocurrencyValues()}
      </div>
    )
  }
}
export default CryptocurrenciesList
