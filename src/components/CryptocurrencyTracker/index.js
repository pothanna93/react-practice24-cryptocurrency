import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencyData()
  }

  getCryptocurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currencyData = await response.json()
    const currencyObject = currencyData.map(eachItem => ({
      id: eachItem.id,
      currencyLogoUrl: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({cryptocurrencyData: currencyObject, isLoading: false})
  }

  renderCryptocurrencyList = () => {
    const {cryptocurrencyData} = this.state

    return <CryptocurrenciesList cryptocurrencyData={cryptocurrencyData} />
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrencyList()
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
