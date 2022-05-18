#define PIN_RES 14
#define PIN_VENT 15
#define PIN_SENSOR 17
#define N 5

int delta_alfa[N];
int X_error[N];
int Kp = 0;
int Ki = 0;
int Kd = 0;

int P, I, D;
int PID;
int Ek = 0;
int Ek_anterior = 0;
int setpoint = 0;
int Tk = 0;
void setup() {
  pinMode(PIN_RES, OUTPUT);
  pinMode(PIN_VENT, OUTPUT);

  ledcAttachPin(PIN_RES, 0);
  ledcAttachPin(PIN_VENT, 1);
}

void loop() {
  for (int i = 0; i <= N; i++) {
    Tk = 0.080586 * (analogRead(PIN_SENSOR));
    Ek_anterior = Ek;
    Ek = setpoint - Tk;
    X_error[i] = Ek - Ek_anterior;
  }
  for (int i = 0; i <= N; i++){
    X_error[i];
  }

  if (Ek > 0) {
    ledWrite(0, "duty cicle do resistor")
  } else if (Ek < 0) {
    ledWrite(0, "duty cicle da vetoinha")
  }



}
