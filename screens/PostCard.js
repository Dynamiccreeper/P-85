import React from 'react'

import {Text, View, SafeAreaView, Platform, StatusBar, StyleSheet, Image,TouchableOpacity} from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'


let customFonts={
    'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf')
}


export default class StoryCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fontsLoaded:false
        }
    }
    async _loadFontsAsync(){
        await Font.loadAsync(customFonts)
        this.setState({fontsLoaded: true})
    }
    componentDidMount(){
        this._loadFontsAsync()
    }
    Render(){
        if(!this.state.fontsLoaded){
            return <AppLoading/>
          }
          else{
        return (
<View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={autherContainer}>
                    <View style={styles.autherImageContainer}>
                        <Image source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                        >

                        </Image>
                    </View>
                    <View>
                        <Text style={styles.authorNameContainer}>{this.props.post.author}</Text>
                    </View>
                </View>
                <Image source={require("../assets/post.jpeg")} style={styles.postImage}></Image>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>{this.props.post.caption}</Text>
                </View>
            <View style={styles.actionContainer}>
                <View style={style.likeButton}>
                    <Ioincons name={"heart"} size={RFValue(30)} color={"white"}/>
                    <Text style={styles.likeText}>12k</Text>

                </View>

            </View>
            </View>
</View>
        )
        }
    }
}


const styles = StyleSheet.create({
    droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    cardContainer: {
    marginTop: -20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#2f345d",
    borderRadius: 20,
    height: undefined,
    padding: 10
    },
    titleContainer: {
    flexDirection: "row"
    },
    titleTextContainer: {
    flex: 1
    },
    storyTitleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 25,
    color: "white"
    },
    storyAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 18,
    color: "white"
    },
    descriptionContainer: {
    marginTop: 5
    },
    descriptionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: 13,
        color: "white"
        },
        actionContainer: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
        },
        likeButton: {
        backgroundColor: "#eb3948",
        borderRadius: 30,
        width: 160,
        height: 40,
        flexDirection: "row"
        },
        likeText: {
        color: "white",
        fontFamily: "Bubblegum-Sans",
        fontSize: 25,
        marginLeft: 25,
        marginTop: 6
    }
});
            