import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { router } from "expo-router"


export const News = () => {
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


            <View style={styles.textContent}>
                <Text style={styles.textStyle}>Coming Soon</Text>
            </View>


            <View style={styles.navContent}>
                <TouchableOpacity onPress={() => router.navigate('/home/home')}>
                    <Image
                        style={{height: 60, width: 60, transform: [{scale: 1.15}]}}
                        source={require('@/assets/images/pngs/Active/NewsActive.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.navigate('/pets/pets')}>
                    <Image
                        style={{height: 60, width: 60}} 
                        source={require('@/assets/images/pngs/Pata.png')}/>
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