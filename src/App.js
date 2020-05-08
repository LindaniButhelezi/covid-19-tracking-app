
import React from 'react';
//This is a long way of importing files
/*
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
*/

import {Cards, Chart, CountryPicker,} from './components' 
import styles from './app.module.css';
import {fetchData} from './api'
import coronaImg from './images/image.png'

class App extends React.Component {

    state={
        data:{},
        country:'',
    }

    async componentDidMount(){
        const fetchedData= await fetchData();
        
        this.setState({data: fetchedData});
    }

    handleCountryChange=async(country)=>{
        const fetchedData=await fetchData(country)
        this.setState({data: fetchedData, country: country})


    }

    render() {
        const {data, country}=this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImg} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                
            </div>
        )

    }
}

export default App;