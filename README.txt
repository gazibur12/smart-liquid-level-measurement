# 💧 Smart Liquid Level Measurement System Using Arduino UNO

## 📌 Project Overview

The **Smart Liquid Level Measurement System** is an Arduino-based project designed to measure and monitor the liquid level inside a container using an **HC-SR04 ultrasonic sensor**.

The system calculates the liquid height and fill percentage, displays the readings on an OLED screen, and uses three LEDs to indicate the current liquid level.

## ✨ Key Features

- 📏 Non-contact liquid level measurement
- 📊 Real-time liquid height and fill percentage
- 🖥️ OLED display with a graphical fill bar
- 🚦 Three-colour LED status indication
- ⚙️ Automatic calculation of liquid height
- 🔧 Low-cost and easy-to-build hardware
- 🎓 Suitable for instrumentation and embedded systems projects

## 🧰 Hardware Components

| 🔩 Component | 🎯 Purpose |
|---|---|
| Arduino UNO | Main controller |
| HC-SR04 Ultrasonic Sensor | Distance measurement |
| OLED Display (I²C) | Displays liquid level and fill percentage |
| 🔴 Red LED | Indicates low liquid level |
| 🟡 Yellow LED | Indicates medium liquid level |
| 🟢 Green LED | Indicates high liquid level |
| Resistors | Limit LED current |
| Breadboard & Jumper Wires | Circuit connections |

## ⚙️ Working Principle

1. 📡 The HC-SR04 sensor sends an ultrasonic pulse toward the liquid surface.
2. ↩️ The reflected pulse returns to the sensor.
3. 🧮 The Arduino calculates the distance using the echo travel time.
4. 📏 The liquid height is calculated from the effective container height.
5. 📊 The fill percentage is calculated and displayed on the OLED.
6. 🚦 The appropriate LED turns on according to the fill percentage.

## 📐 Mathematical Calculations

**1️⃣ Distance Measurement**

\[
D=\frac{t\times0.0343}{2}
\]

Where:
- \(D\) = Distance to the liquid surface (cm)
- \(t\) = Echo travel time (µs)
- \(0.0343\) = Approximate speed of sound in air (cm/µs)

**2️⃣ Liquid Height**

\[
L=H-D
\]

**3️⃣ Fill Percentage**

\[
P=\frac{L}{H}\times100
\]

Where:

- \(H\) = Effective container height = **9.2 cm**
- \(L\) = Liquid height (cm)
- \(P\) = Fill percentage (%)

## 🚦 LED Indication

| 💧 Fill Percentage | 💡 LED | 📋 Status |
|---|---|---|
| Below 30% | 🔴 Red | Low Level |
| 30% to below 75% | 🟡 Yellow | Medium Level |
| 75% and above | 🟢 Green | High Level |

## 🔌 Circuit Connections

### 📡 HC-SR04 Ultrasonic Sensor

| Sensor Pin | Arduino UNO |
|---|---|
| VCC | 5V |
| GND | GND |
| TRIG | Digital Pin 9 |
| ECHO | Digital Pin 10 |

### 🖥️ OLED Display (I²C)

| OLED Pin | Arduino UNO |
|---|---|
| VCC | Compatible supply pin |
| GND | GND |
| SDA | A4 |
| SCL | A5 |

### 💡 LED Connections

| LED | Example Arduino Pin |
|---|---|
| 🔴 Red | D4 |
| 🟡 Yellow | D5 |
| 🟢 Green | D6 |

*Note: Verify the pin assignments against your actual Arduino sketch. Connect each LED through a suitable current-limiting resistor.*

## 💻 Software Requirements

- Arduino IDE
- Arduino UNO board support
- Adafruit GFX Library
- Adafruit SSD1306 Library
- Wire Library for I²C communication

*The OLED libraries listed above apply to compatible SSD1306 displays.*

## 🚀 How to Run the Project

1. 🔧 Assemble the circuit using the connection tables.
2. 📦 Install the required OLED libraries in Arduino IDE.
3. 📂 Open the Arduino `.ino` file.
4. ⚙️ Select **Arduino UNO** and the correct COM port.
5. ⬆️ Upload the program to the board.
6. 💧 Place the sensor above the container, facing downward.
7. 📊 Observe the liquid height, fill percentage, and LED status as the liquid level changes.

## 🌍 Applications

- 🚰 Water tank level monitoring
- 🏭 Basic process monitoring demonstrations
- 🎓 Instrumentation and measurement experiments
- 🤖 Embedded systems prototyping
- ⚙️ Introductory automation projects

## ⚠️ Limitations

- Ultrasonic readings may fluctuate with turbulent or foamy liquid surfaces.
- Accurate measurements require proper sensor positioning and calibration.
- Fill percentage represents liquid height percentage, not necessarily volume percentage.
- This prototype is intended for educational use, not safety-critical industrial applications.

## 🔮 Future Improvements

- 🔔 Buzzer alarm for low or high liquid levels
- 🚰 Automatic pump control
- 📶 Wi-Fi monitoring using ESP32
- 📈 Historical data logging and graphical analysis
- 🎯 Improved accuracy through calibration and filtering

## 👨‍💻 Author

**Gazibur Rahman**

🎓 Electronics and Instrumentation Engineering  
🏛️ National Institute of Technology Silchar

🔍 **Areas of Interest:** Instrumentation, sensor interfacing, embedded systems, measurement, and process automation.

---

⭐ If you find this project useful, consider giving the repository a star!

💡 *Built to explore ultrasonic sensing, liquid level measurement, and real-time embedded system monitoring.*
