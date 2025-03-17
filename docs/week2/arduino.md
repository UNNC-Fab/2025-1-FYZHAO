# Arduino application
## 1.Software
Yu can download Arduino IDE from www.arduino.cc according to your PC's version and then install by youself.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318025247146.png)
## 2.Hardware
data from（https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/）
Seeed Studio XIAO ESP32C3 is an IoT mini development board based on the Espressif ESP32-C3 WiFi/Bluetooth dual-mode chip, featuring a 32-bit RISC-V CPU that delivers powerful computing performance with its efficient architecture.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318061833614.png)


| Item | Seeed Studio XIAO ESP32C3 | Seeeduino XIAO | Seeed XIAO RP2040 | Seeed XIAO nRF52840 | Seeed XIAO nRF52840 Sense |
|------|---------------------------|----------------|-------------------|--------------------|-----------------------|
| Processor | ESP32-C3 32-bit RISC-V @160MHz | SAMD21 M0+@48MHz | RP2040 Dual-core M0+@133Mhz | nRF52840 M4F@64MHz | nRF52840 M4F@64MHz |
| Wireless Connectivity | WiFi and Bluetooth 5 (BLE) | N/A | N/A | Bluetooth 5.0/BLE/NFC | Bluetooth 5.0/BLE/NFC |
| Memory | 400KB SRAM, 4MB onboard Flash | 32KB SRAM 256KB FLASH | 264KB SRAM 2MB onboard Flash | 256KB RAM, 1MB Flash 2MB onboard Flash | 256KB RAM,1MB Flash 2MB onboard Flash |
| Built-in Sensors | N/A | N/A | N/A | N/A | 6 DOF IMU (LSM6DS3TR-C), PDM Microphone |
| Interfaces | I2C/UART/SPI | I2C/UART/SPI | I2C/UART/SPI | I2C/UART/SPI | I2C/UART/SPI |
| PWM/Analog Pins | 11/4 | 11/11 | 11/4 | 11/6 | 11/6 |
| Onboard Buttons | Reset/ Boot Button | N/A | Reset/ Boot Button | Reset Button | Reset Button |
| Onboard LEDs | Charge LED | N/A | Full-color RGB/ 3-in-one LED | 3-in-one LED/ Charge LED | 3-in-one LED/ Charge LED |
| Battery Charge Chip | Built-in | N/A | N/A | BQ25101 | BQ25101 |
| Programming Languages | Arduino/ MicroPython | Arduino/ CircuitPython | Arduino/ MicroPython | Arduino/ CircuitPython | Arduino/ CircuitPython |
## 3.Arduino Output
Step 1. Copy the below code to Arduino IDE. Make sure your D10 is connected to an LED as shown in the diagram above.
```c++
// define led according to pin diagram in article
const int led = D10; // there is no LED_BUILTIN available for the XIAO ESP32C3.

void setup() {
  // initialize digital pin led as an output
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);   // turn the LED on 
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off
  delay(1000);               // wait for a second
}
```
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/f116e3af6d1fcf00605053b1354596e.jpg)
Once uploaded, you will see the connected LED blinking with a 1-second delay between each blink. This means the connection is successful and now you can explore more projects with XIAO ESP32C3!
## 4.Arduino Input
This code utilizes an ultrasonic sensor (HC-SR04) to measure the distance to an object. It initializes the sensor pins (TrigPin and EchoPin) and a digital output pin (D10) connected to a light bulb. In the main loop, it continuously calculates the distance using the sensor and prints the value to the serial monitor. If the measured distance exceeds 200 units, the bulb is turned on by setting D10 to HIGH; otherwise, it is turned off by setting D10 to LOW. The distance is calculated based on the duration of the ultrasonic pulse and converted to units using a predefined formula.
```c++
#define TrigPin A0
#define EchoPin A1
int count = 0;
long duration;


void setup() {
  Serial.begin(115200);
  pinMode(TrigPin, OUTPUT);
  pinMode(EchoPin, INPUT);
  digitalWrite(TrigPin, LOW);
  delay(1);
  pinMode (D10, OUTPUT);

}

void loop() {
  Serial.println(count++);
  Serial.println(getDistance());
  Serial.println("");
  Serial.println("");
  delay(1000);
  int distance= getDistance();
  if (distance>200){
    digitalWrite(D10, HIGH);
  }
  else {
    digitalWrite(D10, LOW);
  }
}

long getDistance() {
  digitalWrite(TrigPin,LOW);
  delayMicroseconds(2);
  digitalWrite(TrigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(TrigPin,LOW);
  duration = pulseIn(EchoPin,HIGH);
  return duration * 0.34029 /2;
}
```

## 5.Homwork
This code uses an IR remote to control a sequence of LEDs and a buzzer. It initializes an IR receiver to detect signals from a remote, maps specific remote button values to corresponding tones, and plays these tones on the buzzer. Additionally, it flashes a series of LEDs in sequence and reverse order continuously. The system includes debouncing to prevent multiple triggers from a single button press and ensures smooth operation of the LED and buzzer responses.
```c++

#include <IRremote.h>
#include <toneAC.h>

const int IR_RECEIVER_PIN = 8;
const int LED_PINS[] = {2, 3, 4, 5, 6, 7};
const int BUZZER_PIN = 9;

IRrecv irrecv(IR_RECEIVER_PIN);
decode_results results;

int tones[] = {262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784};
int currentToneIndex = 0;

unsigned long lastCommandTime = 0;
unsigned long debounceDelay = 500;  // Set an appropriate debounce delay in milliseconds

void setup() {
  Serial.begin(9600);
  irrecv.enableIRIn();

  for (int i = 0; i < sizeof(LED_PINS) / sizeof(LED_PINS[0]); i++) {
    pinMode(LED_PINS[i], OUTPUT);
  }

  flashLEDs(2);
}

void loop() {
  if (irrecv.decode(&results)) {
    // Check for debouncing
    if (millis() - lastCommandTime > debounceDelay) {
      Serial.print("Hex Value: ");
      Serial.println(results.value, HEX);

      playTone(results.value);

      lastCommandTime = millis();  // Update the last command time
    }

    irrecv.resume();
  }

  // Flash LEDs in sequence and then in reverse
  flashLEDsSequence();
  flashLEDsReverse();
}

void playTone(unsigned long value) {
  // Map the hex values to corresponding tones
  int index = -1;
  switch (value) {
    case 0xFFA25D: index = 0; break; // CH-
    case 0xFF629D: index = 1; break; // CH
    case 0xFFE21D: index = 2; break; // CH+
    case 0xFF22DD: index = 3; break; // <<
    case 0xFF02FD: index = 4; break; // >>
    case 0xFFC23D: index = 5; break; // >||
    case 0xFFE01F: index = 6; break; // -
    case 0xFFA857: index = 7; break; // +
    case 0xFF906F: index = 8; break; // EQ
    case 0xFF9867: index = 9; break; // 100+
    case 0xFFB04F: index = 10; break; // 200+
    case 0xFF6897: index = 11; break; // 0
    case 0xFF30CF: index = 12; break; // 1
    case 0xFF18E7: index = 13; break; // 2
    case 0xFF7A85: index = 14; break; // 3
    case 0xFF10EF: index = 15; break; // 4
    case 0xFF38C7: index = 16; break; // 5
    case 0xFF5AA5: index = 17; break; // 6
    case 0xFF42BD: index = 18; break; // 7
    case 0xFF4AB5: index = 19; break; // 8
    case 0xFF52AD: index = 20; break; // 9
  }

  // Play the corresponding tone
  if (index != -1) {
    currentToneIndex = index; // Update the current tone index
    toneAC(BUZZER_PIN, tones[index], 500);
    delay(500);
    noToneAC(); // Stop the tone before playing the next one
    delay(50); // Small delay before starting the next tone
  }
}

void flashLEDs(int times) {
  for (int i = 0; i < times; i++) {
    for (int j = 0; j < sizeof(LED_PINS) / sizeof(LED_PINS[0]); j++) {
      digitalWrite(LED_PINS[j], HIGH);
      delay(100);
      digitalWrite(LED_PINS[j], LOW);
    }
    delay(500);
  }
}

void flashLEDsSequence() {
  for (int i = 0; i < sizeof(LED_PINS) / sizeof(LED_PINS[0]); i++) {
    digitalWrite(LED_PINS[i], HIGH);
    delay(100);
    digitalWrite(LED_PINS[i], LOW);
  }
}

void flashLEDsReverse() {
  for (int i = sizeof(LED_PINS) / sizeof(LED_PINS[0]) - 1; i >= 0; i--) {
    digitalWrite(LED_PINS[i], HIGH);
    delay(100);
    digitalWrite(LED_PINS[i], LOW);
  }
}
```