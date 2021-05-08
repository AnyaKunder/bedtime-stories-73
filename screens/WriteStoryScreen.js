import React from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
         title:'',
         author:'',
         storyText:''
        }
    }
    submitStory=()=>{
db.collection('stories').add({
    title:this.state.title,
    author:this.state.author,
    storyText:this.state.storyText

})
this.setState({
    title:'',
    author: '',
    storyText:''
})
Alert.alert("your story has been successfully submitted!")
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}behaviour='padding'enabled>
<Header backgroundColor={'pink'} centerComponent={{
    text:'Bed Time Stories!', style:{color:'white', fontSize:20}
}}>

</Header>
<TextInput
placeholder="story title"
onChangeText={(text)=>{
    this.setState({title:text})
}}
value={this.state.title}
style={styles.title}>

</TextInput>
<TextInput
placeholder="author"
onChangeText={(text)=>{
    this.setState({author:text})
}}
value={this.state.author}
style={styles.author}>

</TextInput>
<TextInput
placeholder="write your story"
onChangeText={(text)=>{
    this.setState({storyText:text})
}}
value={this.state.storyText}
style={styles.storyText}
multiline={true}>

</TextInput>
<TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>
<Text style={styles.buttonText}>
SUBMIT
</Text>
</TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        title:{
            height: 40,
            borderWidth: 2,
            marginTop: 40,
            margin: 10
        },
        author: {
            height: 40,
            borderWidth: 2,
            margin: 10
        },
        storyText: {
            height: 250,
            borderWidth: 2,
            margin: 10
        },
        submitButton:{
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: 'pink',
            width: 80,
            height: 40
        },
        buttonText: {
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold'
        }
      });