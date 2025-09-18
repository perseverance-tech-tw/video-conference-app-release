Definition and Overview
=======================

What is the Moil Meeting
------------------------

**Moil Meeting** is an innovative video conferencing solution that leverages
MoilApp's high-quality fisheye image processing technology (Moildev SDK-based)
to produce panoramic and ultra-wide (up to 360°) views. Using a **single fisheye camera**, the system provides full room coverage and
dynamic participant tracking, offering a simpler, more flexible, and affordable
alternative to traditional multi-camera systems.

Key Features
------------

- **Original Mode**
- **Discussion Mode**
- **Global Mode**
- **Patrol Mode**
- **Presentation Mode**
- **AI Tracking** (available in all modes; can be turned ON/OFF)

What is Fisheye Lens Technology?
--------------------------------
The Fisheye lens, also known as the Fisheye Image Sensor (FIS), is a unique ultra-wide-angle lens with a short focal length that generates considerable optical distortion. It is designed to provide a wide, panoramic, or hemispherical image. The large field of view is the most important characteristic; with a FOV of more than 180 degrees, a Fisheye camera (also known as a Fisheye Image Sensor, or FIS) can capture a clear image, but with a greater barrel distortion. According to Professor Chuang-Jan Chang, the approach to displaying Fisheye camera images incorporates multi collimator metrology and cartography in order to methodically characterise the Fisheye camera's projection mechanism. The hemisphere coordinate system is produced by the Fisheye camera in our suggested technique. Hence, the position of an image point referring to the principal point on the image plane directly reflects its corresponding zenithal distance (a) and azimuthal distance (B) of the sight ray in space, in order to normalise the imaged point onto a small sphere presented in the following figure.


.. figure:: _static/view_angle.jpg
   :alt: view angle
   :width: 40%
   :align: center

Based on the coordinate system, the angles respectively defined by the incident rays and the optical axis are the **_zenithal angle (α)_** and the **_azimuthal angle (β)_**, which surround the optical axis. They have a relationship with the coordinate system X, Y, and Z, where the optical axis is defined by the Z-axis. The **_zenithal angle_** is the angle from the vertical optical axis to the X- and Y-axes, as shown in Figure 2. The **_azimuthal angle_** is defined as the angle of the positive Y axis as the reference point, with a value of 0°, and the Z-axis as the rotation axis, as shown in Figure 3. The rotation around the optical axis is the angle of the Y axis, starting from the positive direction and rotating clockwise around the X-axis.

.. figure:: _static/angle.jpg
   :alt: angle
   :width: 80%
   :align: center


.. note::

   The normalization + re-projection workflow (often described in metrology/cartography
   terms) is what enables Moil Meeting to deliver readable wide-angle views and flexible
   multi-view layouts from a single fisheye input.

Modes
=====

Original Mode
-------------
Original Mode serves to display the entire image from the fisheye camera without any cropping or display changes. This mode allows users to see the entire area recorded by the camera as a whole, making it easier for surveillance and monitoring with a wide scope of view.

.. figure:: _static/original_mode.png
   :alt: Original Mode
   :width: 80%
   :align: center

   *Original Mode*

Discussion Mode
---------------
The discussion mode provides features that facilitate interaction between participants with a flexible display. The Show Panorama feature allows users to view panoramic images that combine multiple camera angles into one wide view, so that the entire room and the activities in it can be seen thoroughly.
In addition, users can adjust the number of views displayed according to the needs of the discussion, with a choice of a customizable number of views and view position settings. With these features, discussions become more interactive and effective, as participants can see multiple viewpoints at once on one screen, supporting clearer and more dynamic communication.

.. figure:: _static/disscusion_mode.png
   :alt: Discussion Mode
   :width: 80%
   :align: center

   *Discussion Mode*

Global Mode
-----------
Global Mode in the Fisheye Video Conference System is a feature that enables connections between conference participants from various locations around the world. This mode is particularly useful for international business meetings, multinational team collaborations, or academic partnerships across countries. By using Global Mode, the system adjusts the camera's field of view to capture the entire room in a wide panoramic display, allowing remote participants to feel as if they are in the same physical space.
In the image shown, the room panorama is divided into two horizontal sections on the screen. This is a characteristic of the fisheye lens camera system, which captures the entire room in a circular view and then splits it for easier viewing. This split layout ensures that all physically present participants are clearly visible from multiple angles, so remote users connected via Global Mode can still observe everyone’s interactions and expressions comprehensively.

.. figure:: _static/global_mode.png
   :alt: Global Mode
   :width: 80%
   :align: center

   *Global Mode*

Patrol Mode
-----------
Patrol Mode provides a panoramic view that allows users to view the video thoroughly to the right and left. This mode is very useful for watching or monitoring a larger area in one screen without having to switch between cameras. With this feature, users can get a completer and more detailed picture, making supervision and coordination easier. In addition, Patrol Mode can also display images taken from Anypoint, which can be used to support presentations or discussions by displaying additional visual data in real-time.

.. figure:: _static/patrol_mode.png
   :alt: Patrol Mode
   :width: 80%
   :align: center

   *Patrol Mode*
With the combination of panoramic video and supporting images, Patrol Mode helps improve the effectiveness of communication and collaboration in meetings or surveillance.

Presentation Mode
-----------------

Presentation mode displays the part of Anypoint that you want to present clearly and in focus. Displaying the area of Anypoint you want to present ensures focus on the important parts during the presentation. With zoom and highlight features, the presenter can highlight important details to effectively convey the message. This mode also helps reduce surrounding visual distractions, so that the audience can more easily understand the material presented.

.. figure:: _static/presentation_mode.png
   :alt: Presentation Mode
   :width: 80%
   :align: center

   *Presentation Mode*

AI Tracking
-----------
The AI Tracking feature is available in all modes and works to automatically detect sound and motion. With this technology, the system can follow speakers or moving objects, making the conference experience more interactive and dynamic. AI Tracking helps ensure that the camera's focus is always on target, making communication and collaboration easier

.. figure:: _static/ai_tracking_on.png
   :alt: Presentation Mode
   :width: 30%
   :align: center
The AI Tracking feature can also be turned OFF at any time according to user needs, providing flexibility in presentation or discussion settings.

.. tip::

   For best results, combine AI Tracking with the mode that matches your meeting style:
   e.g., *Discussion Mode* for multi-participant panels or *Presentation Mode* for lectures.