import React from 'react'
import {Grid,Row,Col} from 'react-bootstrap'
import {PageHeader} from 'react-bootstrap';

import CustomNavBar from '../customNavBar/CustomNavBar';
import Person from '../assests/pexels-photo-24289-1 Cropped.jpg'
const news = ()=>{
    return(
        <React.Fragment>
            <div>
                    <Grid style={{ width:'100%'}}>
                        <Row>
                            <Col md={15} >
                                    <CustomNavBar
                                        person = {Person}
                                    />
                            </Col>
                        </Row>
                    </Grid>
            </div>
            
            <PageHeader>
                News
            </PageHeader>;

        </React.Fragment>
    )
}

export default news;