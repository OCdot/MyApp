import {Text, TouchableOpacity} from 'react-native';
import style from './style';

const CustomButton = props => {
  const {text, handleButtonPress} = props;
  return (
    <TouchableOpacity style={style.btn} onPress={handleButtonPress}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
