class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  changeCurrency = (e) => {
    this.setState({
      currency: e.target.value
    })
  }

  render() {
    let {currency} = this.state;
   
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin Rate for {this.props.bpi[currency].description} : <span class="badge badge-primary">{this.props.bpi[currency].code}</span>
            <strong>{this.props.bpi[currency].rate}</strong>
          </li>
        </ul>
        <br/>
        <select onChange={this.changeCurrency} className="form-control">
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
    )
  }
}

export default Prices;