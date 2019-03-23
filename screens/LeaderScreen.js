import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Leaderboard from 'react-native-leaderboard';
import { MonoText } from '../components/StyledText';

export default class LeaderScreen extends React.Component {
    static navigationOptions = {
        title: 'Leaderboard',
    };

    constructor() {
        super();
        this.state = {
            data: [
                { userName: 'Dilworth', highScore: 232 },
                { userName: 'Ballantyne', highScore: 120 },
                { userName: 'Myers Park', highScore: 52 },
                { userName: 'Midtown', highScore: 120 },
                { userName: 'South End', highScore: 342 },
                { userName: 'Belmont', highScore: 156 },
                { userName: 'Cornelius', highScore: 64 },
                { userName: 'Pineville', highScore: 132 },
                { userName: 'Kannapogis', highScore: 202 },
                { userName: 'Huntersville', highScore: 101 },
                { userName: '3rd Ward', highScore: 253 },                //...
            ]
        }

    };

    render() {
        return (
            <Leaderboard
                data={this.state.data}
                sortBy='highScore'
                labelBy='userName' />)
    }
};