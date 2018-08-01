import React, { Component } from "react";
import Card from "../../components/card/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, data: [] };
    this.addCard = this.addCard.bind(this);
  }

  save(event, id) {
    let card = event.target.closest(".cards");
    let name = card.querySelector("h4").innerText;
    let desc = card.querySelector("p").innerText;
    if (name || desc) {
      let data = {
        id: card.id,
        name: name,
        desc: desc
      };
      const cardData = this.state.data.filter(cardInfo => {
        if (cardInfo.id === card.id) return cardInfo;
      });
      if (cardData.length) {
        cardData[0].desc = desc;
        cardData[0].name = name;
        this.setState(prevState => ({ data: cardData }));
      } else {
        this.setState(prevState => ({ data: [...prevState.data, data] }));
      }
    }
  }

  delete(event, id) {
    let card = event.target.closest(".cards");
    const remainderData = this.state.data.filter(cardInfo => {
      if (cardInfo.id !== card.id) return cardInfo;
    });
    this.setState({ count: this.state.count - 1, data: remainderData });
  }

  addCard() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    let renderCard = [];
    for (let i = 0; i < this.state.count; i++) {
      const cardData = this.state.data.filter(cardInfo => {
        if (cardInfo.id === i) return cardInfo;
      });
      renderCard.push(
        <Card
          key={i}
          id={i}
          data={cardData}
          delete={this.delete.bind(this)}
          save={this.save.bind(this)}
        />
      );
    }
    return (
      <main>
        <div className="heading-wrapper">Add your schedule</div>
        <div className="card-wrapper">{renderCard}</div>
        <button className="add-btn" onClick={this.addCard}>
          <i className="fa fa-plus" />
        </button>
      </main>
    );
  }
}

export default App;
