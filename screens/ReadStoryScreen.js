import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            allStories:[]
        }
    }
    retrieveStories=()=>{
        try{
var allStories=[]
var stories = db.collection("stories").get().then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
        allStories.push(doc.data())
        console.log('these are the stories', allStories)
    })
    this.setState({allStories})
})

        }
        catch(error){
            console.log(error)
        }
    }
    componentDidMount(){
        this.retrieveStories()
    }
    render(){
        return(
            <View>
                <FlatList
                data={this.state.allStories}
                renderItem={({item})=>(
                    <View style={styles.itemContainer}>
<Text>Title:{item.title}</Text>
<Text> {item.author}</Text>
                    </View>

                )}
                keyExtractor={(item,index)=>index.toString()}>
                

            </FlatList>
            </View>
        )
    }
}