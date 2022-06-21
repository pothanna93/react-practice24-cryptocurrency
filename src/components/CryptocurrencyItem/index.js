import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props

  const {currencyLogoUrl, currencyName, usdValue, euroValue} = currencyDetails

  return (
    <li className="currency-item">
      <div className="currency-item-container">
        <img
          src={currencyLogoUrl}
          alt={currencyName}
          className="currency-logo"
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="currency">{usdValue}</p>
        <p className="currency">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
