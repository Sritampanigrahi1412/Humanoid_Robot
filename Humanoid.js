
#include <IRremote.h>
IRrecv irrecv(7);
decode_results results;
void oldinga() {
  digitalWrite(2, LOW);
  digitalWrite(3, HIGH);
  digitalWrite(4, LOW);
  digitalWrite(5, HIGH);
}
void orqaga() {
  digitalWrite(2, HIGH);
  digitalWrite(3, LOW);
  digitalWrite(4, HIGH);
  digitalWrite(5, LOW);
}
void onga() {
  digitalWrite(2, HIGH);
  digitalWrite(3, LOW);
  digitalWrite(4, LOW);
  digitalWrite(5, HIGH);
}
void chapga() {
  digitalWrite(2, LOW);
  digitalWrite(3, HIGH);
  digitalWrite(4, HIGH);
  digitalWrite(5, LOW);
}
void toxta() {
  digitalWrite(2, LOW);
  digitalWrite(3, LOW);
  digitalWrite(4, LOW);
  digitalWrite(5, LOW);
}
void setup() {
  irrecv.enableIRIn();                                       // запускаем прием инфракрасного сигнала
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(5, OUTPUT);
  //analogWrite(5, 150);
  pinMode(7, INPUT);
}
int state = 0;
void loop() {
  if (irrecv.decode(&results)) {
    Serial.println(results.value);
    if (results.value == 4294967295

       ) {
      oldinga();

    } else if (results.value == 2425374393
) {
      onga();

    } else if (results.value == 2425398873
) {

      chapga();
    } else if (results.value == 632192736
) {

      orqaga();

    } else {
      toxta();


    }
    irrecv.resume();
  }





}