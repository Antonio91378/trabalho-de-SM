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
