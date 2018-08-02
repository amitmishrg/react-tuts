import React, { Component } from 'react';
import Header from '../../components/header/index';
import PropTypes from 'prop-types';
import './index.scss';

class List extends Component {
  delete(key) {
    this.props.delete(key);
  }

  render() {
    let items = this.props.items;
    let lists =
      items &&
      items.map((item) => {
        return (
          <section className="cards card1" key={item.key}>
            <Header name={item && item.todo} />
            <div className="intraction">
              <div className="one" />
              <div className="two" />
            </div>
            <div className="btn-wrapper">
              <i
                onClick={() => this.delete(item.key)}
                className="fa fa-trash"
              />
            </div>
          </section>
        );
      });
    return <React.Fragment>{lists}</React.Fragment>;
  }
}

List.propTypes = {
  items: PropTypes.array,
  delete: PropTypes.func
};
export default List;
