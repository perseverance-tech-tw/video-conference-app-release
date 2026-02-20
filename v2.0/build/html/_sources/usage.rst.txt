Moil Meeting Of Usage
=====================


.. figure:: _static/operation.png
   :alt: operation
   :width: 100%
   :align: center

   Operation of The Moil Meeting Application

In this section, we will explain the components of the **MoilApp** application and provide tutorials on how to use the application.
Moil Meeting is a software application that users can utilize, and the referred session might be some kind of training session where the instructor will provide an overview of the various parts of the application and teach users how to use them effectively.


Operations of the Moil Meeting
==============================

Overview of Apps
~~~~~~~~~~~~~~~~

**Fisheye Video Conference System** is a video conferencing application designed with a simple and modern interface.
When the application is launched, the user is immediately taken to the main interface so that access to the main features becomes faster.
 
In the main view of the application, there are several working modes that users can select at the bottom of the screen:

- **Start Camera**: Enables the camera to begin video capture for all modes.
- **Original Mode**: The standard mode for video conferencing.
- **Discussion Mode**: A mode that supports interactive discussions between participants.
- **Global Mode**: A mode that may connect participants from different locations globally.
- **Patrol Mode**: A mode designed for active surveillance or monitoring.
- **Presentation Mode**: A mode that focuses on presentations, allowing users to optimally display materials.

The user interface will show the default main window, ready to run.

.. figure:: _static/overview.png
   :alt: overview
   :width: 100%
   :align: center

   Operation of The Moil Meeting Application

Quick Start
~~~~~~~~~~~

Welcome to **FisheyeVideoConference**, a smart and powerful solution designed to enhance your 360° video conferencing and surveillance experience.
Whether you're hosting a remote meeting, monitoring a wide-area space, or giving an interactive presentation, this application provides a flexible and intuitive platform tailored to meet a wide range of visual communication needs.
With its support for fisheye camera integration and multiple display modes, you can easily manage video feeds with clarity, precision, and control — all from a single interface.

After launching the FisheyeVideoConference application, you’ll be greeted with a clean and intuitive interface.

.. figure:: _static/start.png
   :alt: start
   :width: 100%
   :align: center


To get started, simply click the **Start Camera** button. There are three main options:
- **Open Camera** – Use the device’s built-in or connected camera.
- **Load Media** – Load a video from a local file.
- **Camera URL** – Access a camera via path camera URL.

.. figure:: _static/original_mode_view.png
   :alt: original_mode_video
   :width: 100%
   :align: center

   Original Mode

Each option allows you to configure parameters such as resolution, frame rate, and display settings.

.. figure:: _static/disscusion_mode_view.png
   :alt: disscusion_mode_view
   :width: 100%
   :align: center

   Disscusion Mode

Once initialization is successful, you will be directed to the **Original Mode**, which serves as the default view for your 360° or fisheye video. From here, you can switch between several advanced viewing modes depending on your needs: **Discussion Mode** – Ideal for meetings or group discussions.

.. figure:: _static/patrol_mode_view.png
   :alt: patrol_mode_view
   :width: 100%
   :align: center

   Patrol Mode

**Patrol Mode** – Perfect for automatic area surveillance.

.. figure:: _static/presentation_mode_view.png
   :alt: presentation_mode_view
   :width: 100%
   :align: center

   Presentation Mode

**Presentation Mode** – Focuses the view on presentations.


Start Camera and Stop Camera
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. figure:: _static/select_media_source_v2.png
   :alt: start_and_select.png
   :width: 100%
   :align: center

   Camera & Select Media Source

**Start Camera & Select Media Source** Click the **START CAMERA** button at the bottom of the screen. The Media Source Selection window will appear with options:

- **Open Camera**: Use connected camera devices.
- **Load Media**: Upload a video file from local storage.
- **Camera URL**: Enter a network/IP camera URL.
- **Token**: access camera parameters, a valid token is required. Ensure you are using a token with the appropriate access level (All Data or Limited Data).

After selecting your source, click **OK** to confirm or **Cancel** to exit.


.. figure:: _static/stop_play.png
   :alt: stop_play
   :width: 60%
   :align: center

   Stop & Play Camera

After selecting your preferred media source and configuring the necessary parameters, click the OK button to confirm and proceed. The application will then switch to Original Mode and display the selected media source. Once the camera has started successfully, additional options will become available:
- **Stop Camera**: Stops camera or video playback completely.
- **Pause Camera**: Temporarily pause the video stream.
- **Play Camera**: Resume from paused state.


Start Recording and Stop Recording
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- **Start Record**: Click *Start Recording*. A popup "Recording Started" confirms.

.. figure:: _static/recording.png
   :alt: recording
   :width: 60%
   :align: center

   Stop & Play Camera

- **Stop Record**: Click *Stop Recording*. A popup "Recording Finished" with file path confirms saved file.

.. figure:: _static/stop_record.png
   :alt: stop_record
   :width: 100%
   :align: center

   Start Record & Recording


Original Mode
~~~~~~~~~~~~~
Original Mode provides a complete **360-degree view** captured by a fisheye camera, displaying the original, unmodified video feed in a circular layout. This mode is designed to show the entire meeting room in one continuous frame, ensuring that no participant or activity is left out of view. It captures every angle within the space, making it especially useful in hybrid or remote meetings where attendees need full visibility of the physical room and everyone in it. This eliminates the need to manually adjust or switch between multiple cameras during the session.
For users, Original Mode enhances situational awareness and supports more inclusive and transparent communication. Whether it’s a team discussion, classroom setting, or boardroom meeting, this mode ensures that all participants—regardless of their position in the room—are visible at all times. It serves as an ideal default view before transitioning into more focused or interactive modes, such as speaker tracking or presentation layouts. By showing the entire environment in real time, Original Mode helps users feel more connected and aware during collaborative sessions.

.. figure:: _static/original.png
   :alt: original
   :width: 100%
   :align: center

   Original Mode


Discussion Mode
~~~~~~~~~~~~~~~~

.. figure:: _static/disscusion_newversion.png
   :alt: disscusion
   :width: 100%
   :align: center

   Disscusion Mode

Allows flexible multi-camera management.
Features:

- **Config Button**: Access advanced settings through the **Config Button**, which includes various camera and interface options such as **Camera Info**, **Reset**, **Panorama**, **Resolution**, **Original View**, **Increase & Scale UI**, and the ability to **Record Videos**. Additional features include **Camera Orientation** settings (*upside*, *front*, *downside*), a **Cache Feature** for **export**, **import**, and **reset**, as well as a **Viewlist** for managing and navigating multiple camera views or presets.

.. figure:: _static/config_v2.png
   :alt: config
   :width: 80%
   :align: center

   Config Button

- **Limit Person**: Select 2, 3, 4, 6, or 8 participants. Auto updates View List.

.. figure:: _static/limit_person.png
   :alt: limit person
   :width: 80%
   :align: center

   Limit Person and View List

- **View List**: Each view has pause, reorder, config controls. buttons:
   - **Pause Button**: Temporarily pauses the video feed for that specific view.
   - **Up and Down Button**: Used to change the order of the views by moving a view up or down the list.
   - **Configuration Button**: Opens settings for adjusting the position or other configurations for the selected view.

If the user selects Limit Person: 6, the system will generate 6 views to match the number of participants. Each participant's video will be displayed in an individual view 

- **Right-click menu**: In Discussion View Mode, right-clicking on any individual view will display a contextual menu with multiple options. Each of these options serves a specific purpose and is designed to support advanced view-level operations. 

.. figure:: _static/right_clicked_v2.png
   :alt: Right-clicked  view
   :width: 40%
   :align: center

   Right-clicked  view

These right-click functionalities are extremely useful for users who need more control, customization, or quick access to specific actions within a view. For a detailed explanation of each option available in the right-click menu.

- **Panorama Show/Hide**: Enable or disable panorama overlay.

The panorama feature provides a comprehensive view of the area surrounding the camera, making it easier to monitor the situation more broadly and efficiently during a video conference.

.. figure:: _static/panorama_hide.png
   :alt: Panorama Hide
   :width: 60%
   :align: center

   Panorama Hide

If you want to disable the panorama view, click the "Hide Panorama" button. This action will revert the display to the standard individual camera view. Use this option to simplify the layout or to focus more on specific participants without the panorama overlay.

.. figure:: _static/panorama_show.png
   :alt: Panorama show
   :width: 60%
   :align: center

   Panorama Show

- **AI Tracking**: Auto track active speaker.
- **Layout Slider**: Adjust size and arrangement of views.

.. figure:: _static/slider.png
   :alt: slider
   :width: 60%
   :align: center

   Slider

- **Video Playback**: The Video Playback feature offers four main functions: **Reverse Video**, **Reset Video**, **Forward Video**, and **Toggle Fullscreen**. Users can enter fullscreen mode by pressing **F11**, and exit it by pressing **Esc**. Additionally, a slider is provided to allow quick navigation through the video, making it easy to rewind or fast-forward to specific sections as needed.

.. figure:: _static/video_playback.png
   :alt: slider
   :width: 60%
   :align: center

   Video Playback

Global Mode
~~~~~~~~~~~

.. figure:: _static/global_mode.png
   :alt: global
   :width: 100%
   :align: center

   Global Mode

Displays **two global views simultaneously**:

- First view: wide-angle of room.
- Second view: alternative angle.

Includes config features: Camera Info, Flip, Panorama, Resolution, Reset, Original View.


Patrol Mode
~~~~~~~~~~~

.. figure:: _static/patrol_mode_v2.png
   :alt: patrol
   :width: 100%
   :align: center

   Patrol Mode

- Activated instantly.
- Slider allows resizing and repositioning views dynamically.
- Includes Global Mode configuration tools.


Presentation Mode
~~~~~~~~~~~~~~~~~

.. figure:: _static/presentation_mode_v2.png
   :alt: presentation
   :width: 100%
   :align: center

   Presentation Mode

- Click **Presentation**.
- Right-click → choose **Dialog Transformation** for clarity.
- Includes Global Mode config features and View List.


Configuration Panel
~~~~~~~~~~~~~~~~~~~
Accessed by **Config Button**:

- **Camera Information**: Model, parameters, FOV, resolution, open time, user, version. If a newer version of the system is available, a Download New Version button will appear automatically.

.. figure:: _static/camera_information_v2.png
   :alt: information
   :width: 80%
   :align: center

   Camera Information

- **View Number Show/Hide**: The 'View Number' feature is designed to display labels for each camera view. This feature allows users to show or hide labels across all views.

.. figure:: _static/view_number_v2.png
   :alt: view_number
   :width: 80%
   :align: center

   Show View Number

.. figure:: _static/hide_view_number_v2.png
   :alt: hide view_number
   :width: 80%
   :align: center

   Hide View Number

- **Reset Label Default**: The 'Reset Label Default' feature restores all edited labels to their original settings, including the label name, font size, and label position.

.. figure:: _static/reset.png
   :alt: reset
   :width: 80%
   :align: center

   Reset Label Default

- **Flip Camera (Upside/Downside)**: The 'Flip Camera' feature allows users to adjust the camera view on the system according to the direction of the camera used. This feature offers two camera orientation options: downside and upside.


- **Panorama Config**: The 'Panorama Config' feature allows users to adjust the configuration in the panorama view, where users can set values for alpha max, alpha, beta, crop top, crop bottom, crop left, and crop right. Additionally, users can pause, flip horizontally, flip vertically, and reset the flip settings.
   
   **1. Alpha Max, Alpha, Beta**
      These three parameters form a group of settings used to control the viewing angle in the panorama.
      
      •	**Alpha Max**: Defines the maximum limit of horizontal rotation.
      •	**Alpha**: Controls the horizontal angle (pan) of the panorama view.
      •	**Beta**: Controls the vertical angle (tilt) of the panorama view.


      These settings are useful for adjusting the position of the virtual camera within the panorama space, allowing users to focus on specific areas of the display.


   **2. Top, Bottom, Left, Right**
      
      These parameters are used to crop certain parts of the panorama display:

      •	**Crop Top**: Crops the top part of the image.
      •	**Crop Bottom**: Crops the bottom part of the image.
      •	**Crop Left**: Crops the left side of the image.
      •	**Crop Right**: Crops the right side of the image.


      The crop feature is especially useful for removing unwanted areas from the panorama or narrowing the focus to a more specific section.

   **3. Pause**
      This button is used to **temporarily stop (pause)** the video display. It is useful when users want to adjust the view without the video continuously playing in the background.
   
   **4. Flip Vertical**
      This feature flips the view from top to bottom, allowing users to adjust the view orientation based on their preferences.
   
   **5. Flip Horizontal**
      This feature **flips the view from left to right**. It is helpful if the image appears mirrored or needs to be corrected.

   **6. Reset Flip**
      This button resets any flip settings applied and restores the view to its default (original) orientation.
      

- **Resolution Config**
   The 'Resolution Config' feature is used to adjust the resolution for each view in the application. Several resolution options are available, which can be customized to meet the user's needs.
       
.. figure:: _static/resolution_v2.png
   :alt: resolution
   :width: 80%
   :align: center

   Resolution Configuration     
   
-  **Original View Window**
   The 'Original View Window' feature allows the application to open a new window dedicated to displaying the original video, enabling users to view the original video in a separate window while making configurations in the application.

   .. figure:: _static/original_image_window.png
      :alt: original_mode_window
      :width: 80%
      :align: center

      Original Image Window

-  **Scale UI**
   In the user interface (UI) scale settings, there are two available options: Increase Scale UI and Decrease Scale UI. The Increase Scale UI option is used to enlarge the system display size or increase the UI scale, making the elements on the screen appear larger. Conversely, if the user wants to reduce the display size, they can use the Decrease Scale UI option to lower the UI scale as needed.
   
         **1. Increase Scale UI**

         .. figure:: _static/increase_v2.png
            :alt: original_mode_window
            :width: 80%
            :align: center

            Increase Scale UI

         **2. Decrease Scale UI**

         .. figure:: _static/increase_v2.png
            :alt: increase_scale_ui
            :width: 80%
            :align: center

            Increase Scale UI
            
-  **Record Video**
   Record Video is used to view the list of recorded videos that have been created. Through this feature, users can access and replay previously saved videos. The record video list also includes Refresh and Sort by Newest First options, allowing users to update the list and easily view the most recent recordings at the top.
   
   .. figure:: _static/Record_Video.png
      :alt: Record_video
      :width: 80%
      :align: center

      Record Video List

-  **Camera Orientation**
   Camera Orientation includes three options: Upside, Front, and Downside. These options allow users to adjust the camera's viewing direction based on their needs or the physical placement of the camera.
   
   .. figure:: _static/camera_orientation.png
      :alt: camera_orientation
      :width: 40%
      :align: center

      Camera Orientation

-  **Cache Feature**
   The Cache feature includes three functions: Reset, and Import & Export. These functions help manage cached data to improve performance, restore default settings, and transfer cache files as needed.
   
   .. figure:: _static/cache_feature.png
      :alt: cache feature
      :width: 40%
      :align: center

      Cache Feature


Right-Clicked Features
----------------------
The Mouse Press Event is a versatile feature available across all modes of the system, including Original Mode, Discussion Mode, Global Mode, Patrol Mode, and Presentation Mode. This feature enhances user interaction by responding to various mouse actions, making navigation and control much easier and more intuitive. The Mouse Press Event supports multiple types of mouse inputs such as right-click, scroll up, scroll down, double click, and drag and drop. Mouse Press Event is an essential interactive feature that works consistently across all modes, providing users with flexible and efficient.          
Available in all modes:

.. figure:: _static/right_clicked_v2.png
            :alt: Right-clicked
            :width: 40%
            :align: center

            Right clicked

- **View Information**: Model, parameters, FOV, resolution, open time, user, version. If a newer version of the system is available, a Download New Version button will appear automatically.

.. figure:: _static/camera_information_v2.png
            :alt: Information
            :width: 80%
            :align: center

            View information

- **Save Image As**: The 'Save Image As' feature allows users to save the image from the selected view, with the option to choose the desired storage location.

.. figure:: _static/save_image_v2.png
            :alt: save_image
            :width: 80%
            :align: center

            Save Image

- **Show Original Image**: The 'Show Original Image' feature displays the original image of the selected view and allows users to return to the previous view.

.. figure:: _static/show_original.png
            :alt: show original
            :width: 100%
            :align: center
            
            Show and Hide Original Image     

- **Show Original View Window**: The Show Original View Window feature displays the original image of the selected view in a separate window, allowing users to compare it with the current view and easily return to their previous configuration.

.. figure:: _static/original_v2.png
            :alt: show window
            :width: 100%
            :align: center

            Show Original View Window


- **Pause View**: The 'Pause View' feature stops the selected video and allows it to be resumed.

.. figure:: _static/pause_resume_v2.png
            :alt: pause_and_resume
            :width: 80%
            :align: center

            Pause and Resume View

- **Configuration View Setting**: The Configuration View Setting menu is used to adjust the camera view that has been transformed from the Original View (fisheye lens view) into a more readable Anypoint View. This menu provides several essential features:

   .. figure:: _static/configuration_v2.png
               :alt: configuration
               :width: 100%
               :align: center

               Cofiguration view


   **1. Alpha Max, Alpha, Beta**
      These three parameters form a group of settings used to control the viewing angle in the panorama.
      
      •	**Alpha Max**: Defines the maximum limit of horizontal rotation.
      •	**Alpha**: Controls the horizontal angle (pan) of the panorama view.
      •	**Beta**: Controls the vertical angle (tilt) of the panorama view.


      These settings are useful for adjusting the position of the virtual camera within the panorama space, allowing users to focus on specific areas of the display.

   **2. Top, Bottom, Left, Right**
      These parameters are used to crop certain parts of the panorama display:

      •	**Crop Top**: Crops the top part of the image.
      •	**Crop Bottom**: Crops the bottom part of the image.
      •	**Crop Left**: Crops the left side of the image.
      •	**Crop Right**: Crops the right side of the image.

      The crop feature is especially useful for removing unwanted areas from the panorama or narrowing the focus to a more specific section.

   **3. Pause**
      This button is used to **temporarily stop (pause)** the video display. It is useful when users want to adjust the view without the video continuously playing in the background.
   
   **4. Flip Vertical**
      This feature flips the view from top to bottom, allowing users to adjust the view orientation based on their preferences.
   
   **5. Flip Horizontal**
      This feature **flips the view from left to right**. It is helpful if the image appears mirrored or needs to be corrected.

   **6. Reset Flip**
      This button resets any flip settings applied and restores the view to its default (original) orientation.
      
   **7. Transformation**
      The 'Transformation' feature allows users to adjust the view of the fisheye lens to a more readable Anypoint View. This feature is particularly useful for transforming the fisheye lens view into a more standard perspective, making it easier to read and understand the content. 

   **8. Lock AI**
      The 'Lock AI' feature allows users to lock the AI focus on a specific area of the view. This is particularly useful when users want to keep a certain area in focus while adjusting other settings or views.

   **9. Edit Label** 
     This feature allows users to edit or add labels to the view, making it easier to identify.

            .. figure:: _static/edit_label.png
                     :alt: edit_label
                     :width: 80%
                     :align: center

                     Edit label

   **10. Adjusted Transform**
         This feature is designed to help you focus more easily on a specific object by allowing customized transformation adjustments as needed. When you activate the transform, the original appearance of the object (before any transformation) will appear in the corner as a reference, allowing you to compare the changes with the original version. If you wish to revert back to the initial state, simply press the Reset button to discard all adjustments and restore the object to its original form.
         
            .. figure:: _static/adjust_transform_v2.png
                     :alt: adjust_transform
                     :width: 80%
                     :align: center

                     adjust_transform

.. note::

   Mouse Press Event enhances navigation and control across all modes.


Mouse Press Events
------------------
- **Mouse Drag**: The feature allows users to drag the mouse to select a desired region easily and switch between maps seamlessly, enhancing navigation and interaction within the application.

.. figure:: _static/mouse_drag.png
            :alt: mouse_drag
            :width: 100%
            :align: center
      
            Mouse drag

- **Double-clicked**: When the selection view is double-clicked, the view will expand to display the selected area in full-screen mode, allowing users to focus entirely on the chosen content.

.. figure:: _static/double_clicked.png
               :alt: double_clicked
               :width: 100%
               :align: center
      
               Double-clicked
 

- **Scroll Up/Down**: The zoom in and zoom out feature allows users to easily control the view by using the mouse scroll wheel, enabling precise adjustments to the zoom level. By simply scrolling the mouse while pointing at the desired area, users can quickly zoom in to get a closer look or zoom out to see a broader perspective. This intuitive control enhances the overall user experience by making navigation smoother and more efficient, allowing users to focus on specific details or get an overview without needing additional buttons or controls.

.. figure:: _static/scroll_up_down.png
            :alt: scroll_up_down
            :width: 100%
            :align: center
      
            Scroll Up and Down


.. tip::

   Use **Transformation** and **Adjusted Transform** to focus on specific objects while still referencing the original image.