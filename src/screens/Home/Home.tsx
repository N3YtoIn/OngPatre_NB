import { Image, View } from "react-native"


export const Home = () => {
    return(
        <View>

            <View>
                <View>
                    <Image
                        source={require('@/assets/images/pngs/patreLogo.png')}
                    />
                    <Image
                        source={require('@/assets/images/pngs/Unifecaf.png')}
                    />
                </View>

                <View>
                    <Image
                        source={require('@/assets/images/pngs/LogoTitlePatre.png')}
                    />
                </View>

                <View>
                    <Image
                        source={require('@/assets/images/pngs/User.png')}
                    />
                </View>
            </View>

            <View>
                <Image
                    source={require('@/assets/images/pngs/News.png')}
                />

                <Image
                    source={require('@/assets/images/pngs/Pata.png')}
                />

                <Image
                    source={require('@/assets/images/pngs/Sobre.png')}
                />
            </View>

        </View>
    )
}