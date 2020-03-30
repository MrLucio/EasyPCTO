import React from 'react';
import { connect } from 'react-redux';
import { fetchBusinesses as BusinessAction } from 'actions/Business';
import { Course as CourseAction } from 'actions/Course';
import BusinessPagination from 'components/BusinessPagination';
import BusinessCard from 'components/BusinessCard';
import { Title } from 'utils';
import { Placeholder, Grid, Row, CheckPicker } from 'rsuite';

const qs = require('qs');
const { Paragraph } = Placeholder;
const colors = {
    'INFORMATICA': '#3CAEA3',
    'COSTRUZIONE DEL MEZZO': '#20639B',
    'ELETTRONICA': '#F6D55C',
    'TELECOMUNICAZIONI': '#ED553B',
    'LOGISTICA': '#173F5F'
}
const rowStyle = { marginTop: 20 }
const businessNum = 10;

class BusinessSearch extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            activePage: 1,
        }
    }

    getActivePage = () => {
        let activePage = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).page;
        if (activePage == undefined) activePage = 1;
        return parseInt(activePage);
    }

    getActiveCourse = () => {
        let activeCourse = qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).course;
        if (activeCourse == undefined) activeCourse = 1;
    }

    componentDidMount(){
        this.handlePageChange(this.getActivePage())
        document.title = Title('Aziende');
    }

    exportBusinessPlaceholder = (num = 10) => {
        let placholders = [];
        for(let i = 0; i < num; i++){
            placholders.push(
                <Paragraph key={i} style={{ marginTop: 30 }} rows={2} active />
            )
        }
        return placholders;
    }

    handlePageChange = (eventKey) => {
        this.setState({ activePage: eventKey });
        this.props.BusinessAction(eventKey);
        this.props.history.push({
            search: `?page=${eventKey}`
        });
    }

    handleCourseFetch = () => {
        this.props.CourseAction();
    }

    handleCourseUpdate = (values) => {
        let courses = values.map(val => parseInt(val) || null).join(',') || null;
        this.props.BusinessAction(1, courses);
        this.props.history.push({
            search: `?page=1`
        });
    }

    render(){
        const { businesses, pagination } = this.props;
        return (
            <Grid fluid>
                <CheckPicker 
                    onOpen={this.props.CourseAction}
                    onChange={this.handleCourseUpdate}
                    placeholder='Cerca per indirizzo'
                    labelKey='name' 
                    valueKey='id'
                    data={
                        [
                            {
                                "name": "Informatica",
                                "id": "1",
                            },
                            {
                                "name": "Costruzione del mezzo",
                                "id": "2",
                            },
                            {
                                "name": "Elettronica",
                                "id": "3",
                            },
                            {
                                "name": "Telecomunicazioni",
                                "id": "4",
                            },
                            {
                                "name": "Logistica",
                                "id": "5",
                            }
                        ]
                    }
                />
                {Object.getOwnPropertyNames(businesses).length == 0 ? 
                    this.exportBusinessPlaceholder(businessNum)
                    :
                    Object.values(businesses).map((val, key)=>(
                        <Row key={key} style={rowStyle}>
                            <BusinessCard
                                name={val.name}
                                course={val.course.name}
                                email={val.email}
                                tel={val.phone}
                                color={colors[val.course.name]}    
                            />
                        </Row>
                    ))
                }
                <center>
                    <BusinessPagination
                        pages={pagination.last_page}
                        maxButtons={5}
                        size="lg"
                        first
                        prev
                        next
                        last
                        activePage={this.state.activePage}
                        onSelect={this.handlePageChange}
                    />
                </center>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        courses: state.courses,
        pagination: state.pagination
    };
};

export default connect(mapStateToProps, { BusinessAction, CourseAction })(BusinessSearch);