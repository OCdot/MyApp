import { TextInput, View } from "react-native"
import style from "./style"
import { useState } from "react"

const Customtextinput =(props) =>{
    const {placeholder, keyboard,handleText,secureTextEntry,lines,onFocus} = props
    

    return(
        <View>
            <TextInput style ={style.textInput}
            placeholder={placeholder}
            keyboardType={keyboard}
            onChangeText={handleText}
            secureTextEntry ={secureTextEntry}
            numberOfLines={lines}
            onFocus={onFocus} />   
        </View>
    )
}
export default Customtextinput