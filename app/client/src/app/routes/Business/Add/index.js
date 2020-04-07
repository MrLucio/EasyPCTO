import React from 'react';
import { connect } from 'react-redux';
import { addBusiness as BusinessAction } from "actions/Business";
import { Course as CourseAction } from 'actions/Course';
import { Ateco as AtecoAction } from 'actions/Ateco';
import { Type as TypeAction } from 'actions/Type';
import AlgoliaPlaces from 'algolia-places-react';
import { APP_ID, API_KEY } from 'constants/algoliaPlacesCredentials';
import { BusinessPhoneInput } from 'components/BusinessPhoneInput';
import { BusinessWebsiteInput } from 'components/BusinessWebsiteInput';
import { BusinessNameInput } from 'components/BusinessNameInput';
import { BusinessMailInput } from 'components/BusinessMailInput';
import {
    Grid, Row, Col, Form, FormGroup,
    HelpBlock, ControlLabel, SelectPicker,
    FormControl, Icon, DatePicker, Loader,
    InputNumber, IconButton, Button, Modal
} from 'rsuite';

const rowStyle = { marginTop: 40 }
const footerStyle = {
    padding: '10px 2px',
    borderTop: '1px solid #e5e5e5'
};
const Locale = {
    sunday: 'Do',
    monday: 'Lu',
    tuesday: 'Ma',
    wednesday: 'Me',
    thursday: 'Gi',
    friday: 'Ve',
    saturday: 'Sa',
    ok: 'OK',
    today: 'Oggi',
    yesterday: 'Ieri',
    hours: 'Ore',
    minutes: 'Minuti',
    seconds: 'Secondi'
};

class BusinessAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            formValue: {}
        };
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.show !== this.state.show)
            return true;
        return true;
    }

    close = () => {
        this.setState({ show: false });
    }
    open = (props) => {
        this.setState({ show: true });
    }

    handleSubmit = () => {
        console.log('did someone press me? if so, show yourself');
        console.log(this.state)
        this.props.BusinessAction(this.state.formValue);
    }

    render(){
        return(
            <Grid fluid>
                <Modal backdrop={'true'} show={this.state.show} onHide={this.close}>
                    <Modal.Header>
                        <Modal.Title>Modal Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Qui ci va qualcosa
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close} appearance="primary">
                        Ok
                        </Button>
                        <Button onClick={this.close} appearance="subtle">
                        Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Form
                    fluid
                    onChange={formValue => {
                        this.setState({formValue: {...formValue, address: 1}});
                    }}
                >
                    <Row style={rowStyle}>
                        <Col md={1} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Nome</ControlLabel>
                                <FormControl name='name' accepter={BusinessNameInput} />
                            </FormGroup>
                        </Col>
                        <Col md={2} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Tipo</ControlLabel>
                                <FormControl
                                    name='type'
                                    accepter={SelectPicker}
                                    placeholder='Tipo'
                                    labelKey='name' 
                                    valueKey='id'
                                    data={this.props.types}
                                    onOpen={this.props.TypeAction}
                                    searchable={false}
                                    block
                                    renderMenu={menu => {
                                        if (this.props.types.length === 0) {
                                            return (
                                            <center>
                                                <div style={{ padding: 30 }}>
                                                    <Loader content="Sto caricando" />
                                                </div>
                                            </center>
                                            );
                                        }
                                        return menu;
                                    }}
                                    renderExtraFooter={() => {
                                        return(   
                                            <div style={footerStyle}>
                                                <center>
                                                    <IconButton
                                                        icon={<Icon icon="plus" />}
                                                        placement="left"
                                                        onClick={this.open}
                                                    >
                                                        Crea
                                                    </IconButton>
                                                </center>
                                            </div>
                                        )
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={1} />
                    </Row>
                    <Row style={rowStyle}>
                        <Col md={1} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Indirizzo</ControlLabel>
                                <FormControl
                                    accepter={AlgoliaPlaces}
                                    placeholder='Indirizzo'
                                
                                    options={{
                                        appId: APP_ID,
                                        apiKey: API_KEY,
                                        language: 'it'
                                        // Other options from https://community.algolia.com/places/documentation.html#options
                                    }}
                                
                                    onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => 
                                        console.log('Fired when suggestion selected in the dropdown or hint was validated.')}
                                
                                    onSuggestions={({ rawAnswer, query, suggestions }) => 
                                        console.log('You will receive the array of suggestions that are displayed.')}
                                
                                    onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
                                        console.log('Fired when arrows keys are used to navigate suggestions.')}
                                
                                    onClear={() => 
                                        console.log('Fired when the input is cleared.')}
                                
                                    onLimit={({ message }) => 
                                        console.log('Fired when you reached your current rate limit.')}
                                
                                    onError={({ message }) => 
                                        console.log('')}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={2} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Numero di telefono</ControlLabel>
                                <FormControl name='phone' accepter={BusinessPhoneInput} />
                                <HelpBlock>Facoltativo</HelpBlock>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col md={1} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl name='email' accepter={BusinessMailInput} />
                                <HelpBlock>Facoltativo</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col md={2} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Sito web</ControlLabel>
                                <FormControl name='website' accepter={BusinessWebsiteInput} />
                                <HelpBlock>Facoltativo</HelpBlock>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col md={1} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Numero impiegati</ControlLabel>
                                <FormControl
                                    name='employees_number'
                                    accepter={InputNumber}
                                    min={0}
                                    prefix={<Icon icon="avatar"/>}
                                />
                                <HelpBlock>Facoltativo</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col md={2} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Corso</ControlLabel>
                                <FormControl
                                    name='course'
                                    accepter={SelectPicker}
                                    placeholder='Corso'
                                    labelKey='name' 
                                    valueKey='id'
                                    data={this.props.courses}
                                    onOpen={this.props.CourseAction}
                                    searchable={false}
                                    block
                                    renderMenu={menu => {
                                        if (this.props.courses.length === 0) {
                                            return (
                                            <div style={{ padding: 30 }}>
                                                <center>
                                                    <Loader content="Sto caricando" />
                                                </center>
                                            </div>
                                            );
                                        }
                                        return menu;
                                    }}
                                    renderExtraFooter={() => {
                                        return(   
                                            <div style={footerStyle}>
                                                <center>
                                                    <IconButton
                                                        icon={<Icon icon="plus" />}
                                                        placement="left"
                                                        onClick={this.open}
                                                    >
                                                        Crea
                                                    </IconButton>
                                                </center>
                                            </div>
                                        )
                                    }}
                                />
                                <HelpBlock>Facoltativo</HelpBlock>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col md={1} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Ateco</ControlLabel>
                                <FormControl
                                    name='ateco'
                                    accepter={SelectPicker}
                                    placeholder='Ateco'
                                    labelKey='code' 
                                    valueKey='id'
                                    data={this.props.atecos}
                                    onOpen={this.props.AtecoAction}
                                    searchable={false}
                                    block
                                    renderMenu={menu => {
                                        if (this.props.atecos.length === 0) {
                                            return (
                                            <div style={{ padding: 30 }}>
                                                <center>
                                                    <Loader content="Sto caricando" />
                                                </center>
                                            </div>
                                            );
                                        }
                                        return menu;
                                    }}
                                />
                                <HelpBlock>Facoltativo</HelpBlock>
                            </FormGroup>
                        </Col>
                        <Col md={2} />
                        <Col md={10} >
                            <FormGroup>
                                <ControlLabel>Data accordo</ControlLabel>
                                <FormControl
                                    name='agreement_date'
                                    accepter={DatePicker}
                                    placement='auto'
                                    locale={Locale}
                                    limitEndYear={0}
                                    style={{width: '100%'}}
                                    placeholder="Data accordo"
                                    showWeekNumbers={false}
                                    format={'DD-MM-YYYY'}
                                />
                                <HelpBlock>Facoltativo</HelpBlock>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row style={rowStyle}>
                        <Col md={7} />
                        <Col md={5} >
                            <Button size="lg" onClick={this.handleSubmit} style={{backgroundColor: 'white'}} block>
                                <Icon icon="plus" size="lg" style={{ marginRight: 10, color: "#16c60c" }} />
                                <h5 style={{ display: 'inline-block' }}>Inserisci azienda</h5>
                            </Button>
                        </Col>
                        <Col md={5} >
                        <Button size="lg" style={{ backgroundColor: 'white'}} block>
                                <Icon icon="close" size="lg" style={{ marginRight: 10, color: "#f44336" }} />
                                <h5 style={{ display: 'inline-block' }}>Cancella dati inseriti</h5>
                            </Button>
                        </Col>
                        <Col md={7} />
                    </Row>
                </Form>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
        atecos: state.atecos,
        types: state.types
    };
};

export default connect(mapStateToProps, { CourseAction, AtecoAction, TypeAction, BusinessAction })(BusinessAdd);