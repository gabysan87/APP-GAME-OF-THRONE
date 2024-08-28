import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export const CardCharacters = () => {
  const [person, setPerson] = useState({}); //Estado para almacenar el personaje

  //consumir la API y obtener un personaje aleatorio
  const getCharacter = async () => {
    const resp = await fetch(`https://thronesapi.com/api/v2/Characters`);
    const data = await resp.json();
    const randomCharacter = data[Math.floor(Math.random() * data.length)]; // para generar numero aleatorio
    setPerson(randomCharacter);
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "url(https://www.pixelstalk.net/wp-content/uploads/2015/11/Game-of-Thrones-Desktop-HD-Wallpapers.jpg)",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {/* Tarjeta del personaje */}
      <Card
        sx={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: 2,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          boxShadow: "0px 0px 10px 3px #336f57",
          marginLeft: "450px",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        {/* IMAGEN DE LOS PERSONAJES */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "600px",
            overflow: "hidden",
            padding: 2,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: "50%",
              maxWidth: "300px",
              width: "80%",
            }}
            image={person.imageUrl}
            alt={person.fullname}
          />

          {/* Datos de los personajes */}
          <CardContent
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h5" sx={{fontFamily: 'Roboto', fontSize: '30px'}}>
              <b>Nombre completo: </b>
              {person.fullName ? person.fullName : "Unknown"}
            </Typography>
            <Typography variant="h5" sx={{fontFamily: 'Roboto', fontSize: '30px'}}>
              <b> Primer nombre: </b>{" "}
              {person.firstName ? person.firstName : "Unknown"}
            </Typography>
            <Typography variant="h5" sx={{fontFamily: 'Roboto', fontSize: '30px'}}>
              <b> Apellido: </b> {person.lastName ? person.lastName : "Unknown"}
            </Typography>
            <Typography variant="h5" sx={{fontFamily: 'Roboto', fontSize: '30px'}}>
              <b> Titulo: </b> {person.title ? person.title : "Unknown"}
            </Typography>
            <Typography variant="h5" sx={{fontFamily: 'Roboto', fontSize: '30px'}}>
              <b> Familia: </b> {person.family ? person.family : "Unknown"}
            </Typography>
          </CardContent>
        </Box>

        {/* BOTON  */}
        <CardActions
          sx={{
            display: " flex",
            justifyContent: "center",
            marginBottom: 6,
          }}
        >
          <Button
            variant="contained"
            onClick={getCharacter}
            color="grey"
            sx={{
              borderRadius: "2px",
              fontWeight: "bold",
              backgroundColor: "green",
              color: "white",
              display: "flex",
              justifyContent: "center",
              boxShadow: "0px 0px 10px 3px #336f57",
           }}
          >
            Get Radom Character
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
