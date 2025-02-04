import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';
import { colours, globalStyles } from '@/theme/theme';
import { Picker } from '@react-native-picker/picker';
import { EmergencyKind, EmergencyReq } from '@/interfaces/EmergencyReq';

export default function HomeScreen() {

  const [kind, setKind] = useState<EmergencyKind[]>([]);

  const loadKinds = async () => {
    try {
      const { data } = await axios.get<EmergencyReq>('https://wisemed-interview.s3.us-east-2.amazonaws.com/react-native/emergency-kinds.json')
      setKind(data.emergencyKinds);
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadKinds();
  }, [])

  return (

    <View style={globalStyles.container}>
      <View style={globalStyles.containerCard}>

        <View style={globalStyles.header}>
          <View>
            <Text style={globalStyles.title}>Traumatología</Text>
            <Text style={globalStyles.subtitle}>Dr. José Pedro Sans</Text>
          </View>
          <View style={globalStyles.image}>
            <Image source={require('../assets/images/joints_bone.png')} style={globalStyles.bones} />
          </View>
        </View>

        <View style={globalStyles.userInfo}>
          <Image source={require('../assets/images/face.png')} style={globalStyles.avatar} />
          <View>
            <Text style={globalStyles.infoLetters}>Jorge Avendaño Pérez</Text>
            <Text style={globalStyles.infoLetters}>35 años</Text>
          </View>
        </View>

        <View style={globalStyles.info}>
          <Text style={globalStyles.infoTitle}>Ficha médica: </Text>
          <Text style={globalStyles.infoText}>77884</Text>
        </View>
        <View style={globalStyles.info}>
          <Text style={globalStyles.infoTitle}>Diagnóstico: </Text>
          <Text style={globalStyles.infoText}>Calcificación Talón</Text>
        </View>
        <View style={globalStyles.info}>
          <Text style={globalStyles.infoTitle}>Intervención: </Text>
          <Text style={globalStyles.infoText}>Extirpación en talón</Text>
        </View>
        <View style={globalStyles.info}>
          <Text style={globalStyles.infoTitle}>Evaluación preanestésica: </Text>
          <Text style={globalStyles.infoText}>Sí</Text>
        </View>
        <View style={globalStyles.info}>
          <Text style={globalStyles.infoTitle}>Tiempo de solicitud: </Text>
          <Text style={globalStyles.infoText}>3 días</Text>
        </View>
        <View style={globalStyles.info}>
          <Text style={globalStyles.infoTitle}>Suspensiones: </Text>
          <Text style={globalStyles.infoText}>2</Text>
        </View>

        <View style={globalStyles.info}>
          <Image source={require('../assets/images/cardio.png')} style={globalStyles.avatar} />
          <Image source={require('../assets/images/anestesia.png')} style={globalStyles.avatar} />
        </View>

        
          <Text style={globalStyles.urgencia}>Tipo de Urgencia</Text>
          <Picker
            style={{ color: colours.primary }}
            selectedValue={kind}
            onValueChange={(itemValue, itemIndex) =>
              setKind(itemValue)
            }>
            <Picker.Item label='Seleccionar' value='' color={colours.primary} style={{ fontSize: 14 }} />
            {kind.map((item, index) => {
              return <Picker.Item
                key={item.id}
                label={item.name}
                value={item.name}
                color={colours.primary}
                style={{ fontSize: 14 }}
              />
            }
            )
            }
          </Picker>

      </View>
    </View>

  );
}

