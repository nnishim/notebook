import './App.css';
import Record from './Components/Record/Record'

import React, { Component } from 'react'
import Price from './Components/Price/Price';

export default class App extends Component {
  state = {
    records: [{ name: "Книга", price: 0, id: 1, count: 1 }],
    name: "",
    price: 0,
    total: 0
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const records = [...this.state.records];

    let total = this.state.total;
    let price = parseInt(this.state.price)
    total += price;

    const index = this.state.records.findIndex(record => record.name === this.state.name);
    
    if (index !== -1) {
      records[index].count++
    } else {
      records.push({
        name: this.state.name,
        price,
        id: Date.now(),
        count: 1
      });
    }


    this.setState({
      records,
      total,
      price: "",
      name: "",
    });
  };

  deleteRecord = (id) => {
    const records = this.state.records.filter(record => record.id !== id);
    this.setState({records});
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} className="form">
          <div className="input__items">
            <input
              value={this.state.name}
              type="text"
              name='name'
              onChange={this.changeHandler}
              placeholder='Наименование товара'
              className='input__item'
            />
            <input
              value={this.state.price}
              type="number"
              name="price"
              onChange={this.changeHandler}
              placeholder='Цена'
              className='input__item'
            />
            <span>СОМ</span>
            <button type="submit" className='submit__btn'>Добавить</button>
          </div>
          {this.state.records.map((record, index) => {
            return <Record key={record.id} value={record.name} price={record.price} count={record.count} remove={() => this.deleteRecord(record.id)}/>;
          })}
          <Price price={this.state.total}/>
        </form>
      </div>
    );
  }
}
