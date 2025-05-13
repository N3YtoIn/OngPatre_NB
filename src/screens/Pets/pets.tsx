import axios from "axios";
import { useEffect, useState } from "react";
import { Image, TouchableOpacity, View, Text, ImageBackground,} from "react-native"
import { styles } from "./styles"
import { router } from "expo-router"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';




export const Pets = () => {

    const [valueApi, setValueApi] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [match, setMatch] = useState([]);


    const requestApi = async () => {
        try {
            const response = await axios.get("http://localhost:3000/dogs/getAllDogs");
            setValueApi(response.data);
        } catch (error) {
            console.error("Erro ao buscar API:", error);
        }
    };
    useEffect(() => {
        requestApi()
    }, [])

    const handleNext = () => {
        if (currentIndex < valueApi.length - 1) {
        setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
        }
    };

    const handlePressYes = () => {
        setMatch(prev => [...prev, valueApi[currentIndex]]);
        handleNext();
    };

    const handlePressNo = () => {
        handleNext();
    };



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

            <ImageBackground
                    source={{uri: valueApi[currentIndex]?.image[0]}}
                    style={styles.imageBack}
                    resizeMode="cover"
                >
            <View style={styles.contentPet}>
                <View style={styles.buttonsPass}>
                    <TouchableOpacity style={[styles.buttonArrow, {backgroundColor: "white"}]}
                        onPress={handlePrev}
                    >
                        <FontAwesome name="arrow-left" size={22} color="#2A2A2A" />
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.buttonArrow, {backgroundColor: "white"}]}
                    onPress={handleNext}>
                        <FontAwesome name="arrow-right" size={22} color="#2A2A2A" />
                    </TouchableOpacity>
                </View>

                    <View style={styles.buttonsActions}>
                        <TouchableOpacity style={[styles.buttonArrow, {backgroundColor: "#F52323"}]}>
                            <AntDesign name="hearto" size={22} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttonArrow, {backgroundColor: "#008638"}]}
                            onPress={() => router.navigate({
                                pathname: "/pets/aboutPet",
                                params: {
                                    id: valueApi[currentIndex]?.id,
                                },
                            })}>
                            <FontAwesome6 name="info" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    
            </View>
            </ImageBackground>

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