# Electronic design
In this class, I learned PCB related knowledge, downloaded Autodesk Fusion and EDA, and drew PCB board.
## 1.Autodesk Fusion 360
### Download and install
**Download & Installation Steps**

1.Download the Installer

Visit the official Autodesk Fusion 360 website: https://www.autodesk.com/products/fusion-360 and click "Download Free Trial".

Select your operating system (Windows/macOS) and save the installer file (approx. 700MB-1GB).

​2.Run the Installer

Double-click the downloaded file (.exe for Windows or .dmg for macOS).
Follow the on-screen instructions to complete the installation. Choose a non-system drive for installation if possible.

![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318132709476.png)

3.Launch Fusion 360

After installation, open the software. You'll be prompted to sign in with an Autodesk ID.

**Student Registration Guide**

1.​Create an Autodesk ID

If you don't have an Autodesk account:
Click "Need an Autodesk ID?" during the sign-in process.
Provide your educational email (e.g., @edu) or personal email and complete registration.

2.​Apply for Educational License

Visit the Autodesk Education Portal: https://www.autodesk.com/education.
Search for "Fusion 360" and select "Get Product".
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318132217205.png)
Verify your student status by:
Uploading a valid student ID or enrollment letter.
Providing school name and graduation date.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318132151637.png)

3.​Activate Educational Access

Once approved, log into Fusion 360 using your Autodesk ID.
The software will automatically switch to the educational license (valid for 1-3 years)
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318132217205.png)

### Designing a simple PCB in Fusion 360

**Create a New Electronics Design**

1.Open Fusion 360 and navigate to ​File > New Electronics Design.

2.Name your project (e.g., "Simple_PCB") and select ​Schematic to start designing the circuit.

**Add Components from the Library**
1.Open the ​Library Manager (Tools > Library Manager) and ensure the following libraries are loaded:

​Adafruit (for Xiao ESP32-C3 and LEDs).
​Generic Components (for resistors, switches, etc.).

2.Search and place components:

​Xiao ESP32-C3: Search for "Xiao ESP32-C3" in the Adafruit library.
​Switch: Use a generic SPST switch.
​Resistor: Select a 220Ω resistor.
​LED: Choose an LED from the library.
Double-click or drag components onto the schematic workspace.

**Connect Components in the Schematic**

1.Use the ​Net tool to wire components:

Connect the Xiao ESP32-C3’s GPIO pin to the resistor.
Link the resistor to the LED’s anode.
Connect the LED’s cathode to ground (GND).
Wire the switch between power (VCC) and the Xiao’s enable pin.

2.Assign ​Power Symbols: Add a ​**+V** (5V) and ​GND symbol to complete the circuit.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318185821428.png)

**​Define PCB Shape and Switch to PCB Layout**

1.Click ​Switch to PCB Document from the schematic workspace.

2.Adjust the PCB outline:

Use the ​Outline tool to draw a custom shape or resize the default rectangle.
Ensure the board size accommodates all components.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318190015578.png)

**Place Components on the PCB**

1.Drag components onto the PCB:
Position the Xiao ESP32-C3 centrally.
Place the switch near the board edge for accessibility.
Arrange the resistor and LED close to the Xiao’s GPIO pin.
Use ​Rotation and ​Mirror tools to optimize placement.

**Generate 3D PCB and Validate**

1.Click ​Push to 3D PCB to visualize the board in 3D.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318190124112.png)

2.Check for component collisions or alignment issues.
Run ​Design Rule Check (DRC) to identify errors like short circuits or insufficient spacing.

**Export Manufacturing Files**

Navigate to ​File > Export and select:

​Gerber Files for PCB fabrication.

​Bill of Materials (BOM) for component sourcing
## 2.JiaLiChuang EDA

Here’s an English guide for designing the PCB shown using ​JiaLiChuang EDA (JLCEDA).

**Create a New Project**

1.Launch ​JiaLiChuang EDA and click ​​“File” > “New Project”​.

2.Name the project (e.g., “Xiao_ESP32C3_PCB”) and select ​​“PCB_New Project”​ from the workspace panel.

**Set Up the Workspace**

1.Configure the ​Canvas Properties (right panel):

Set ​Background Color to #FFFFFF (white).

Enable ​Grid Visibility with ​Grid Style as Solid Lines and ​Grid Size = 5.

2.Use the ​Electrical Tools and ​Drawing Tools (left toolbar) for component placement and routing.

**Add Components**

1.Place critical components from the library:

​Xiao ESP32-C3: Search for “Xiao ESP32-C3” in the component library.

​Switch: Add an SPST switch.

​Resistor: Select a 220Ω resistor.

​LED: Choose a standard LED.

2.Arrange components as shown in this image:

Position the Xiao ESP32-C3 centrally.
Place the switch near the board edge (e.g., labeled ​SW1).
Connect the resistor to the LED and Xiao’s GPIO pin (e.g., ​DIO11 or ​DIO12).
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250320154426984.png)

**Draw Connections**

Use the ​Wire Tool to create traces:

Connect the Xiao’s ​3V3 pin to the switch and LED’s anode (via resistor).
Link the switch to ​GND (ground plane).
Route ​GND connections to all components (use the ​GND symbol).
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250320155307872.png)

**Validate the Design**

1.Run ​Design Rule Check (DRC):

Check for unconnected nets, short circuits, or clearance errors.
Verify component alignment and spacing using the ​Measurement Tool.

**Export Manufacturing Files**

1.Click ​​“File” > “Export”​ and generate:

​Gerber Files (for PCB fabrication).

​Bill of Materials (BOM) for component procurement.

2.Save the project locally or to the cloud (​“Personal”​ workspace).

## 3.Ordering custom boards via ​LCSC (Shenzhen Jiali Chuang Electronic Commerce Co., Ltd.)

**Upload Files to LCSC/JLCPCB**

1.​Visit JLCPCB Order Page:

Go to https://jlcpcb.com and click ​​“Instant Quote”​.

2.​Upload Gerber File:

Drag and drop the .zip file into the upload area.
Wait for automatic file validation (green checkmark = success).

3.​Configure PCB Specifications:

​Quantity: Select number of boards (e.g., 5-50).
​Layers: Confirm layer count (e.g., 2 layers).
​Dimensions: Verify board size (auto-detected from Gerber).
​Material: Choose FR-4 standard.
​Thickness: Default 1.6mm (adjust if needed).
​Surface Finish: Select HASL (lead-free) or ENIG (for better durability).
​Silkscreen/Color: Choose white silkscreen on green solder mask (default).

4.​Add SMT Assembly (Optional):

Toggle ​​“SMT Assembly”​ if components need mounting.
Upload ​BOM and ​Pick-and-Place files.
Confirm LCSC part numbers match your design.

**Review and Confirm Order**

1.​Check Gerber Preview:

Use the interactive viewer to verify traces, drills, and silkscreen alignment.

2.​Calculate Cost:

The quote updates automatically based on quantity and options.

​3.Shipping & Payment:

Select shipping method (e.g., DHL, FedEx, or standard post).
Enter delivery address.
Pay via credit card, PayPal, or Alipay.

4.​Submit Order:

Click ​​“Save to Cart”​ and confirm payment.
![](https://unncfab.oss-cn-hangzhou.aliyuncs.com/img/zhao/20250318185508437.png)