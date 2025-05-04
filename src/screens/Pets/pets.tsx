import { Image, TouchableOpacity, View, Text, ImageBackground} from "react-native"
import { styles } from "./styles"
import { router } from "expo-router"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export const Pets = () => {
    return(
        <View style={styles.container}>
            <View style={styles.contentHeader}>
                <View style={styles.headerLogo}>
                    <Image
                        style={{height: 70, width: 70}}
                        source={require('@/assets/images/pngs/patreLogo.png')}
                    />
                    <Image
                        style={{height: 55, width: 55}}
                        source={require('@/assets/images/pngs/Unifecaf.png')}
                    />
                </View>

                <View style={styles.headerUser}>
                    <Image
                        style={{height: 45, width: 40}}
                        source={require('@/assets/images/pngs/User.png')}
                    />
                </View>
            </View>

            <View style={styles.contentPet}>
                <ImageBackground
                />
                <View style={styles.buttonsPass}>
                    <TouchableOpacity style={[styles.buttonArrow, {backgroundColor: "#2A2A2A"}]}>
                        <FontAwesome name="arrow-left" size={22} color="white" />
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.buttonArrow, {backgroundColor: "#2A2A2A"}]}>
                        <FontAwesome name="arrow-right" size={22} color="white" />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsActions}>
                    <TouchableOpacity style={[styles.buttonArrow, {backgroundColor: "#F52323"}]}>
                        <AntDesign name="hearto" size={22} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonArrow, {backgroundColor: "#008638"}]}>
                        <FontAwesome6 name="info" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                
            </View>


            <View style={styles.navContent}>
                <TouchableOpacity onPress={() => router.navigate('/news/news')}>
                    <Image
                        style={{height: 60, width: 60}}
                        source={require('@/assets/images/pngs/News.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.navigate('/home/home')}>
                    <Image
                        style={{height: 60, width: 60, transform: [{scale: 1.15}]}}
                        source={require('@/assets/images/pngs/Active/PataActive.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.navigate('/about/about')}> 
                    <Image
                        style={{height: 60, width: 60}}
                        source={require('@/assets/images/pngs/Sobre.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}