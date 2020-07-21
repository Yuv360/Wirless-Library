import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions'
export default class BookTransaction extends React.Component{
    constructor(){
        super()
        this.state = {
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal',
            scannedBookId:'',
            scannedStudentId:''

        }
    }
    getPermissionsAsync = async (id) => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermissions: status === 'granted', buttonState:id, scanned:false })
      }
      handleBarCode = async({type,data})=>{
const {buttonState} = this.state
if(buttonState==='studentId'){
this.setState({
    scanned:true,
    scannedData:data,
    buttonState:'normal'
})
}
else if(buttonState==='bookId'){


          this.setState({
              scanned:true,
              scannedData:data,
              buttonState:'normal'

          })
      }
    }
      
render(){
    const hasCameraPermissions = this.state.hasCameraPermissions
    const scanned = this.state.scanned
    const buttonState = this.state.buttonState
    if(buttonState!=='normal' &&hasCameraPermissions){
        return(
<BarCodeScanner 
onBarCodeScanned = {scanned?undefined:this.handleBarCode}
style = {
StyleSheet.absoluteFillObject
}
>


</BarCodeScanner>
            )
    }
    else if(buttonState==='normal'){
        return(
            <View style ={ styles.container }>
                <View>
                    <Image
                    source = {require("../assets/booklogo.jpg")}
                 style = {{
                     width:200,
                     height:200
                 }}   >

                    </Image>
                    <Text
                    style = {{
                        textAlign:"center",
                    fontSize:30
                    }}
                    >
                        WI-LI
                    </Text>

                </View>

                <View style = {styles.inputView}>
                    <TextInput style = {styles.inputBox}
                    placeholder = 'bookId'
                   value = {this.state.scannedBookId}
                   >

                    </TextInput>
                    <TouchableOpacity style = {styles.scannedButton}
                    onPress = {()=>{
                        this.getPermissionsAsync('bookId')
                    }}
                    >
<Text style = {styles.buttonText}>
    Scan
</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.inputView}>
                    <TextInput style = {styles.inputBox}
                    placeholder = 'studentId'
                   value = {this.state.scannedStudentId}
                   >

                    </TextInput>
                    <TouchableOpacity style = {styles.scannedButton}
                    onPress = {()=>{
                        this.getPermissionsAsync('studentId')
                    }}
                    >
<Text style = {styles.buttonText}>
    Scan
</Text>
                    </TouchableOpacity>
                </View>

<Text style = {styles.displayText}>
{hasCameraPermissions === true?this.state.scannedData:"requestCameraPermissions"}
</Text>

<TouchableOpacity style = {styles.scannedButton}
onPress =  {this.getPermissionsAsync}
>
<Text style = {styles.buttonText}

>
    Scan QR Code
</Text>
</TouchableOpacity>
            </View>
        )
    }

}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"

    },
    displayText:{
        fontSize:15,

    },
    scannedButton:{
        backgroundColor:"yellow",
        padding:10,
        margin:10
    },
    buttonText:{
        fontSize:15,
        textAlign:"center",
        marginTop:10
    },
    inputView:{
        flexDirection:"row",
        margin:20

    },
    inputBox:{
        width:200,
        height:40,
        borderWidth:1.5,
        borderRightWidth:0,
        fontSize:20
    },
    scannedButton:{
        backgroundColor:"red",
        width:30,
      borderWidth:1.5,
      borderLeftWidth:0
    }
})