#define PIN_RES 14
#define PIN_VENT 15
#define PIN_SENSOR 17

int Kp = 0;
int Ki = 0;
int Kd = 0;

int P, I, D;
int PID;

void setup() {
  pinMode(PIN_RES, OUTPUT);
  pinMode(PIN_VENT, OUTPUT);
  pinMode(PIN_SENSOR, INPUT);
  ledcAttachPin(PIN_RES, 0);
  ledcAttachPin(PIN_VENT, 1);
}

void loop() {

}

void calc_PID() {
  
}
}
