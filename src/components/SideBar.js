import React, { Component } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import axios from "axios";
import { API_URL } from "../utils/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils,faCoffee,faCheese } from "@fortawesome/free-solid-svg-icons";


const MenuIcons = ({MenuNames}) => {
if (MenuNames === "Makanan")  return  <FontAwesomeIcon icon={faUtensils} className='mr-2' />
if (MenuNames === "Minuman")  return  <FontAwesomeIcon icon={faCoffee}  />
if (MenuNames === "Cemilan")  return  <FontAwesomeIcon icon={faCheese} className='mr-2' />

return  <FontAwesomeIcon icon={faCheese} className='mr-2' />
}

export default class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
    }
  }

  componentDidMount() {
    axios.get(API_URL + "categories")
      .then(res => {
        console.log("RESPONSE:", res);
        const categories = res.data;
        this.setState({ categories });
      })
  }



  render() {
    // console.log(this.state.categories);

    const { categories } = this.state
    const {changeCategory,chooseCategory} = this.props
    return (
      <Col md={2} mt="2">
        <h5> <strong>Daftar Kategori </strong> </h5>
        <hr />
        <ListGroup>
          {categories && categories.map((category) => (
            <ListGroup.Item key={category.id} onClick={ () => changeCategory(category.nama)} 
            className={chooseCategory === category.nama && "category-active"}
            style={{cursor:'pointer'}}
            >
              <h5>
                <MenuIcons MenuNames={category.nama} /> {category.nama}
              </h5>
            </ListGroup.Item>

          ))}

        </ListGroup>
      </Col>
    )
  }
}
