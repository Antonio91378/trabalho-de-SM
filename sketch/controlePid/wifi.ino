#define WIFI_SSID "Nilha 2G"                  //substitua "Nome_do_seu_wifi" pelo nome da sua rede wifi 
#define WIFI_PASSWORD "nilha123"             //substitua "Senha_do_seu_wifi" pela senha da sua rede wifi 
#define FIREBASE_HOST "https://pid-esp32-default-rtdb.firebaseio.com/"    //substitua "Link_do_seu_banco_de_dados" pelo link do seu banco de dados 
#define FIREBASE_AUTH "nU7wTUXgWghuIsW6MrLwWidhF5KEJyNrIYZ3OYUV"   //substitua "Senha_do_seu_banco_de_dados" pela senha do seu banco de dados
#include <IOXhop_FirebaseESP32.h>
#include <IOXhop_FirebaseStream.h>


void conectarWifi() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}
