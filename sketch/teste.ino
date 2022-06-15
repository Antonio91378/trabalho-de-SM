/*
  0 -> resfriando(max)
  50 -> desligar
  100 -> aquecendo(max)
*/
#include <IOXhop_FirebaseESP32.h>
#include <IOXhop_FirebaseStream.h>

#define WIFI_SSID "Nilha 2G"                  //substitua "Nome_do_seu_wifi" pelo nome da sua rede wifi 
#define WIFI_PASSWORD "nilha123"             //substitua "Senha_do_seu_wifi" pela senha da sua rede wifi 
#define FIREBASE_HOST "https://pid-esp32-default-rtdb.firebaseio.com/"    //substitua "Link_do_seu_banco_de_dados" pelo link do seu banco de dados 
#define FIREBASE_AUTH "nU7wTUXgWghuIsW6MrLwWidhF5KEJyNrIYZ3OYUV"   //substitua "Senha_do_seu_banco_de_dados" pela senha do seu banco de dados


#define PIN_tempSensor 34
#define PIN_controle 25

// PID constantes
double Kp = 0.5;
double Ki = 0.3;
double Kd = 0.02;
double setPoint = 0;

// Variaveis
double error = 0;
double prevError = 0;
double *PPrevError = &prevError;
double somaError = 0;
long prevProcess = 0;

double P = 0.0;
double I = 0.0;
double D = 0.0;
double PID = 0.0;
double controlePwm = 0.0;

double sensor = 0.0;     // graus célsius
double prevSensor = 0.0; // temperatura anterior
double *PprevSensor = &prevSensor;
// funções de calculo
double Pcalculator(double erro)
{
  // kp = ("entrada do usuario");
  double P = Kp * erro;
  return P;
}
double Icalculator(double erro, double erroAnterior, float tempoDecorrido)
{
  somaError = erro + erroAnterior;
  double I = (Ki * somaError) * tempoDecorrido / 1000.0; // pegando o tempo em segundos
  return I;
}
double Dcalculator(double tempAnterior, double tempAtual, float tempoDecorrido)
{
  double D = Kd * (tempAnterior - tempAtual) * tempoDecorrido / 1000.0; // pegando o tempo em segundos;
  return D;
}

void setup()
{
  Serial.begin(115200);


  // connect to wifi.
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


  pinMode(PIN_tempSensor, INPUT);
  pinMode(PIN_controle, OUTPUT);
}

void loop()
{
  Serial.print("A temperatura anterior é de:");
  Serial.println(prevSensor);
  Serial.print("o erro anterior é de:");
  Serial.println(prevError);
  sensor = ((analogRead(PIN_tempSensor)) * (5.0 / 4095)) / 10e-3;
  Serial.print("A temperatura atual é de:");
  Serial.println(sensor);

  // IMPLEMENTACAO PID
  setPoint = 50;
  error = setPoint - sensor;
  Serial.print("o erro atual é de:");
  Serial.println(error);
  float deltaTime = millis() - prevProcess;
  prevProcess = millis();
  // Calculando o valor de P
  P = Pcalculator(error);
  // Calculando o valor de I
  I = Icalculator(error, prevError, deltaTime);
  // Calculando o valor de D
  D = Dcalculator(sensor, prevSensor, deltaTime);
  // Calculando o valor do PID
  PID = P + I + D;
  // atualizando variáveis
  *PPrevError = error;
  *PprevSensor = sensor;

  // saída (Ainda vou fazer)
  controlePwm = (PID + 50);
  Serial.print(controlePwm);
  Serial.println(" ");
  Serial.println(" ");
  Serial.println(" ");
  Serial.println(" ");
  Serial.println("===============");
  // clock = (escolha do usuário);
  delay(10000);
}
