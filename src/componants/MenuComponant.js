import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button ,Card ,CardBody ,CardText , CardTitle ,Media,CardSubtitle}  from 'reactstrap';


class Menu extends Component {

    constructor(props){
        super(props);
        this.state= {
            dishes:[{
                id: 0,
                name:'Uthappizza',
                image: 'assets/images/uthappizza.png',
                category: 'mains',
                label:'Hot',
                price:'4.99',
                description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
             {
                id: 1,
                name:'Zucchipakoda',
                image: 'assets/images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
             {
                id: 2,
                name:'Vadonut',
                image: 'assets/images/vadonut.png',
                category: 'appetizer',
                label:'New',
                price:'1.99',
                description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
             {
                id: 3,
                name:'ElaiCheese Cake',
                image: 'assets/images/elaicheesecake.png',
                category: 'dessert',
                label:'',
                price:'2.99',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
             ]
        };
    }
    render(){
        const menu= this.state.dishes.map((dish)=>{
            return (<Card
                outline
                style={{
                  width: '18rem'
                }}
              >
                <img
                  alt="Sample"
                  src="https://picsum.photos/300/200"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Card title
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                  </CardText>
                  <Button>
                    Button
                  </Button>
                </CardBody>
              </Card>

            )
        });
        return (
            <div className="col d-flex gap-2">
                  {menu}
            </div>
        );
    }
}

export default Menu;