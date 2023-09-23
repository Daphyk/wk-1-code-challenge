# wk-1-code-challenge
-This is the solution for week code challenge.
# Challenge 1: Student Grade Generator (Toy Problem)
Based on the marks entered, this program creates and shows student grades. It prompts the user to enter the student's marks between 0 and 100, and then provides the matching letter grade based on these criteria: 

* A: more than 79
* B: 60 to 70
* C: 59 to 49
* D: 40 to 49
* E: fewer than 40

# Getting started
* Run the program: Use javascript environment, such as the terminal, run node grade.js.
* Input: When the software is run, it will request the user to enter a student's grade between 0 and 100.
* Output: The program will generate the corresponding grade based on the provided marks and display it in an alert box.
* Validation: The program includes input validation to guarantee that the marks entered are within the defined range. If the input is invalid, the user will be prompted to submit valid marks. The program will keep prompting the user until proper marks are entered. Once legitimate marks have been input and the grade has been shown, the program will terminate.

# Challenge 2: Speed Detector (Toy Problem)
Speed Detector program detects demerit points based on the speed of a car. It asks the user to enter the car's speed in kilometers per hour (km/h), after which it generates and shows demerit points based on the criteria provided.

# Features
* Detects demerit points based on the cars's speed.
* Indicates whether the speed is within the legal limit or if demerit points have been accumulated.
* Validates user input to guarantee the entry of a proper speed.

# Getting started
* Run the program: run node speed-detector.js on terminal.
* Input: When the software is run, it will request the user to enter a cars's speed in km/h.
* Output: The program will generate and show any of the subsequent messages in accordance with the input speed:
** "OK": If your speed is below or equivalent to that of the authorized limit (70 km/h).
** "Points: X": If demerit points for speeding have been collected (up to a maximum of 12 points).
** "License suspended": If the motorist builds up beyond 12 demerit points, his or her license is suspended.
* Validation: The program includes input validation to guarantee that the speed entered is within the defined range. If the input is invalid, the user will be prompted to submit valid speed. The program will keep prompting the user until proper speed is entered. Once legitimate speed has been input and the message has been shown, the program will terminate.

When the application is executed, it will ask users to input the car's speed. Assume the user types "80 km/h." After that, the program will generate the demerit points and present the outcome using an alert, including "Points: 2."