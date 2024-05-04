import { Text, View } from "react-native"
import style from "./style"

const Logo =() =>{
    return(
        <View style ={style.container}>
            <Text style = {style.txt}>
                Laudry.io
            </Text>
        </View>
    )
}

export default Logo