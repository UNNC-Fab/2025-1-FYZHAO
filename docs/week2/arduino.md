# Arduino application
## 1.Software
Yu can download Arduino IDE from www.arduino.cc according to your PC's version and then install by youself.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318025247146.png)
## 2.Hardware
data from（https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/）
Seeed Studio XIAO ESP32C3 is an IoT mini development board based on the Espressif ESP32-C3 WiFi/Bluetooth dual-mode chip, featuring a 32-bit RISC-V CPU that delivers powerful computing performance with its efficient architecture.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318061833614.png)

### Pinout diagram

![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318122119255.png)

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
Below is the circuit connection shown with the serial port monitor.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/e0525eeaff2d940f5d6f4f34c76fb2d.jpg)

![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318122948456.png)

The light bulb is on when the distance exceeds 200cm.
<iframe width="683" height="384" src="https://www.youtube.com/embed/u6Bf9z2jhuw" title="Application of Arduino HC-SRO4 sensor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 5.Homwork
This is an arduino project that displays temperature and humidity in real time.
This job uses DHT11, LCD ILI9341, XIAO esp32c3, breadboard and Dupont wire.

![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/3cb67516ccb7ecfc6b37cf69d740f9b.jpg)
```c++
#include "SPI.h"
#include "Adafruit_GFX.h"
#include "Adafruit_ILI9341.h"
#include "DHT.h"

// LCD pin definitions
#define TFT_CLK D0
#define TFT_RST D1
#define TFT_MISO MISO
#define TFT_MOSI MOSI
#define TFT_DC D2
#define TFT_CS D3

// DHT sensor definitions
#define DHTPIN D7     // DHT sensor connected to pin D7
#define DHTTYPE DHT11 // Using DHT11 sensor

// LCD color definitions
#define ILI9341_BLACK       0x0000
#define ILI9341_WHITE       0xFFFF
#define ILI9341_GREEN       0x07E0
#define ILI9341_RED         0xF800
#define ILI9341_BLUE        0x001F
#define ILI9341_YELLOW      0xFFE0

// Initialize objects
Adafruit_ILI9341 tft = Adafruit_ILI9341(TFT_CS, TFT_DC, TFT_MOSI, TFT_CLK, TFT_RST, TFT_MISO);
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println("Temperature and Humidity Display");
  
  // Initialize LCD
  tft.begin();
  tft.setRotation(1); // Optional: adjust screen orientation (0-3)
  
  // Initialize DHT sensor
  dht.begin();
  
  // Display initial screen
  tft.fillScreen(ILI9341_BLACK);
  tft.setTextColor(ILI9341_WHITE);
  tft.setTextSize(2);
  tft.setCursor(20, 100);
  tft.println("Initializing...");
  delay(2000);
}

void loop() {
  // Read sensor data
  float humidity = dht.readHumidity();
  float tempC = dht.readTemperature();      // Celsius
  float tempF = dht.readTemperature(true);  // Fahrenheit
  
  // Check if data is valid
  if (isnan(humidity) || isnan(tempC) || isnan(tempF)) {
    displayError();
    delay(2000);
    return;
  }
  
  // Display data
  displayData(humidity, tempC, tempF);
  delay(2000);  // Update every 2 seconds
}

void displayData(float humidity, float tempC, float tempF) {
  // Clear screen
  tft.fillScreen(ILI9341_BLACK);
  
  // Set title
  tft.setTextColor(ILI9341_YELLOW);
  tft.setTextSize(3);
  tft.setCursor(20, 20);
  tft.println("Weather Station");
  
  // Display humidity
  tft.setTextColor(ILI9341_BLUE);
  tft.setTextSize(2);
  tft.setCursor(20, 70);
  tft.print("Humidity: ");
  tft.print(humidity);
  tft.println(" %");
  
  // Display Celsius temperature
  tft.setTextColor(ILI9341_RED);
  tft.setCursor(20, 100);
  tft.print("Temp: ");
  tft.print(tempC);
  tft.println(" *C");
  
  // Display Fahrenheit temperature
  tft.setTextColor(ILI9341_GREEN);
  tft.setCursor(20, 130);
  tft.print("Temp: ");
  tft.print(tempF);
  tft.println(" *F");
}

void displayError() {
  // Display error message
  tft.fillScreen(ILI9341_BLACK);
  tft.setTextColor(ILI9341_RED);
  tft.setTextSize(2);
  tft.setCursor(20, 100);
  tft.println("Sensor Error!");
  tft.setCursor(20, 130);
  tft.println("Check Connection");
}
```
Due to the wrong connection of the positive and negative electrodes of the temperature and humidity sensor DHT11, the sensor is broken!
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/817e618675f4e34d528ca36eec89b07.jpg)

Successful test after DHT11 replacement!
<iframe width="356" height="634" src="https://www.youtube.com/embed/rnXKh7cPbgk" title="LCD displays temperature and humidity in real time" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
