
import React from 'react';
import {Well,Row,Col,PageHeader} from 'react-bootstrap';


const footer = (props) =>{
    return (
        <React.Fragment>
            <Row>
                <Col xs={18} md={12}>
                    <div>
                        <Well  bsSize="small"><PageHeader><small>Coptright @ 2019!</small></PageHeader></Well>
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default footer;

