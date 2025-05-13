import axios from "axios";
import { Image, Text, View } from "react-native";
import { styles } from "./styleAbout";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

export const AboutPet = () => {
  const { id } = useLocalSearchParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchPet = async () => {
      try {
        const res = await axios.get("http://localhost:3000/dogs/getAllDogs");
        const foundPet = res.data.find((item) => item.id === Number(id));
        setPet(foundPet);
      } catch (err) {
        console.error("Erro ao buscar pet:", err);
      }
    };

    fetchPet();
  }, [id]);

  if (!pet) return <Text style={{ padding: 20 }}>Carregando informações do pet...</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.BoxImg}>
          <Image
            style={styles.ImageBox}
            source={{ uri: pet?.image?.[0]}}
          />
          <Text style={styles.nameFont}>{pet?.name}</Text>
          <Text style={styles.nameDesc}>{pet?.description}</Text>
        </View>

        <View style={styles.BoxDesc}>
          <View style={styles.TextBox}>
            <Text style={styles.TextFont}>Idade:</Text>
            <Text style={styles.Text}> {pet?.years} anos</Text>
          </View>

          <View style={styles.TextBox}>
            <Text style={styles.TextFont}>Contato:</Text>
            <Text style={styles.Text}> {pet?.contact}</Text>
          </View>

          <View style={styles.TextBox}>
            <Text style={styles.TextFont}>Endereço:</Text>
            <Text style={styles.Text}> {pet?.address}</Text>
          </View>

          <View style={styles.TextBox}>
            <Text style={styles.TextFont}>Gênero:</Text>
            <Text style={styles.Text}> {pet?.gender}</Text>
          </View>

          <View style={styles.TextBox}>
            <Text style={styles.TextFont}>Tamanho:</Text>
            <Text style={styles.Text}> {pet?.size}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
