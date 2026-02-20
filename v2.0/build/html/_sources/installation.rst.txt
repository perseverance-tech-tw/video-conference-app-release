Moil Meeting Installation Guide
===============================

This guide provides step-by-step instructions to install and run the **Moil Meeting** application.

.. contents::
   :local:
   :depth: 2


Operating System Requirements
-----------------------------

**Windows**

1. Download and install `OBS Studio <https://obsproject.com/download>`_ .
2. After installation, open OBS and click **Start Virtual Camera**.

.. figure:: _static/start_camera.png
   :alt: start camera
   :width: 100%
   :align: center

   Start Camera in OBS

   
3. To stop using OBS, simply close the application.


**Linux**

1. Disable **Secure Boot** in BIOS.
2. Install ``v4l2loopback`` with the following command:

   .. code-block:: bash

      sudo apt install v4l2loopback-dkms


User Installation Guide
-----------------------

Download Moil Meeting
~~~~~~~~~~~~~~~~~~~~~

- Go to the GitHub repository of `Video Conference <https://github.com/perseverance-tech-tw/video-conference-using-fisheye/releases/tag/v1.1.42>`_.
- Navigate to **Releases**.
- Download:

  - ``FisheyeVideoConferenceSystem-v1.1.6.exe`` for Windows
  - ``FisheyeVideoConferenceSystem-v1.1.6-linux.7z`` for Linux

.. figure:: _static/video_conference_repository.png
   :alt: video conference repository
   :width: 100%
   :align: center
   :class: bordered-image



Windows Installation
~~~~~~~~~~~~~~~~~~~~

1. Right-click the installer file → **Run as Administrator**.
2. Follow the wizard by clicking **Next**.
3. Choose installation directory → click **Next**.


.. figure:: _static/run_administrator.png
   :alt: run administrator
   :width: 60%
   :align: center


4. Wait for installation to complete.

.. figure:: _static/wait.png
   :alt: wait
   :width: 60%
   :align: center


You will find the program in the selected folder:


.. figure:: _static/run_app.png
   :alt: wait
   :width: 80%
   :align: center



- ``FisheyeVideoConference.exe`` → to run the app
- ``unins000`` → to uninstall


After everything is set up, you are ready to use the Fisheye Video Conference system.


.. figure:: _static/moil_app.png
   :alt: wait
   :width: 100%
   :align: center

   Moil Meeting Application


Linux Installation
~~~~~~~~~~~~~~~~~~

1. Extract the ``.7z`` archive.
2. Navigate into the extracted folder until you find ``install.sh`` and ``uninstall.sh``.
3. Run:

   .. code-block:: bash

      ./install.sh   # to install
      ./uninstall.sh # to uninstall

Once installed, the app will appear on your desktop.


.. figure:: _static/linux_app.png
   :alt: run administrator
   :width: 80%
   :align: center

   Linux Moil Meeting Application

Developer Installation Guide
----------------------------

Requirements:

- Ubuntu or Windows
- Python >= 3.7
- Git installed

Clone the Repository
~~~~~~~~~~~~~~~~~~~~

.. code-block:: bash

   git clone https://github.com/username/video-conference-using-fisheye.git
   cd video-conference-using-fisheye

Create Virtual Environment
~~~~~~~~~~~~~~~~~~~~~~~~~~
Before installing the library requirements, you should upgrade the existing PIP package to
the latest version. You can use the command:

.. code-block:: bash

    $ pip instal --upgrade pip

Check Python and pip:

.. code-block:: bash

   python --version
   pip --version

Create and activate venv:

- Windows:

  .. code-block:: bash

     python -m venv venv
     venv\Scripts\activate

- Linux/macOS:

  .. code-block:: bash

     python3 -m venv venv
     source venv/bin/activate

Install Requirements
~~~~~~~~~~~~~~~~~~~~

Install dependencies:

.. code-block:: bash

   pip install opencv-python pyvirtualcam ultralytics pygrabber mediapipe

Verify installation by importing packages in Python:

.. code-block:: python

   import cv2
   import pyvirtualcam
   import ultralytics
   import pygrabber
   import mediapipe 
   print("All packages loaded successfully!")


Then, install everything at once by running:

.. code-block:: bash

   pip install -r requirements.txt


Run the Application
~~~~~~~~~~~~~~~~~~~

Navigate to ``src`` folder and run:

.. code-block:: bash

   python main.py

Or open in **PyCharm**:

1. Open PyCharm → **Open Project** → select repository root.
2. Configure interpreter → choose virtual environment created earlier.
3. Run ``main.py``.

Now you can use **Video Conference Using Fisheye**.