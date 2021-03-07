import React from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component{
    render(){
        return(
            <LottieView
            source={require('../assets/42321-santa-surprise-gift.json')}
            style={{width:'60%',alignSelf:'center'}}
            autoPlay loop/>

        )
    }
}