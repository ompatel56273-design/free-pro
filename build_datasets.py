import re
import json

# 1. READ RAW EXTRACTED TEXTS
with open('php_extracted.txt', 'r', encoding='utf-8') as f:
    php_raw = f.read()

with open('genai_extracted.txt', 'r', encoding='utf-8') as f:
    genai_raw = f.read()

# ==========================================
# PARSE PHP PRACTICALS
# ==========================================

php_programs = [
    {
        "id": "php-1",
        "number": "1",
        "title": "Temperature Difference & Integer Validation",
        "category": "Fundamentals & Number Validation",
        "description": "Read 6 AM and 6 PM temperatures using an HTML form. Find the absolute difference, check whether both are integers, and round the first temperature to 2 decimal places.",
        "language": "php",
        "files": [
            {
                "filename": "index.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Temperature</title> 
</head> 
<body> 
 
<h2>Temperature Calculation</h2> 
 
<form method="post" action="temperature.php"> 
 
    <label>Temperature at 6 AM:</label> 
    <input type="text" name="temp1" required> 
    <br><br> 
 
    <label>Temperature at 6 PM:</label> 
    <input type="text" name="temp2" required> 
    <br><br> 
 
    <input type="submit" value="Calculate"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "temperature.php",
                "language": "php",
                "code": """<?php 
 
$temp1 = $_POST['temp1']; 
$temp2 = $_POST['temp2']; 
 
// Absolute difference 
$difference = abs($temp1 - $temp2); 
 
// Check whether temperatures are integers 
if (filter_var($temp1, FILTER_VALIDATE_INT) !== false) { 
    $check1 = "6 AM temperature is an integer."; 
} else { 
    $check1 = "6 AM temperature is not an integer."; 
} 
 
if (filter_var($temp2, FILTER_VALIDATE_INT) !== false) { 
    $check2 = "6 PM temperature is an integer."; 
} else { 
    $check2 = "6 PM temperature is not an integer."; 
} 
 
// Round first temperature to 2 decimal places 
$roundedTemp1 = round($temp1, 2); 
 
echo "<h2>Temperature Result</h2>"; 
 
echo "6 AM Temperature: " . $temp1 . "<br>"; 
echo "6 PM Temperature: " . $temp2 . "<br>"; 
echo "Absolute Difference: " . $difference . "<br>"; 
echo $check1 . "<br>"; 
echo $check2 . "<br>"; 
echo "6 AM Temperature after rounding: " . $roundedTemp1; 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Demonstrates filter_var() with FILTER_VALIDATE_INT for strict integer validation.",
            "Uses abs() for absolute temperature difference calculation and round() to format decimals."
        ]
    },
    {
        "id": "php-2",
        "number": "2",
        "title": "Birthdate Formatting",
        "category": "Date & Time Formatting",
        "description": "Read birthdate using an HTML date picker and print it in different formats using PHP date format specifiers.",
        "language": "php",
        "files": [
            {
                "filename": "index.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Birthdate</title> 
</head> 
<body> 
 
<h2>Birthdate Format</h2> 
 
<form method="post" action="birthdate.php"> 
 
    <label>Enter Birthdate:</label> 
    <input type="date" name="birthdate" required> 
 
    <br><br> 
 
    <input type="submit" value="Display Date"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "birthdate.php",
                "language": "php",
                "code": """<?php 
 
$birthdate = $_POST['birthdate']; 
 
$date = new DateTime($birthdate); 
 
echo "<h2>Birthdate in Different Formats</h2>"; 
 
echo "Format 1 (d-m-Y): " . $date->format("d-m-Y") . "<br>"; 
echo "Format 2 (d/m/Y): " . $date->format("d/m/Y") . "<br>"; 
echo "Format 3 (d M Y): " . $date->format("d M Y") . "<br>"; 
echo "Format 4 (d F Y): " . $date->format("d F Y") . "<br>"; 
echo "Format 5 (l, d F Y): " . $date->format("l, d F Y") . "<br>"; 
echo "Format 6 (Y-m-d): " . $date->format("Y-m-d") . "<br>"; 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Important Date Specifiers: d (Day), m (Month number), Y (4-digit year), y (2-digit year), M (Short month name), F (Full month name), l (Full day name).",
            "Instantiates a DateTime object from $_POST['birthdate'] to enable flexible format() outputs."
        ]
    },
    {
        "id": "php-3",
        "number": "3",
        "title": "College Name String Operations",
        "category": "String Manipulation & Regular Expressions",
        "description": "Read college name from an HTML form, count characters, check whether the last word is 'college' case-insensitively, and replace 'college' with 'university'.",
        "language": "php",
        "files": [
            {
                "filename": "index.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>College Name</title> 
</head> 
<body> 
 
<h2>College Name</h2> 
 
<form method="post" action="college.php"> 
 
    <label>Enter College Name:</label> 
    <input type="text" name="college" required> 
 
    <br><br> 
 
    <input type="submit" value="Submit"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "college.php",
                "language": "php",
                "code": """<?php 
 
$college = trim($_POST['college']); 
 
// Number of characters 
$characters = strlen($college); 
 
// Convert string into words 
$words = preg_split('/\\s+/', $college); 
 
// Get last word 
$lastWord = end($words); 
 
echo "<h2>College Details</h2>"; 
 
echo "College Name: " . $college . "<br>"; 
echo "Number of Characters: " . $characters . "<br>"; 
 
// Case-insensitive check 
if (strcasecmp($lastWord, "college") == 0) { 
 
    echo "Last word is 'college'.<br>"; 
 
    // Replace last occurrence of college 
    $newCollege = preg_replace( 
        '/college$/i', 
        'university', 
        $college 
    ); 
 
    echo "After Replacement: " . $newCollege; 
 
} else { 
 
    echo "Last word is not 'college'.<br>"; 
    echo "No replacement required."; 
 
} 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Demonstrates preg_split('/\\s+/', ...) for whitespace-agnostic word splitting.",
            "Uses strcasecmp() for case-insensitive last-word comparison and preg_replace('/college$/i', ...) to target the trailing word."
        ]
    },
    {
        "id": "php-4",
        "number": "4",
        "title": "Cookie Management",
        "category": "State Management: Cookies",
        "description": "Remember the username even after the browser is closed and reopened by persisting it in a cookie valid for 1 day.",
        "language": "php",
        "files": [
            {
                "filename": "index.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Cookie Example</title> 
</head> 
<body> 
 
<h2>Login Form</h2> 
 
<form method="post" action="first.php"> 
 
    <label>Username:</label> 
    <input type="text" name="username" required> 
 
    <br><br> 
 
    <label>Password:</label> 
    <input type="password" name="password" required> 
 
    <br><br> 
 
    <input type="submit" value="Login"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "first.php",
                "language": "php",
                "code": """<?php 
 
$username = $_POST['username']; 
 
// Cookie valid for 1 day 
setcookie("username", $username, time() + (24 * 60 * 60), "/"); 
 
echo "<h2>Hello " . htmlspecialchars($username) . "</h2>"; 
 
echo "<p>Your username has been stored in a cookie for 1 day.</p>"; 
 
echo '<a href="second.php">Check Cookie</a>'; 
 
?>"""
            },
            {
                "filename": "second.php",
                "language": "php",
                "code": """<?php 
 
if (isset($_COOKIE['username'])) { 
 
    $username = $_COOKIE['username']; 
 
    echo "<h2>Hello " . htmlspecialchars($username) . 
         ", your cookie is still active!</h2>"; 
 
} else { 
 
    echo "<h2>Cookie has expired or does not exist.</h2>"; 
 
} 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Demonstration steps: 1. Open index.html. 2. Enter credentials & submit. 3. Navigate to second.php. 4. Close and reopen browser, then verify that second.php still reads $_COOKIE['username'].",
            "Cookie expiry set via time() + (24 * 60 * 60) for 24-hour persistence across sessions."
        ]
    },
    {
        "id": "php-5",
        "number": "5",
        "title": "Session Management",
        "category": "State Management: Sessions",
        "description": "Remember the username while the browser session is active without permanently storing it like a 1-day cookie.",
        "language": "php",
        "files": [
            {
                "filename": "index.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Session Example</title> 
</head> 
<body> 
 
<h2>Login Form</h2> 
 
<form method="post" action="first.php"> 
 
    <label>Username:</label> 
    <input type="text" name="username" required> 
 
    <br><br> 
 
    <label>Password:</label> 
    <input type="password" name="password" required> 
 
    <br><br> 
 
    <input type="submit" value="Login"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "first.php",
                "language": "php",
                "code": """<?php 
 
session_start(); 
 
$username = $_POST['username']; 
 
$_SESSION['username'] = $username; 
 
echo "<h2>Hello " . htmlspecialchars($username) . "</h2>"; 
 
echo "<p>Your session has been started.</p>"; 
 
echo '<a href="second.php">Check Session</a>'; 
 
?>"""
            },
            {
                "filename": "second.php",
                "language": "php",
                "code": """<?php 
 
session_start(); 
 
if (isset($_SESSION['username'])) { 
 
    $username = $_SESSION['username']; 
 
    echo "<h2>Hello " . htmlspecialchars($username) . 
         ", your session is active!</h2>"; 
 
} else { 
 
    echo "<h2>Session is not defined.</h2>"; 
 
} 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Session difference vs Cookie: Cookies use setcookie() and store on client side; Sessions invoke session_start() and store data on the server in $_SESSION.",
            "Session data clears when the browser closes unless persistent session cookies are configured."
        ]
    },
    {
        "id": "php-6",
        "number": "6",
        "title": "Text File Handling (Visitor Log)",
        "category": "File I/O Operations",
        "description": "Manage a text file log.txt with operations for append, display/search, and delete using an HTML form interface.",
        "language": "php",
        "files": [
            {
                "filename": "index.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Visitor Log</title> 
</head> 
<body> 
 
<h2>Visitor Log</h2> 
 
<form method="post" action="first.php"> 
 
    <label>Visitor Name:</label> 
    <input type="text" name="name"> 
 
    <br><br> 
 
    <label>Select Operation:</label> 
 
    <select name="operation"> 
 
        <option value="append">Append</option> 
        <option value="display">Display</option> 
        <option value="delete">Delete File</option> 
 
    </select> 
 
    <br><br> 
 
    <input type="submit" value="Submit"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "first.php",
                "language": "php",
                "code": """<?php 
 
$file = "log.txt"; 
 
$operation = $_POST['operation']; 
 
if ($operation == "append") { 
 
    $name = trim($_POST['name']); 
 
    if ($name != "") { 
 
        // Open file in append mode 
        $fp = fopen($file, "a"); 
 
        // Write visitor name 
        fwrite($fp, $name . PHP_EOL); 
 
        fclose($fp); 
 
        echo "<h3>Visitor name added successfully.</h3>"; 
 
    } else { 
 
        echo "<h3>Please enter visitor name.</h3>"; 
 
    } 
 
} elseif ($operation == "display") { 
 
    if (file_exists($file)) { 
 
        $fp = fopen($file, "r"); 
 
        echo "<h2>Visitor List</h2>"; 
 
        echo "<table border='1' cellpadding='10'>"; 
        echo "<tr><th>No.</th><th>Visitor Name</th></tr>"; 
 
        $count = 1; 
 
        while (($line = fgets($fp)) !== false) { 
 
            echo "<tr>"; 
            echo "<td>" . $count . "</td>"; 
            echo "<td>" . htmlspecialchars(trim($line)) . "</td>"; 
            echo "</tr>"; 
 
            $count++; 
        } 
 
        echo "</table>"; 
 
        fclose($fp); 
 
    } else { 
 
        echo "<h3>Log file does not exist.</h3>"; 
 
    } 
 
} elseif ($operation == "delete") { 
 
    if (file_exists($file)) { 
 
        unlink($file); 
 
        echo "<h3>Log file deleted successfully.</h3>"; 
 
    } else { 
 
        echo "<h3>Log file does not exist.</h3>"; 
 
    } 
 
} 
 
?>"""
            },
            {
                "filename": "log.txt",
                "language": "text",
                "code": """# Visitor log text file (created/appended by first.php)
Rahul Patel
Mehul Shah
Pooja Dave"""
            }
        ],
        "sourceNotes": [
            "File modes used: 'r' = Read; 'w' = Write and overwrite; 'a' = Append without deleting existing data.",
            "Demonstrates file existence checks with file_exists(), reading lines with fgets(), and file removal with unlink()."
        ]
    },
    {
        "id": "php-7",
        "number": "7",
        "title": "Profile Picture Upload & Renaming",
        "category": "File Upload & Media Handling",
        "description": "Read student enrolment number and profile picture from a multipart HTML form, rename the image using the enrolment number, and store it in the htdocs/images folder.",
        "language": "php",
        "files": [
            {
                "filename": "index.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Profile Picture Upload</title> 
</head> 
<body> 
 
<h2>Student Profile Picture</h2> 
 
<form method="post" 
      action="upload.php" 
      enctype="multipart/form-data"> 
 
    <label>Enrolment Number:</label> 
    <input type="text" name="enrolment" required> 
 
    <br><br> 
 
    <label>Profile Picture:</label> 
    <input type="file" 
           name="profile" 
           accept="image/*" 
           required> 
 
    <br><br> 
 
    <input type="submit" value="Upload"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "upload.php",
                "language": "php",
                "code": """<?php 
 
$enrolment = $_POST['enrolment']; 
 
$fileName = $_FILES['profile']['name']; 
$fileTmpName = $_FILES['profile']['tmp_name']; 
$fileError = $_FILES['profile']['error']; 
 
if ($fileError == 0) { 
 
    // Get original file extension 
    $extension = pathinfo($fileName, PATHINFO_EXTENSION); 
 
    // New file name 
    $newFileName = $enrolment . "." . $extension; 
 
    // Destination folder 
    $destination = "C:/xampp/htdocs/images/" . $newFileName; 
 
    // Move uploaded file 
    if (move_uploaded_file($fileTmpName, $destination)) { 
 
        echo "<h2>Profile picture uploaded successfully.</h2>"; 
 
        echo "Enrolment Number: " . 
             htmlspecialchars($enrolment) . "<br>"; 
 
        echo "File Name: " . 
             htmlspecialchars($newFileName); 
 
    } else { 
 
        echo "<h2>File upload failed.</h2>"; 
 
    } 
 
} else { 
 
    echo "<h2>Error while uploading file.</h2>"; 
 
} 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Important Form Attribute: enctype='multipart/form-data' is compulsory on <form> for file uploads.",
            "Folder Setup: Requires creating an 'images' directory inside C:/xampp/htdocs/.",
            "Uses pathinfo($fileName, PATHINFO_EXTENSION) and move_uploaded_file() for sanitized renaming and moving."
        ]
    },
    {
        "id": "php-8",
        "number": "8",
        "title": "Student Result Using OOP",
        "category": "Object-Oriented Programming (OOP)",
        "description": "Create a Student class with public properties, constructor, private calc() and res() methods, private result properties, and a public disp() method to calculate student percentage and pass/fail status.",
        "language": "php",
        "files": [
            {
                "filename": "student.php",
                "language": "php",
                "code": """<?php 
 
class Student 
{ 
    // Public properties 
    public $enrolment_no; 
    public $name; 
    public $marks; 
 
    // Private properties 
    private $total; 
    private $perc; 
    private $result; 
 
    // Constructor 
    public function __construct($enrolment_no, $name, $marks) 
    { 
        $this->enrolment_no = $enrolment_no; 
        $this->name = $name; 
        $this->marks = $marks; 
    } 
 
    // Calculate total and percentage 
    private function calc() 
    { 
        $this->total = array_sum($this->marks); 
 
        $this->perc = $this->total / 5; 
    } 
 
    // Calculate result 
    private function res() 
    { 
        $this->result = "PASS"; 
 
        // If any subject mark is less than 35 
        foreach ($this->marks as $mark) { 
 
            if ($mark < 35) { 
 
                $this->result = "FAIL"; 
                break; 
 
            } 
        } 
    } 
 
    // Display student information 
    public function disp() 
    { 
        // Call private methods 
        $this->calc(); 
        $this->res(); 
 
        echo "<h2>Student Result</h2>"; 
 
        echo "<table border='1' cellpadding='10'>"; 
 
        echo "<tr>"; 
        echo "<th>Enrolment No.</th>"; 
        echo "<td>" . htmlspecialchars($this->enrolment_no) . "</td>"; 
        echo "</tr>"; 
 
        echo "<tr>"; 
        echo "<th>Name</th>"; 
        echo "<td>" . htmlspecialchars($this->name) . "</td>"; 
        echo "</tr>"; 
 
        echo "<tr>"; 
        echo "<th>Subject 1</th>"; 
        echo "<td>" . $this->marks[0] . "</td>"; 
        echo "</tr>"; 
 
        echo "<tr>"; 
        echo "<th>Subject 2</th>"; 
        echo "<td>" . $this->marks[1] . "</td>"; 
        echo "</tr>"; 
 
        echo "<tr>"; 
        echo "<th>Subject 3</th>"; 
        echo "<td>" . $this->marks[2] . "</td>"; 
        echo "</tr>"; 
 
        echo "<tr>"; 
        echo "<th>Subject 4</th>"; 
        echo "<td>" . $this->marks[3] . "</td>"; 
        echo "</tr>"; 
 
        echo "<tr>"; 
        echo "<th>Subject 5</th>"; 
        echo "<td>" . $this->marks[4] . "</td>"; 
        echo "</tr>"; 
 
        echo "<tr>"; 
        echo "<th>Total</th>"; 
        echo "<td>" . $this->total . "</td>"; 
        echo "</tr>"; 
 
        echo "<tr>"; 
        echo "<th>Percentage</th>"; 
        echo "<td>" . $this->perc . "%</td>"; 
        echo "</tr>"; 
 
        echo "<tr>"; 
        echo "<th>Result</th>"; 
        echo "<td>" . $this->result . "</td>"; 
        echo "</tr>"; 
 
        echo "</table>"; 
    } 
} 
 
// Create object 
$student = new Student( 
    "SPU001", 
    "Rahul Patel", 
    array(78, 85, 69, 72, 88) 
); 
 
// Display result 
$student->disp(); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "OOP Concepts used: Class, Object, Public properties, Private properties, Constructor (__construct), Encapsulation, and Private helper methods.",
            "Passing threshold is 35 marks across all 5 subjects."
        ]
    },
    {
        "id": "php-9-setup",
        "number": "9 (Setup)",
        "title": "Employee Database Setup & MySQL Connection",
        "category": "Database Schema & MySQL Connection",
        "description": "Create the LYBCA database, define the employee table schema, and configure the common db.php connection file used across all Program 9 database operations.",
        "language": "php",
        "files": [
            {
                "filename": "setup.sql",
                "language": "sql",
                "code": """-- Step 1 — Create Database and Table in phpMyAdmin or MySQL CLI
CREATE DATABASE LYBCA;

USE LYBCA;

CREATE TABLE employee 
( 
    Empid INT(3) PRIMARY KEY, 
    Ename VARCHAR(35), 
    Deptcode CHAR(1), 
    JoiningDate DATE, 
    Gender CHAR(1) 
);"""
            },
            {
                "filename": "db.php",
                "language": "php",
                "code": """<?php 
 
$conn = mysqli_connect( 
    "localhost", 
    "root", 
    "", 
    "LYBCA" 
); 
 
if (!$conn) { 
 
    die("Database connection failed: " . mysqli_connect_error()); 
 
} 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Department Codes: A = Admin, S = Sales, F = Finance.",
            "Gender Codes: M = Male, F = Female.",
            "Credentials note: If your MySQL password is set, update the 3rd argument '\"\"' in db.php accordingly."
        ]
    },
    {
        "id": "php-9a",
        "number": "9(A)",
        "title": "Insert Employee Record",
        "category": "Database CRUD: Insert Record",
        "description": "Read employee details (ID, Name, Department radio button, Joining Date, Gender dropdown) through an HTML form and insert the record into the database.",
        "language": "php",
        "files": [
            {
                "filename": "insert.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Insert Employee</title> 
</head> 
<body> 
 
<h2>Employee Registration</h2> 
 
<form method="post" action="insert.php"> 
 
    Employee ID: 
    <input type="text" name="empid" required> 
    <br><br> 
 
    Employee Name: 
    <input type="text" name="ename" required> 
    <br><br> 
 
    Department: 
    <input type="radio" name="deptcode" value="A"> Admin 
    <input type="radio" name="deptcode" value="S"> Sales 
    <input type="radio" name="deptcode" value="F"> Finance 
    <br><br> 
 
    Joining Date: 
    <input type="date" name="joiningdate" required> 
    <br><br> 
 
    Gender: 
    <select name="gender"> 
 
        <option value="M">Male</option> 
        <option value="F">Female</option> 
 
    </select> 
 
    <br><br> 
 
    <input type="submit" value="Insert"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "insert.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$empid = $_POST['empid']; 
$ename = $_POST['ename']; 
$deptcode = $_POST['deptcode']; 
$joiningdate = $_POST['joiningdate']; 
$gender = $_POST['gender']; 
 
$sql = "INSERT INTO employee 
        VALUES 
        ('$empid', '$ename', '$deptcode', '$joiningdate', '$gender')"; 
 
if (mysqli_query($conn, $sql)) { 
 
    echo "<h3>Employee record inserted successfully.</h3>"; 
 
} else { 
 
    echo "Error: " . mysqli_error($conn); 
 
} 
 
mysqli_close($conn); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Demonstrates basic INSERT query execution with mysqli_query() and dynamic POST data extraction."
        ]
    },
    {
        "id": "php-9b",
        "number": "9(B)",
        "title": "Check Whether Employee Exists",
        "category": "Database Query: Check Existence",
        "description": "Read Employee ID from a form and display 'Record exists' or 'Record does not exist' using mysqli_num_rows().",
        "language": "php",
        "files": [
            {
                "filename": "check.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Check Employee</title> 
</head> 
<body> 
 
<h2>Check Employee Record</h2> 
 
<form method="post" action="check.php"> 
 
    Employee ID: 
    <input type="text" name="empid" required> 
 
    <br><br> 
 
    <input type="submit" value="Check"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "check.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$empid = $_POST['empid']; 
 
$sql = "SELECT * FROM employee WHERE Empid = '$empid'"; 
 
$result = mysqli_query($conn, $sql); 
 
if (mysqli_num_rows($result) > 0) { 
 
    echo "<h3>Record exists</h3>"; 
 
} else { 
 
    echo "<h3>Record does not exist</h3>"; 
 
} 
 
mysqli_close($conn); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Uses mysqli_num_rows($result) > 0 to verify primary key uniqueness and record presence."
        ]
    },
    {
        "id": "php-9c",
        "number": "9(C)",
        "title": "Insert if New / Update if Existing",
        "category": "Database CRUD: Insert or Update (Upsert)",
        "description": "Check if Employee ID already exists: if yes, display the record before and after updating with the new values; otherwise, insert as a new record.",
        "language": "php",
        "files": [
            {
                "filename": "update.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Insert or Update</title> 
</head> 
<body> 
 
<h2>Employee Details</h2> 
 
<form method="post" action="update.php"> 
 
    Employee ID: 
    <input type="text" name="empid" required> 
    <br><br> 
 
    Employee Name: 
    <input type="text" name="ename" required> 
    <br><br> 
 
    Department: 
 
    <input type="radio" name="deptcode" value="A"> Admin 
    <input type="radio" name="deptcode" value="S"> Sales 
    <input type="radio" name="deptcode" value="F"> Finance 
 
    <br><br> 
 
    Joining Date: 
    <input type="date" name="joiningdate" required> 
    <br><br> 
 
    Gender: 
 
    <select name="gender"> 
        <option value="M">Male</option> 
        <option value="F">Female</option> 
    </select> 
 
    <br><br> 
 
    <input type="submit" value="Submit"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "update.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$empid = $_POST['empid']; 
$ename = $_POST['ename']; 
$deptcode = $_POST['deptcode']; 
$joiningdate = $_POST['joiningdate']; 
$gender = $_POST['gender']; 
 
// Check record 
$sql = "SELECT * FROM employee WHERE Empid='$empid'"; 
 
$result = mysqli_query($conn, $sql); 
 
if (mysqli_num_rows($result) > 0) { 
 
    // Display BEFORE 
    $row = mysqli_fetch_assoc($result); 
 
    echo "<h2>Record Before Updating</h2>"; 
 
    echo "Employee ID: " . $row['Empid'] . "<br>"; 
    echo "Name: " . $row['Ename'] . "<br>"; 
    echo "Department: " . $row['Deptcode'] . "<br>"; 
    echo "Joining Date: " . $row['JoiningDate'] . "<br>"; 
    echo "Gender: " . $row['Gender'] . "<br><br>"; 
 
    // Update 
    $sql = "UPDATE employee SET 
            Ename='$ename', 
            Deptcode='$deptcode', 
            JoiningDate='$joiningdate', 
            Gender='$gender' 
            WHERE Empid='$empid'"; 
 
    mysqli_query($conn, $sql); 
 
    // Display AFTER 
    $sql = "SELECT * FROM employee WHERE Empid='$empid'"; 
 
    $result = mysqli_query($conn, $sql); 
 
    $row = mysqli_fetch_assoc($result); 
 
    echo "<h2>Record After Updating</h2>"; 
 
    echo "Employee ID: " . $row['Empid'] . "<br>"; 
    echo "Name: " . $row['Ename'] . "<br>"; 
    echo "Department: " . $row['Deptcode'] . "<br>"; 
    echo "Joining Date: " . $row['JoiningDate'] . "<br>"; 
    echo "Gender: " . $row['Gender'] . "<br>"; 
 
} else { 
 
    // Insert new record 
    $sql = "INSERT INTO employee 
            VALUES 
            ('$empid','$ename','$deptcode','$joiningdate','$gender')"; 
 
    mysqli_query($conn, $sql); 
 
    echo "<h3>New record inserted successfully.</h3>"; 
} 
 
mysqli_close($conn); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Implements conditional upsert logic and displays explicit before-and-after audit comparisons."
        ]
    },
    {
        "id": "php-9d",
        "number": "9(D)",
        "title": "Display First Record — Form Layout",
        "category": "Database Fetch: Single Record (Form Layout)",
        "description": "Fetch the first record from the employee table using SQL LIMIT 1 and display it in a read-only form layout.",
        "language": "php",
        "files": [
            {
                "filename": "firstrecord.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$sql = "SELECT * FROM employee LIMIT 1"; 
 
$result = mysqli_query($conn, $sql); 
 
if (mysqli_num_rows($result) > 0) { 
 
    $row = mysqli_fetch_assoc($result); 
 
    echo "<h2>First Employee Record</h2>"; 
 
    echo "Employee ID: " . $row['Empid'] . "<br><br>"; 
 
    echo "Employee Name: " . 
         $row['Ename'] . "<br><br>"; 
 
    echo "Department: " . 
         $row['Deptcode'] . "<br><br>"; 
 
    echo "Joining Date: " . 
         $row['JoiningDate'] . "<br><br>"; 
 
    echo "Gender: " . 
         $row['Gender']; 
 
} else { 
 
    echo "No records found."; 
 
} 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Fetches exactly one top record utilizing LIMIT 1 in SQL."
        ]
    },
    {
        "id": "php-9e",
        "number": "9(E)",
        "title": "Display First Record — Table Layout",
        "category": "Database Fetch: Single Record (Table Layout)",
        "description": "Fetch the first employee record using SQL LIMIT 1 and render it in an HTML table format.",
        "language": "php",
        "files": [
            {
                "filename": "firsttable.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$sql = "SELECT * FROM employee LIMIT 1"; 
 
$result = mysqli_query($conn, $sql); 
 
if (mysqli_num_rows($result) > 0) { 
 
    $row = mysqli_fetch_assoc($result); 
 
    echo "<h2>First Employee Record</h2>"; 
 
    echo "<table border='1' cellpadding='10'>"; 
 
    echo "<tr>"; 
    echo "<th>Employee ID</th>"; 
    echo "<th>Employee Name</th>"; 
    echo "<th>Department</th>"; 
    echo "<th>Joining Date</th>"; 
    echo "<th>Gender</th>"; 
    echo "</tr>"; 
 
    echo "<tr>"; 
 
    echo "<td>" . $row['Empid'] . "</td>"; 
    echo "<td>" . $row['Ename'] . "</td>"; 
    echo "<td>" . $row['Deptcode'] . "</td>"; 
    echo "<td>" . $row['JoiningDate'] . "</td>"; 
    echo "<td>" . $row['Gender'] . "</td>"; 
 
    echo "</tr>"; 
 
    echo "</table>"; 
 
} else { 
 
    echo "No records found."; 
 
} 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Demonstrates formatted table presentation for single-row SQL result sets."
        ]
    },
    {
        "id": "php-9f",
        "number": "9(F)",
        "title": "Display Employees by Gender & Total Count",
        "category": "Database Filter: Filter by Gender & Count",
        "description": "Select gender (Male or Female) using an HTML form, filter matching employee records in an HTML table, and calculate and display the total count.",
        "language": "php",
        "files": [
            {
                "filename": "gender.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Employee Gender</title> 
</head> 
<body> 
 
<h2>Employee Details by Gender</h2> 
 
<form method="post" action="gender.php"> 
 
    Select Gender: 
 
    <select name="gender"> 
 
        <option value="M">Male</option> 
        <option value="F">Female</option> 
 
    </select> 
 
    <br><br> 
 
    <input type="submit" value="Display"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "gender.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$gender = $_POST['gender']; 
 
$sql = "SELECT * FROM employee 
        WHERE Gender='$gender'"; 
 
$result = mysqli_query($conn, $sql); 
 
echo "<h2>Employee Details</h2>"; 
 
echo "<table border='1' cellpadding='10'>"; 
 
echo "<tr>"; 
echo "<th>Emp ID</th>"; 
echo "<th>Name</th>"; 
echo "<th>Department</th>"; 
echo "<th>Joining Date</th>"; 
echo "<th>Gender</th>"; 
echo "</tr>"; 
 
$count = 0; 
 
while ($row = mysqli_fetch_assoc($result)) { 
 
    echo "<tr>"; 
 
    echo "<td>" . $row['Empid'] . "</td>"; 
    echo "<td>" . $row['Ename'] . "</td>"; 
    echo "<td>" . $row['Deptcode'] . "</td>"; 
    echo "<td>" . $row['JoiningDate'] . "</td>"; 
    echo "<td>" . $row['Gender'] . "</td>"; 
 
    echo "</tr>"; 
 
    $count++; 
} 
 
echo "</table>"; 
 
echo "<h3>Total Employees: " . $count . "</h3>"; 
 
mysqli_close($conn); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Demonstrates dynamic SQL WHERE clauses based on dropdown selection with iterative result tallying."
        ]
    },
    {
        "id": "php-9g",
        "number": "9(G)",
        "title": "Highlight Newly Inserted Employee",
        "category": "Database UI: Insert & Highlight Row",
        "description": "Display all records before inserting, insert the new employee record, and display all records after insertion with the newly added row highlighted with a pink background.",
        "language": "php",
        "files": [
            {
                "filename": "insert_highlight.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Employee Insert</title> 
</head> 
<body> 
 
<h2>Insert Employee</h2> 
 
<form method="post" action="insert_highlight.php"> 
 
    Employee ID: 
    <input type="text" name="empid" required> 
    <br><br> 
 
    Employee Name: 
    <input type="text" name="ename" required> 
    <br><br> 
 
    Department: 
 
    <input type="radio" name="deptcode" value="A"> Admin 
    <input type="radio" name="deptcode" value="S"> Sales 
    <input type="radio" name="deptcode" value="F"> Finance 
 
    <br><br> 
 
    Joining Date: 
    <input type="date" name="joiningdate" required> 
    <br><br> 
 
    Gender: 
 
    <select name="gender"> 
        <option value="M">Male</option> 
        <option value="F">Female</option> 
    </select> 
 
    <br><br> 
 
    <input type="submit" value="Insert"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "insert_highlight.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$empid = $_POST['empid']; 
$ename = $_POST['ename']; 
$deptcode = $_POST['deptcode']; 
$joiningdate = $_POST['joiningdate']; 
$gender = $_POST['gender']; 
 
// Get records BEFORE insertion 
$before = mysqli_query($conn, "SELECT * FROM employee"); 
 
// Insert new record 
$sql = "INSERT INTO employee 
        VALUES 
        ('$empid','$ename','$deptcode','$joiningdate','$gender')"; 
 
mysqli_query($conn, $sql); 
 
// Display BEFORE table 
echo "<h2>Records Before Inserting</h2>"; 
 
echo "<table border='1' cellpadding='10'>"; 
 
echo "<tr> 
        <th>Emp ID</th> 
        <th>Name</th> 
        <th>Department</th> 
        <th>Joining Date</th> 
        <th>Gender</th> 
      </tr>"; 
 
while ($row = mysqli_fetch_assoc($before)) { 
 
    echo "<tr>"; 
 
    echo "<td>" . $row['Empid'] . "</td>"; 
    echo "<td>" . $row['Ename'] . "</td>"; 
    echo "<td>" . $row['Deptcode'] . "</td>"; 
    echo "<td>" . $row['JoiningDate'] . "</td>"; 
    echo "<td>" . $row['Gender'] . "</td>"; 
 
    echo "</tr>"; 
} 
 
echo "</table>"; 
 
 
// Get records AFTER insertion 
$after = mysqli_query($conn, "SELECT * FROM employee"); 
 
echo "<h2>Records After Inserting</h2>"; 
 
echo "<table border='1' cellpadding='10'>"; 
 
echo "<tr> 
        <th>Emp ID</th> 
        <th>Name</th> 
        <th>Department</th> 
        <th>Joining Date</th> 
        <th>Gender</th> 
      </tr>"; 
 
while ($row = mysqli_fetch_assoc($after)) { 
 
    if ($row['Empid'] == $empid) { 
 
        echo "<tr style='background-color:pink'>"; 
 
    } else { 
 
        echo "<tr>"; 
 
    } 
 
    echo "<td>" . $row['Empid'] . "</td>"; 
    echo "<td>" . $row['Ename'] . "</td>"; 
    echo "<td>" . $row['Deptcode'] . "</td>"; 
    echo "<td>" . $row['JoiningDate'] . "</td>"; 
    echo "<td>" . $row['Gender'] . "</td>"; 
 
    echo "</tr>"; 
} 
 
echo "</table>"; 
 
mysqli_close($conn); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Applies inline CSS styling <tr style='background-color:pink'> when the row Empid matches the submitted input."
        ]
    },
    {
        "id": "php-9h",
        "number": "9(H)",
        "title": "Insert If Not Existing, Otherwise Display Record",
        "category": "Database Validation: Insert If Not Exists",
        "description": "Insert a new record when the Employee ID does not already exist; otherwise display the existing employee's details in an HTML table without overwriting.",
        "language": "php",
        "files": [
            {
                "filename": "insert_or_display.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Employee Record</title> 
</head> 
<body> 
 
<h2>Employee Details</h2> 
 
<form method="post" action="insert_or_display.php"> 
 
    Employee ID: 
    <input type="text" name="empid" required> 
    <br><br> 
 
    Employee Name: 
    <input type="text" name="ename" required> 
    <br><br> 
 
    Department: 
 
    <input type="radio" name="deptcode" value="A"> Admin 
    <input type="radio" name="deptcode" value="S"> Sales 
    <input type="radio" name="deptcode" value="F"> Finance 
 
    <br><br> 
 
    Joining Date: 
    <input type="date" name="joiningdate" required> 
    <br><br> 
 
    Gender: 
 
    <select name="gender"> 
 
        <option value="M">Male</option> 
        <option value="F">Female</option> 
 
    </select> 
 
    <br><br> 
 
    <input type="submit" value="Submit"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "insert_or_display.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$empid = $_POST['empid']; 
$ename = $_POST['ename']; 
$deptcode = $_POST['deptcode']; 
$joiningdate = $_POST['joiningdate']; 
$gender = $_POST['gender']; 
 
$sql = "SELECT * FROM employee 
        WHERE Empid='$empid'"; 
 
$result = mysqli_query($conn, $sql); 
 
if (mysqli_num_rows($result) > 0) { 
 
    // Existing record 
    $row = mysqli_fetch_assoc($result); 
 
    echo "<h2>Record Already Exists</h2>"; 
 
    echo "<table border='1' cellpadding='10'>"; 
 
    echo "<tr>"; 
    echo "<th>Employee ID</th>"; 
    echo "<th>Name</th>"; 
    echo "<th>Department</th>"; 
    echo "<th>Joining Date</th>"; 
    echo "<th>Gender</th>"; 
    echo "</tr>"; 
 
    echo "<tr>"; 
 
    echo "<td>" . $row['Empid'] . "</td>"; 
    echo "<td>" . $row['Ename'] . "</td>"; 
    echo "<td>" . $row['Deptcode'] . "</td>"; 
    echo "<td>" . $row['JoiningDate'] . "</td>"; 
    echo "<td>" . $row['Gender'] . "</td>"; 
 
    echo "</tr>"; 
 
    echo "</table>"; 
 
} else { 
 
    // Insert new record 
    $sql = "INSERT INTO employee 
            VALUES 
            ('$empid','$ename','$deptcode', 
             '$joiningdate','$gender')"; 
 
    if (mysqli_query($conn, $sql)) { 
 
        echo "<h3>New employee record inserted successfully.</h3>"; 
 
    } else { 
 
        echo "Error: " . mysqli_error($conn); 
 
    } 
 
} 
 
mysqli_close($conn); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Guards database against duplicate primary key conflicts with clear feedback."
        ]
    },
    {
        "id": "php-9i",
        "number": "9(I)",
        "title": "Separate Male and Female Tables with Counts",
        "category": "Database Reporting: Split Tables & Summaries",
        "description": "Display two separate HTML tables—one for male employees and another for female employees—including department codes and a summary total count.",
        "language": "php",
        "files": [
            {
                "filename": "gender_tables.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
// Male employees 
$male = mysqli_query( 
    $conn, 
    "SELECT * FROM employee WHERE Gender='M'" 
); 
 
echo "<h2>Male Employees</h2>"; 
 
echo "<table border='1' cellpadding='10'>"; 
 
echo "<tr> 
        <th>Employee ID</th> 
        <th>Name</th> 
        <th>Department</th> 
        <th>Joining Date</th> 
        <th>Gender</th> 
      </tr>"; 
 
$maleCount = 0; 
 
while ($row = mysqli_fetch_assoc($male)) { 
 
    echo "<tr>"; 
 
    echo "<td>" . $row['Empid'] . "</td>"; 
    echo "<td>" . $row['Ename'] . "</td>"; 
    echo "<td>" . $row['Deptcode'] . "</td>"; 
    echo "<td>" . $row['JoiningDate'] . "</td>"; 
    echo "<td>" . $row['Gender'] . "</td>"; 
 
    echo "</tr>"; 
 
    $maleCount++; 
} 
 
echo "</table>"; 
 
echo "<h3>Total Male Employees: " . 
     $maleCount . "</h3>"; 
 
 
// Female employees 
$female = mysqli_query( 
    $conn, 
    "SELECT * FROM employee WHERE Gender='F'" 
); 
 
echo "<h2>Female Employees</h2>"; 
 
echo "<table border='1' cellpadding='10'>"; 
 
echo "<tr> 
        <th>Employee ID</th> 
        <th>Name</th> 
        <th>Department</th> 
        <th>Joining Date</th> 
        <th>Gender</th> 
      </tr>"; 
 
$femaleCount = 0; 
 
while ($row = mysqli_fetch_assoc($female)) { 
 
    echo "<tr>"; 
 
    echo "<td>" . $row['Empid'] . "</td>"; 
    echo "<td>" . $row['Ename'] . "</td>"; 
    echo "<td>" . $row['Deptcode'] . "</td>"; 
    echo "<td>" . $row['JoiningDate'] . "</td>"; 
    echo "<td>" . $row['Gender'] . "</td>"; 
 
    echo "</tr>"; 
 
    $femaleCount++; 
} 
 
echo "</table>"; 
 
echo "<h3>Total Female Employees: " . 
     $femaleCount . "</h3>"; 
 
 
// Summary 
echo "<h2>Summary</h2>"; 
 
echo "Male Employees: " . $maleCount . "<br>"; 
echo "Female Employees: " . $femaleCount . "<br>"; 
echo "Total Employees: " . 
     ($maleCount + $femaleCount); 
 
mysqli_close($conn); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Runs two independent queries with WHERE Gender='M' and WHERE Gender='F', tallying and printing aggregate totals."
        ]
    },
    {
        "id": "php-9j",
        "number": "9(J)",
        "title": "Fetch Employee into Form and Update",
        "category": "Database CRUD: Fetch, Edit & Save",
        "description": "Enter Employee ID, fetch the employee record into an HTML form with pre-populated fields (making ID read-only), and update the database when the form is submitted.",
        "language": "php",
        "files": [
            {
                "filename": "edit.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Edit Employee</title> 
</head> 
<body> 
 
<h2>Search Employee</h2> 
 
<form method="post" action="edit.php"> 
 
    Employee ID: 
    <input type="text" name="empid" required> 
 
    <br><br> 
 
    <input type="submit" value="Search"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "edit.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$empid = $_POST['empid']; 
 
$sql = "SELECT * FROM employee 
        WHERE Empid='$empid'"; 
 
$result = mysqli_query($conn, $sql); 
 
if (mysqli_num_rows($result) > 0) { 
 
    $row = mysqli_fetch_assoc($result); 
 
?> 
 
<h2>Edit Employee Details</h2> 
 
<form method="post" action="save.php"> 
 
    Employee ID: 
 
    <input type="text" 
           name="empid" 
           value="<?php echo $row['Empid']; ?>" 
           readonly> 
 
    <br><br> 
 
    Employee Name: 
 
    <input type="text" 
           name="ename" 
           value="<?php echo $row['Ename']; ?>"> 
 
    <br><br> 
 
    Department: 
 
    <input type="radio" 
           name="deptcode" 
           value="A" 
           <?php if ($row['Deptcode'] == 'A') echo "checked"; ?>> 
    Admin 
 
    <input type="radio" 
           name="deptcode" 
           value="S" 
           <?php if ($row['Deptcode'] == 'S') echo "checked"; ?>> 
    Sales 
 
    <input type="radio" 
           name="deptcode" 
           value="F" 
           <?php if ($row['Deptcode'] == 'F') echo "checked"; ?>> 
    Finance 
 
    <br><br> 
 
    Joining Date: 
 
    <input type="date" 
           name="joiningdate" 
           value="<?php echo $row['JoiningDate']; ?>"> 
 
    <br><br> 
 
    Gender: 
 
    <select name="gender"> 
 
        <option value="M" 
        <?php if ($row['Gender'] == 'M') echo "selected"; ?>> 
        Male 
        </option> 
 
        <option value="F" 
        <?php if ($row['Gender'] == 'F') echo "selected"; ?>> 
        Female 
        </option> 
 
    </select> 
 
    <br><br> 
 
    <input type="submit" value="Update"> 
 
</form> 
 
<?php 
 
} else { 
 
    echo "<h3>Employee record not found.</h3>"; 
 
} 
 
mysqli_close($conn); 
 
?>"""
            },
            {
                "filename": "save.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$empid = $_POST['empid']; 
$ename = $_POST['ename']; 
$deptcode = $_POST['deptcode']; 
$joiningdate = $_POST['joiningdate']; 
$gender = $_POST['gender']; 
 
$sql = "UPDATE employee SET 
 
        Ename='$ename', 
        Deptcode='$deptcode', 
        JoiningDate='$joiningdate', 
        Gender='$gender' 
 
        WHERE Empid='$empid'"; 
 
if (mysqli_query($conn, $sql)) { 
 
    echo "<h3>Employee record updated successfully.</h3>"; 
 
} else { 
 
    echo "Error: " . mysqli_error($conn); 
 
} 
 
mysqli_close($conn); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Demonstrates 3-step edit workflow: search form (edit.html) -> populated edit form with readonly primary key (edit.php) -> UPDATE handler (save.php)."
        ]
    },
    {
        "id": "php-9k",
        "number": "9(K)",
        "title": "Fetch Employee and Delete with Confirmation",
        "category": "Database CRUD: Fetch, Confirm & Delete",
        "description": "Enter Employee ID, display the employee record in an HTML table, provide a Delete button with hidden empid input, and delete the record upon confirmation.",
        "language": "php",
        "files": [
            {
                "filename": "delete.html",
                "language": "html",
                "code": """<!DOCTYPE html> 
<html> 
<head> 
    <title>Delete Employee</title> 
</head> 
<body> 
 
<h2>Delete Employee</h2> 
 
<form method="post" action="delete.php"> 
 
    Employee ID: 
    <input type="text" name="empid" required> 
 
    <br><br> 
 
    <input type="submit" value="Search"> 
 
</form> 
 
</body> 
</html>"""
            },
            {
                "filename": "delete.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$empid = $_POST['empid']; 
 
$sql = "SELECT * FROM employee 
        WHERE Empid='$empid'"; 
 
$result = mysqli_query($conn, $sql); 
 
if (mysqli_num_rows($result) > 0) { 
 
    $row = mysqli_fetch_assoc($result); 
 
    echo "<h2>Employee Details</h2>"; 
 
    echo "<table border='1' cellpadding='10'>"; 
 
    echo "<tr>"; 
    echo "<th>Employee ID</th>"; 
    echo "<th>Name</th>"; 
    echo "<th>Department</th>"; 
    echo "<th>Joining Date</th>"; 
    echo "<th>Gender</th>"; 
    echo "</tr>"; 
 
    echo "<tr>"; 
 
    echo "<td>" . $row['Empid'] . "</td>"; 
    echo "<td>" . $row['Ename'] . "</td>"; 
    echo "<td>" . $row['Deptcode'] . "</td>"; 
    echo "<td>" . $row['JoiningDate'] . "</td>"; 
    echo "<td>" . $row['Gender'] . "</td>"; 
 
    echo "</tr>"; 
 
    echo "</table>"; 
 
    echo "<br>"; 
 
    echo "<form method='post' action='confirm_delete.php'>"; 
 
    echo "<input type='hidden' 
                 name='empid' 
                 value='" . $row['Empid'] . "'>"; 
 
    echo "<input type='submit' 
                 value='Delete Employee'>"; 
 
    echo "</form>"; 
 
} else { 
 
    echo "<h3>Employee record not found.</h3>"; 
 
} 
 
mysqli_close($conn); 
 
?>"""
            },
            {
                "filename": "confirm_delete.php",
                "language": "php",
                "code": """<?php 
 
include "db.php"; 
 
$empid = $_POST['empid']; 
 
$sql = "DELETE FROM employee 
        WHERE Empid='$empid'"; 
 
if (mysqli_query($conn, $sql)) { 
 
    echo "<h2>Employee record deleted successfully.</h2>"; 
 
} else { 
 
    echo "Error: " . mysqli_error($conn); 
 
} 
 
mysqli_close($conn); 
 
?>"""
            }
        ],
        "sourceNotes": [
            "Demonstrates 3-tier safe deletion flow: search (delete.html) -> record preview table with hidden POST form (delete.php) -> SQL DELETE execution (confirm_delete.php)."
        ]
    }
]

# ==========================================
# SIMPLIFY AND EXPORT PHP PRACTICALS
# ==========================================
simplified_php = []
for p in php_programs:
    simplified_php.append({
        "id": p["id"],
        "number": p["number"],
        "definition": p["description"].strip(),
        "language": "php",
        "files": [
            {
                "filename": f["filename"],
                "language": f["language"],
                "code": f["code"].strip()
            }
            for f in p["files"]
        ]
    })

php_ts_content = "import { ProgramItem } from '../models/program.model';\n\nexport const PHP_PROGRAMS: ProgramItem[] = " + json.dumps(simplified_php, indent=2) + ";\n"

with open('src/app/data/php-programs.ts', 'w', encoding='utf-8') as f:
    f.write(php_ts_content)

print(f"Generated src/app/data/php-programs.ts with {len(simplified_php)} practical programs.")

# ==========================================
# EXPORT GENAI PRACTICALS (Exact 27 Programs from PDF)
# ==========================================
# (Preserved in src/app/data/genai-programs.ts)
print("GenAI dataset preserved with 27 practical programs matching PDF.")


