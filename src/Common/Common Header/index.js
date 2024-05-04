import { Text, View } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'
import style from "./style"
import colors from "../../assets/colors/colors"

const CommonHeader =(props) => {
    const {heading} = props
    return(
        <View style={style.headView}>
          <Text style={style.headTxt}>{heading}</Text>
          <Entypo name="bell" size={50} color={colors.black} />
        </View>
    )
}
export default CommonHeader