# Video Conference Using Fisheye
## Outline

- [Need to Instal](#need-to-instal)
   - [OS Windows](#os-windows)
   - [OS Linux](#os-linux)

- [User Instalation Guide](#user-instalation-guide)
  - [Download and Instal Moil Meeting (OS Windows)](#download-and-instal-moil-meeting-os-windows)
  - [1. Install Program](#1-install-program)
  - [2. Uninstall Program](#2-uninstall-program)
  - [Download and Instal Moil Meeting (OS Linux)](#download-and-instal-moil-meeting-os-linux)
  - [1. Install and Uninstall Program](#1-install-and-uninstall-program)
----

## [Need to Instal](#outline)
### [OS Windows](#outline)
First, download [OBS Studio](https://obsproject.com/download) Once downloaded, proceed to install OBS on your device. Once the installation process is complete, open the OBS application and click the Start Virtual Camera button to begin. When you are finished using OBS, you can easily close the application. 

### [OS Linux](#outline)
-  First, Need to disable Secure Boot in BIOS. <br>
-  Second, Install **v4l2loopback** & **mpv** with this command in terminal .

```
sudo apt install v4l2loopback-dkms v4l2loopback-utils
```
```
sudo apt install mpv
```


## [User Instalation Guide](#outline)
 This guide provides step-by-step instructions to install and run the Moil Meeting on Windows. 

### [Download and Instal Moil Meeting (OS Windows)](#outline)
### [1. Install Program](#outline)
First,you can access GitHub at https://github.com/perseverance-tech-tw/video-conference-using-fisheye to get the necessary files. On the page, go to the lates releases section and download the file named wiht exstention .exe<br>
<img width="617" height="235" alt="image" src="https://github.com/user-attachments/assets/0bf18ce2-41c9-47dc-812d-3e7bf8370ec9" />

After downloading, run the file as an administrator by right-clicking and selecting Run as Administrator. Follow the installation steps by clicking Next, then choose the folder path where you want to save the program and click Next again. <br>
Wait for the installation process to complete. <br>
<img width="409" height="319" alt="image" align="center" src="https://github.com/user-attachments/assets/c2f43322-c419-47ea-9875-1f04d0a1dbb9" />

Once installed successfully, you can find the Fisheye Video 	
Conference system in the folder you selected earlier.<br>
<img width="395" height="311" alt="image" align="center" src="https://github.com/user-attachments/assets/c67cd3c9-415d-4bcd-90dd-8e7e57fe615e" />

After everything is set up, you are ready to use the FisheyeVideoConference system.<br>
<img width="679" height="370" alt="image" src="https://github.com/user-attachments/assets/62a726dc-ba47-4fdb-84b9-419b5a9477ff" />

### [2. Uninstall Program](#outline)
Inside the folder, you can open the FisheyeVideoConference application to start using it. There is also a file named unins000 which is used to uninstall the program if needed. <br>
<img width="425" height="247" alt="image" src="https://github.com/user-attachments/assets/8714ba9a-1b81-462a-84d9-65fe95e8a8b5" />

Or you can Uninstal by open Apps>Installed apps on your device for unistall the program
<img width="600" height="300" alt="image" src="https://github.com/user-attachments/assets/0449c706-cf2e-4f7c-92e4-a2150061f794" />


### [Download and Instal Moil Meeting (OS Linux)](#outline)
### [1. Install and Uninstall Program](#outline)
First,you can access GitHub at https://github.com/perseverance-tech-tw/video-conference-using-fisheye to get the necessary files. On the page, go to the lates releases section and download the file named with .7z extention. After downloading, extract the FisheyeVideoConference file. You can extract by double click the package. <br>
![WhatsApp Image 2025-07-28 at 11 33 41_e0da19b3](https://github.com/user-attachments/assets/91f39893-694c-4884-a95a-443f853f287c)

Once extracted, open the folder and continue opening subfolders until you find the install.sh and uninstall.sh files<br>
<img width="497" height="220" alt="image" src="https://github.com/user-attachments/assets/8b5ef408-6a0a-4537-ae8a-9ee92fe866ef" />

Next, open the terminal and run the following commands To install the application, type ./install.sh and press Enter. The system will begin the installation process. To uninstall the application, type ./uninstall.sh and press Enter.  <br>
<img width="352" height="163" alt="Screenshot from 2025-07-29 14-35-49" src="https://github.com/user-attachments/assets/5dc40fd5-ae49-4e35-b4bd-a84965f1a2bf" />
<img width="352" height="163" alt="Screenshot from 2025-07-29 14-36-38" src="https://github.com/user-attachments/assets/75b51889-7be1-4003-af84-0a3d451d091d" />


After running the install.sh script, the Fisheye Video Conference application will be installed. Simply wait a moment, and the app will appear on your desktop.  <br>
![WhatsApp Image 2025-07-28 at 11 39 41_39b17cf2](https://github.com/user-attachments/assets/16cd2b8d-4ab2-4655-9b97-d15992f18e97)
