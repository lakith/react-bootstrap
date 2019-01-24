import React,{Component} from 'react';
import {Grid,Row,Col,Image,Panel,PageHeader} from 'react-bootstrap'

import './Home.css';
import CustomNavBar from './../customNavBar/CustomNavBar'
import Person from './../assests/pexels-photo-24289-1 Cropped.jpg'
import P1 from '../assests/pexels-photo-91224.jpeg';
import P2 from '../assests/pexels-photo-733872 (1).jpeg';
import P3 from '../assests/pexels-photo-1239291 (1).jpeg';
import Footer from '../Footer/footer'


class Home extends Component {

    render() { 
        return ( 
            <div className="Home">
                <Grid style={{ width:'100%'}}>
                    <Row>
                        <Col md={15} >
                                <CustomNavBar
                                    person = {Person}
                                />
                        </Col>
                    </Row>

                    <Row style={{marginBottom:'30px'}}>
                        <Col xs={6} md={4}>
                           <center> <Image src={P1} circle style={{width:'200px',height:'200px'}} /> </center>
                        </Col>
                        <Col xs={6} md={4}>
                          <center><Image src={P2} circle style={{width:'200px',height:'200px'}} responsive/> </center>
                        </Col>
                        <Col xs={6} md={4}>
                          <center><Image src={P3} circle style={{width:'200px',height:'200px'}} responsive/> </center>
                        </Col>
                    </Row>

                    <Row style={{marginBottom:'30px'}}>
                        <Col xs={10} md={8}>
                        <Panel >
                            <Panel.Body>
                            <PageHeader>
                                Travel Life
                            </PageHeader>;
                            Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Use what you see, don't plan it. Imagination is the key to painting. We don't have to be concerned about it. We just have to let it fall where it will. Let's put some happy trees and bushes back in here. A fan brush is a fantastic piece of equipment. Use it. Make friends with it.In life you need colors. We'll put some happy little leaves here and there. Maybe there's a happy little Evergreen that lives here. There we are. You better get your coat out, this is going to be a cold painting. It's beautiful - and we haven't even done anything to it yet.Talk to trees, look at the birds. Whatever it takes. Let's put some happy little clouds in our world. Making all those little fluffies that live in the clouds. Fluff that up. Maybe, just to play a little, we'll put a little tree here. We'll do another happy little painting.Now let's put some happy little clouds in here. Just use the old one inch brush. The only thing worse than yellow snow is green snow.Isn't that fantastic that you can create an almighty tree that fast? This is your world. Maybe there's a happy little waterfall happening over here. Automatically, all of these beautiful, beautiful things will happen. Pretend you're water. Just floating without any effort. Having a good day.We'll make some happy little bushes here. Learn when to stop. Don't fight it, use what happens. So often we avoid running water, and running water is a lot of fun. Be careful. You can always add more - but you can't take it away.We'll lay all these little funky little things in there. Take your time. Speed will come later. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Painting should do one thing. It should put happiness in your heart. If it's not what you want - stop and change it. Don't just keep going and expect it will get better. Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Use what you see, don't plan it. Imagination is the key to painting. We don't have to be concerned about it. We just have to let it fall where it will. Let's put some happy trees and bushes back in here. A fan brush is a fantastic piece of equipment. Use it. Make friends with it.In life you need colors. We'll put some happy little leaves here and there. Maybe there's a happy little Evergreen that lives here. There we are. You better get your coat out, this is going to be a cold painting. It's beautiful - and we haven't even done anything to it yet.Talk to trees, look at the birds. Whatever it takes. Let's put some happy little clouds in our world. Making all those little fluffies that live in the clouds. Fluff that up. Maybe, just to play a little, we'll put a little tree here. We'll do another happy little painting.Now let's put some happy little clouds in here. Just use the old one inch brush. The only thing worse than yellow snow is green snow.Isn't that fantastic that you can create an almighty tree that fast? This is your world. Maybe there's a happy little waterfall happening over here. Automatically, all of these beautiful, beautiful things will happen. Pretend you're water. Just floating without any effort. Having a good day.We'll make some happy little bushes here. Learn when to stop. Don't fight it, use what happy.
                            </Panel.Body>
                        </Panel>
                        </Col>
                        <Col xs={8} md={4}>
                        <Panel >
                            <Panel.Body>
                            <PageHeader>
                                Our Agents
                            </PageHeader>;
                            Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Use what you see, don't plan it. Imagination is the key to painting. We don't have to be concerned about it. We just have to let it fall where it will. Let's put some happy trees and bushes back in here. A fan brush is a fantastic piece of equipment. Use it. Make friends with it.In life you need colors. We'll put some happy little leaves here and there. Maybe there's a happy little Evergreen that lives here. There we are. You better get your coat out, this is going to be a cold painting. It's beautiful - and we haven't even done anything to it yet.Talk to trees, look at the birds. Whatever it takes. Let's put some happy little clouds in our world. Making all those little fluffies that live in the clouds. Fluff that up. Maybe, just to play a little, we'll put a little tree here. We'll do another happy little painting.Now let's put some happy little clouds in here. Just use the old one inch brush. The only thing worse than yellow snow is green snow.Isn't that fantastic that you can create an almighty tree that fast? This is your world. Maybe there's a happy little waterfall happening over here. Automatically, all of these beautiful, beautiful things will happen. Pretend you're water. Just floating without any effort. Having a good day.We'll make some happy little bushes here. Learn when to stop. Don't fight it, use what happens. So often we avoid running water, and running water is a lot of fun. Be careful. You can always add more - but you can't take it away. 
                            </Panel.Body>
                        </Panel>
                        </Col>
                    </Row>
                    <Footer />
                </Grid>
            </div>
        )
    }
}
 
export default Home;